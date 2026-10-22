/**
 * Blog posts. The source of truth is WordPress (the client writes there).
 * `npm run sync:wp` saves them to wp-posts.json before every build.
 * If that file is empty (before the first sync) we fall back to the six starter articles.
 */
import snapshot from './wp-posts.json';
import { legacyPosts } from './legacyPosts';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  body: string;
}

/** Top level words that already belong to real pages. A post with one of these slugs goes under /blog/. */
const reserved = new Set([
  'about', 'blog', 'contact', 'services', 'conditions', 'press', 'privacy', 'terms-conditions', '404', 'appointment', 'sitemap-index', 'sitemap-0', 'images', 'fonts', 'api',
]);

/** Used when a post has no featured photo. */
const fallbackImage = '/images/C1A4022-scaled-e1747319220831.jpg';

const source: BlogPost[] = (snapshot as BlogPost[]).length
  ? (snapshot as BlogPost[])
  : legacyPosts.map((p) => ({ ...p, imageAlt: p.title }));

/** Every post, newest first. WordPress posts keep their original top level web address, e.g. /recovery-after-disc-replacement-what-to-expect/. */
export const blogPosts = source
  .map((p) => ({ ...p, image: p.image || fallbackImage, href: reserved.has(p.slug) ? `/blog/${p.slug}/` : `/${p.slug}/` }))
  .sort((a, b) => b.date.localeCompare(a.date));
