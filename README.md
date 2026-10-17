# Nagara Foundation website (static HTML, no build step)

## Deploy on GitHub Pages
1. Create a free account at github.com. Click **New repository**, name it `nagara-foundation-website`, set Public, Create.
2. Click **uploading an existing file**, drag in ALL files and folders from this project (index.html at the top level), then **Commit changes**.
3. Go to **Settings → Pages**. Under Source choose **Deploy from a branch**, branch **main**, folder **/ (root)**, Save.
4. After 1–2 minutes the URL appears: https://YOUR-USERNAME.github.io/nagara-foundation-website/
5. To update later: open a file on GitHub, click the pencil, edit, Commit. Every commit is kept in History, so earlier versions can be restored.

## Where to edit
- Contact details / placeholders: search for `class="ph"` in each .html file (footer is repeated in every page).
- Marathi text: `js/translations.js`. Add `data-i18n="key"` to an HTML element, then a `key:"मराठी"` line.
- Pilot status: `pilot.html`. Impact results: rows in `impact.html`. Colours: top of `css/styles.css`.
- Photos: put in `assets/images/` and reference with a relative path (no leading slash).
- Before launch: set canonical URL, og:image, sitemap.xml.

## Troubleshooting
- 404: confirm index.html is at repo top level and Pages is enabled; wait 2 minutes.
- Missing CSS/images: paths are case-sensitive; do not start paths with `/`.
- Custom domain later: Settings → Pages → Custom domain.

## Using Claude for changes
Upload the changed file(s) and say: "Keep the existing design, relative paths and GitHub Pages compatibility."

## Status
Draft v1. Not yet done: Marathi for most inner-page text (falls back to English), browser testing, photographs. A native Marathi speaker should review all translations.
