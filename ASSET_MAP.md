# Asset Map

Only visual/public assets are copied. PHP, MODX/Evolution runtime files, cache, database dumps, credentials and manager assets are excluded.

| Legacy asset | New location |
| --- | --- |
| `assets/site/stylesheet/common.css` | `public/assets/site/stylesheet/common.css` |
| `assets/site/stylesheet/custom.css` | `public/assets/site/stylesheet/custom.css` |
| `assets/site/fonts/Stem-*` | `public/assets/site/fonts/Stem-*` |
| `assets/images/**` | `public/assets/images/**` |
| `assets/images/jumbotron-bg.png` | `public/images/jumbotron-bg.png` (CSS root URL) |
| `assets/images/jumbotron-bg-top-big.png` | `public/images/jumbotron-bg-top-big.png` (CSS root URL) |
| `images/services/**` | `public/images/services/**` |
| `images/files/**` | `public/images/files/**` |
| `favicon.ico`, `favicon-*.png` | `public/favicon.ico`, `public/favicon-*.png` |
| `apple-touch-icon.png`, `android-chrome-*.png`, `site.webmanifest` | `public/` |
| Root Google/Yandex verification HTML files | Same file names in `public/` |
| `assets/site/js/app.js` | Reimplement behavior in React components; do not copy bundle |
