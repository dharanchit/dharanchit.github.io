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
npm run deploy  # builds and pushes public/ to the main branch via gh-pages
```

## Structure

- `src/pages/` — routes (`index.js`, `about.js`, `blog.js`, `contact.js`, `blog/*.js` for individual posts)
- `src/components/Layout/` — shared header/footer chrome
- `src/components/Post/` — shared wrapper for blog post pages
- `src/data/posts.js` — blog post metadata used by the blog index and post pages
- `src/styles/global.css` — global styles and theme variables (light/dark via `prefers-color-scheme`)
