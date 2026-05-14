# zachadam.com

Personal site for Zach Adam — writer-composer of musical theater.

## Stack
Plain static HTML. React via Babel (in-browser, no build step). Embedded Spotify + YouTube thumbnails.

## Files
- `index.html` — entry point
- `direction-playbill.jsx` — the entire React UI (loaded via Babel `<script type="text/babel">`)
- `site-data.js` — content (bio, works, music, videos, socials)
- `assets/` — logo, posters, portraits

## Deploy

### Cloudflare Pages (recommended)
1. Push this repo to GitHub.
2. Cloudflare → Workers & Pages → Create → Pages → **Connect to Git**.
3. Build settings: **leave build command empty**, output directory: `/` (or leave default).
4. Deploy.
5. Pages → **Custom domains** → add `zachadam.com` and `www.zachadam.com`.

### GitHub Pages
Settings → Pages → Source: `Deploy from a branch` → `main` / root. Then add a `CNAME` file containing `zachadam.com` and point your DNS at `<username>.github.io`.

## Editing content
Almost everything visible on the site lives in **`site-data.js`** — bio paragraphs, work synopses, song list, video links, social URLs, contact email. Edit values there and reload.

Visual changes (colors, layout, type) live in **`direction-playbill.jsx`**. The palette is the `P` object at the top.
