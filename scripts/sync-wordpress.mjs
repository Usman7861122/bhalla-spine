/**
 * Pulls blog posts from WordPress and saves them for the site build.
 *
 *   npm run sync:wp                      (also runs automatically before `npm run build`)
 *
 * Reads    WP_API   REST address of the WordPress site, default below.
 *                   When the cms subdomain exists, set WP_API=https://cms.bhallaspine.com/wp-json/wp/v2
 *                   (as a GitHub secret/variable or in your hosting build settings).
 * Writes   src/data/wp-posts.json          the cleaned posts (commit this file: it is the safety copy)
 *          public/images/blog/<slug>/...   the photos, so the site never depends on WordPress being online
 *
 * If WordPress cannot be reached the script keeps the last saved copy and exits normally,
 * so a WordPress outage never breaks a site build.
 * Set SKIP_WP_SYNC=1 to skip the sync entirely.
 */
import fs from 'node:fs';
import path from 'node:path';
import sanitizeHtml from 'sanitize-html';

const API = (process.env.WP_API || 'https://www.bhallaspine.com/wp-json/wp/v2').replace(/\/$/, '');
const OUT = path.resolve('src/data/wp-posts.json');
const IMG_DIR = path.resolve('public/images/blog');
/** Posts that already live elsewhere on the site (press pages). They are not blog posts. */
const SKIP = new Set([
  'trust-how-surgeons-kept-what-health-care-lost',
  'americas-best-spine-surgeons-2024',
  ...(process.env.WP_SKIP_SLUGS || '').split(',').map((s) => s.trim()).filter(Boolean),
]);

if (process.env.SKIP_WP_SYNC) {
  console.log('[wp] SKIP_WP_SYNC set, keeping saved posts.');
  process.exit(0);
}

const decode = (s) =>
  String(s)
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&hellip;/g, '…')
    .replace(/&rsquo;|&lsquo;/g, '’')
    .replace(/&ldquo;|&rdquo;/g, '“');
const text = (html) => decode(String(html).replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

async function getJson(url) {
  const res = await fetch(url, { headers: { Accept: 'application/json', 'User-Agent': 'bhalla-spine-build' }, signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

async function fetchAll() {
  const posts = [];
  for (let page = 1; page < 20; page++) {
    const batch = await getJson(`${API}/posts?per_page=50&page=${page}&_embed=1&orderby=date&order=desc`);
    posts.push(...batch);
    if (batch.length < 50) break;
  }
  return posts;
}

const saved = new Map();
async function download(url, slug, name) {
  if (!url) return '';
  try {
    const clean = url.split('?')[0];
    const ext = path.extname(clean).toLowerCase() || '.jpg';
    const file = `${name}${ext}`.replace(/[^a-z0-9._-]/gi, '-');
    const rel = `/images/blog/${slug}/${file}`;
    if (saved.has(url)) return saved.get(url);
    const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
    if (!res.ok) throw new Error(String(res.status));
    const buf = Buffer.from(await res.arrayBuffer());
    fs.mkdirSync(path.join(IMG_DIR, slug), { recursive: true });
    fs.writeFileSync(path.join(IMG_DIR, slug, file), buf);
    saved.set(url, rel);
    return rel;
  } catch (e) {
    console.warn(`[wp] image not saved (${e.message}): ${url}`);
    return url; // fall back to the original address
  }
}

function clean(html) {
  return sanitizeHtml(html, {
    allowedTags: ['p', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'strong', 'b', 'em', 'i', 'a', 'br', 'blockquote', 'img', 'figure', 'figcaption', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'hr'],
    allowedAttributes: { a: ['href', 'title', 'target', 'rel'], img: ['src', 'alt', 'width', 'height'], th: ['colspan'], td: ['colspan'] },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    transformTags: {
      h1: 'h2',
      h5: 'h4',
      h6: 'h4',
      b: 'strong',
      i: 'em',
      a: (tag, attribs) => {
        const external = /^https?:/.test(attribs.href || '') && !/bhallaspine\.com/.test(attribs.href || '');
        return { tagName: 'a', attribs: external ? { ...attribs, target: '_blank', rel: 'noopener' } : attribs };
      },
    },
    exclusiveFilter: (f) => ['p', 'li', 'h2', 'h3', 'h4'].includes(f.tag) && !f.text.trim() && !f.mediaChildren?.length,
  })
    .replace(/&nbsp;| /g, ' ')
    .replace(/\s*<br\s*\/?>\s*(?=<\/(p|h\d|li)>)/g, '')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

function excerptOf(post, bodyHtml) {
  const fromWp = text(post.excerpt?.rendered || '');
  const base = fromWp || text(bodyHtml.split('</p>')[0] || '');
  if (base.length <= 170) return base;
  const cut = base.slice(0, 170);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '…';
}

try {
  const raw = await fetchAll();
  const out = [];
  for (const p of raw) {
    if (SKIP.has(p.slug)) continue;
    const media = p._embedded?.['wp:featuredmedia']?.[0];
    const title = decode(p.title.rendered).trim();
    let body = clean(p.content.rendered);
    // Save photos used inside the article too.
    const inlineImgs = [...body.matchAll(/<img[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1]);
    for (const [i, src] of inlineImgs.entries()) body = body.split(`src="${src}"`).join(`src="${await download(src, p.slug, `inline-${i + 1}`)}"`);
    const image = await download(media?.source_url, p.slug, 'featured');
    const category = decode(p._embedded?.['wp:term']?.[0]?.[0]?.name || 'Articles');
    const words = text(body).split(' ').length;
    out.push({
      slug: p.slug,
      title,
      excerpt: excerptOf(p, body),
      date: p.date.slice(0, 10),
      modified: (p.modified || p.date).slice(0, 10),
      readTime: `${Math.max(1, Math.round(words / 200))} min read`,
      category: category === 'Uncategorized' ? 'Articles' : category,
      image,
      imageAlt: (media?.alt_text || '').trim() || title,
      body,
    });
  }
  if (!out.length) throw new Error('WordPress returned no posts');
  out.sort((a, b) => b.date.localeCompare(a.date));
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n');
  console.log(`[wp] saved ${out.length} posts from ${API}`);
} catch (e) {
  console.warn(`[wp] could not sync (${e.message}). Keeping the last saved posts.`);
}
