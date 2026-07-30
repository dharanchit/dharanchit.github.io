# dharanchit.github.io

Personal site and blog, built with [Gatsby](https://www.gatsbyjs.com/).

## Development

```shell
npm install
npm run develop
```

The site runs at `http://localhost:8000`.

## Build & deploy

```shell
npm run build   # outputs to public/
```

Deployment is automatic: a GitHub Actions workflow (`.github/workflows/deploy.yml`)
builds the site and publishes it to GitHub Pages on every push to `main`. This
requires the repo's Pages source to be set to "GitHub Actions" under
Settings → Pages.

## Structure

- `src/pages/` — routes (`index.js`, `about.js`, `blog.js`, `contact.js`, `blog/*.js` for individual posts)
- `src/components/Layout/` — shared header/footer chrome
- `src/components/Post/` — shared wrapper for blog post pages
- `src/data/posts.js` — blog post metadata used by the blog index and post pages
- `src/styles/global.css` — global styles and theme variables (light/dark via `prefers-color-scheme`)
