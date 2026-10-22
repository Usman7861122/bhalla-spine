# Hosting the finished site on any server

The site is plain files: `npm run build` creates a `dist/` folder. Any web server can serve it.
The GitHub Action also saves `dist` as a downloadable zip called **site** on every run.

## What the server must do
1. Serve the files in `dist/`. `/about/` is the file `about/index.html`.
2. **Trailing slash:** `/about` must go to `/about/` (301).
3. **Old addresses:** 301 redirects from the old WordPress addresses. Ready made files are created by `npm run redirects`:
   - Apache / shared hosting: copy `deploy/htaccess` to `.htaccess` in the site folder.
   - nginx: `include` the file `deploy/nginx-redirects.conf` in the server block, and use the sample below.
   - Vercel: `vercel.json` (already generated).
   - S3 + CloudFront: use a CloudFront Function that rewrites `/folder/` to `/folder/index.html` and a redirect map from `redirects.json`; 403/404 returns `/404.html`.
4. **404 page:** show `/404.html` with status 404.
5. **HTTPS** and one main address (www or non-www) with a redirect from the other.
6. Optional but good: gzip/brotli, long cache for `/_astro/` and `/images/`, short cache for HTML.
7. The contact form posts to the Lambda address in `src/data/site.ts` (`contactApi`). Its list of allowed websites (`DEFAULT_ORIGINS` / `ALLOWED_ORIGINS`) must contain the final web address.

## nginx sample
```nginx
server {
  server_name bhallaspine.com www.bhallaspine.com;
  root /var/www/bhallaspine/dist;
  index index.html;
  include /etc/nginx/bhallaspine-redirects.conf;      # deploy/nginx-redirects.conf
  rewrite ^([^.?]*[^/])$ $1/ permanent;               # trailing slash
  location / { try_files $uri $uri/ =404; }
  error_page 404 /404.html;
  location /_astro/ { add_header Cache-Control "public, max-age=31536000, immutable"; }
}
```

## Getting the files onto the server
Pick one when the host is known:
- Download the **site** artifact from the Action and upload it (FTP/SFTP, control panel).
- Add an `rsync` or SFTP step to `.github/workflows/deploy-s3.yml` using the host's key as a GitHub secret.
- Build on the server itself (`git pull && npm ci && npm run build`) and point the web root at `dist/`.
