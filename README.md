# Deliver Us from Evil — Campaign Site (tiaslin.de)

The player-facing website for the *Deliver Us from Evil* dark fantasy campaign.

Built with [Astro](https://astro.build), deployed to [GitHub Pages](https://pages.github.com) via GitHub Actions. Fully static — no server-side code.

## Structure

- `src/content/pages/` — one Markdown file per site page (frontmatter: `title`, optional `nav` label, `eyebrow`, `subtitle`, `order`)
- `src/layouts/Sheet.astro` — the parchment layout: chapter bar, sheet, page turner, footer
- `src/styles/global.css` — the site's visual identity (parchment, gold, night)
- `public/` — static assets served as-is (`CNAME`, `og-image.png`)
- `.github/workflows/deploy.yml` — builds and deploys on every push to `main`

## Adding a page

1. Create `src/content/pages/<name>.md` with frontmatter (`title`, `order` at minimum)
2. Write the content — plain Markdown, or HTML using the existing classes (`concept-list`, `statline`, `divider`, …)
3. Open a PR; once merged, the site rebuilds and deploys automatically

## Local development

```bash
npm install
npm run dev     # dev server at http://localhost:4321
npm run build   # production build to ./dist
```
