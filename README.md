# AddLayer — static site

Plain HTML/CSS/JS replica of the AddLayer corporate site (design, colors and
functionality). No build step, no framework, no dependencies — just static
files.

```
index.html
404.html
robots.txt
favicon.ico
assets/
  css/style.css
  js/main.js
  img/
```

## Run locally

Any static file server works, e.g.:

```sh
npx serve .
```

## Deploy to Cloudflare Pages

1. Go to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages**.
2. Either connect this Git repo (build command: none, output directory: `/`),
   or use **Direct Upload** and drag this whole folder in.
3. Cloudflare Pages will publish it at `<project>.pages.dev` (and you can
   attach a custom domain afterwards).
