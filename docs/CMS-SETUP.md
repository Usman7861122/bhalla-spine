# Blog from WordPress (headless): setup guide

The client writes in WordPress. The Astro site pulls the posts when it builds.
Publishing a post triggers a rebuild, and the post is live in about 1 to 2 minutes.

```
WordPress (cms.bhallaspine.com)  --publish-->  GitHub Action  -->  npm run build  -->  finished site (dist)
        ^ client writes here                        pulls posts, saves photos         copied to the host
```

## 1. WordPress (hosting company or WordPress admin)
1. Put the WordPress site on `cms.bhallaspine.com` (the main address will point to the new site).
2. Settings > Reading > tick "Discourage search engines from indexing this site". Also add `X-Robots-Tag: noindex` if possible. We want only the new site in Google.
3. Keep pretty permalinks as "Post name" (`/%postname%/`). Do not change a post's slug after it is published: the slug is the web address.
4. Create a login for the client with the **Editor** role (not Administrator). Turn on two step login. Keep WordPress and plugins updated.
5. Tell the client the writing rules:
   - Title, short text, headings (H2/H3), lists, links and one **featured image** with **alt text** (describe the photo).
   - Fill the **Excerpt** box (one or two sentences). It is used on the blog cards.
   - Do not use page builders (Elementor etc.) inside posts. They do not carry over.
6. Check the REST API opens in a browser: `https://cms.bhallaspine.com/wp-json/wp/v2/posts`.

## 2. Tell the site where WordPress is
GitHub repo > Settings > Secrets and variables > Actions > **Variables** > New variable:
`WP_API` = `https://cms.bhallaspine.com/wp-json/wp/v2`

(Until `cms.` exists the site reads the old address, which is the default in `scripts/sync-wordpress.mjs`.)
Locally: `WP_API=... npm run sync:wp`, then commit `src/data/wp-posts.json` and `public/images/blog/`.

## 3. Rebuild when the client publishes
1. GitHub > Settings > Developer settings > Fine-grained tokens: a token for the repo `bhalla-spine` with **Contents: Read and write**. Copy it.
2. In `wp-config.php` on the WordPress server add one line:
   `define('GITHUB_DISPATCH_TOKEN', 'paste-the-token-here');`
3. Add this file as `wp-content/mu-plugins/rebuild-site.php` (no activation needed):

```php
<?php
/* Plugin Name: Rebuild site on publish */
add_action('transition_post_status', function ($new, $old, $post) {
    if ($post->post_type !== 'post') return;
    if ($new !== 'publish' && $old !== 'publish') return; // only live posts matter
    $token = defined('GITHUB_DISPATCH_TOKEN') ? GITHUB_DISPATCH_TOKEN : '';
    if (!$token) return;
    wp_remote_post('https://api.github.com/repos/Usman7861122/bhalla-spine/dispatches', [
        'headers' => [
            'Authorization' => 'Bearer ' . $token,
            'Accept'        => 'application/vnd.github+json',
            'User-Agent'    => 'wp-rebuild-site',
        ],
        'body'     => wp_json_encode(['event_type' => 'wordpress-publish']),
        'timeout'  => 10,
        'blocking' => false,
    ]);
}, 10, 3);
```

4. Test: publish a draft post, then watch GitHub > Actions. A run named "Upload site to S3" should start.

## How posts become pages
- A post keeps its WordPress address: `/<slug>/` (for example `/recovery-after-disc-replacement-what-to-expect/`).
  If a slug equals a real page (about, blog, contact...), it goes to `/blog/<slug>/` instead.
- The two press posts (`trust-how-surgeons...`, `americas-best-spine-surgeons-2024`) are skipped: they are press pages.
  Add more to skip with `WP_SKIP_SLUGS=slug1,slug2`.
- Old redirects for a post address are dropped automatically once that post exists.
- Photos are copied into the site at build time, so the site works even if WordPress is offline.
- If WordPress is down during a build, the last saved copy (`src/data/wp-posts.json`) is used and the build still passes.
