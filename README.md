# guildyard.com — Astro

The Guildyard Journal as a static site: real HTML per article, real URLs, no
JavaScript shipped to readers.

Built on the Guildyard design system. Tokens and the responsive layer are copied
from it verbatim; components are ported to `.astro` so they render at build time.

## Why this replaces the previous site

The previous version rendered client-side through in-browser Babel. Article text
was not in the HTML, so there was no search indexing, no link previews and no
reader mode; every article shared one URL; and React's **development** build was
being served from unpkg. All four are fixed here.

## Commands

```
npm install
npm run dev       # local, with hot reload
npm run build     # static output to dist/
npm run preview   # serve dist/ as it will deploy
```

## Deploying — sequence matters

GitHub Pages is currently `build_type: legacy`, publishing `main` at root. A
build step cannot run in that mode. **Do these in order, or the site goes down:**

1. Commit this project to a branch and open a PR. Do **not** push it to `main`
   root while Pages is still on legacy — legacy would publish `src/` and
   `package.json` as the site. That is the outage mode.
2. Confirm `.github/workflows/deploy.yml` runs green on the PR.
3. Merge to `main`. The workflow builds and uploads a Pages artifact.
4. **Only then**, a repo admin flips Pages source from *Deploy from a branch* to
   *GitHub Actions*. Flipping before a green build empties the site.

`public/CNAME` keeps the custom domain: everything in `public/` is copied to
`dist/` verbatim, so `CNAME` lands in the published output. DNS and the existing
certificate do not need to be redone.

`.nojekyll` is not needed under Actions — Jekyll never touches the artifact. It
is kept in `public/` anyway so a fallback to legacy publishing still works.

## One unconventional detail

The per-article route is **injected** in `astro.config.mjs` rather than living at
`src/pages/journal/[...slug].astro`. The design tool that authored this export
cannot write square brackets in filenames. `injectRoute` is documented, supported
Astro and behaves identically. If you prefer the conventional file, move
`src/routes/JournalArticle.astro` to `src/pages/journal/[...slug].astro`, fix its
three relative imports, and delete the small integration from the config.

## Content

One Markdown file per article in `src/content/journal/`. The filename is the URL
slug: `what-a-venture-owes-its-first-reader.md` publishes at
`/journal/what-a-venture-owes-its-first-reader/`.

```markdown
---
title: "What a venture owes its first reader"
lede: "The first person who reads your offer is not a customer."
kind: "Essay"
category: "Venture building"
date: 2026-08-16
---

Body in Markdown. Use ## for sections and #### for the copper field-note label.
```

Frontmatter is validated at build time (`src/content.config.ts`), so a bad
category or a missing date fails the build rather than shipping broken.

- `readingTime` is computed from the body at 200 words per minute unless you set
  it explicitly.
- `draft: true` keeps a piece out of listings, the archive, RSS and the sitemap.
- **Eight of the nine articles currently have frontmatter only and no body.** They
  are marked `draft: true` so nothing empty is published. Write the body and
  remove the flag. No placeholder prose was written for them on purpose.

## House rules that are enforced or documented here

- **No em dashes in published copy.** Comma, colon, semicolon or full stop.
- **Dates are facts.** Never regenerated, shifted or backdated.
- **No photography or stock imagery**, and nothing fabricated about the company —
  no ventures, customers, results, financials, people, addresses or history.
- **The wordmark is artwork.** Use the SVGs in `public/assets/logo/` as supplied.

## Structure

| Path | What it is |
| --- | --- |
| `src/content/journal/` | Articles, one Markdown file each |
| `src/content.config.ts` | Frontmatter schema |
| `src/lib/journal.ts` | Sorting, date formatting, reading time |
| `src/components/` | Design-system components ported to `.astro` |
| `src/layouts/Base.astro` | Document shell, header, footer, meta |
| `src/pages/` | Routes |
| `src/routes/JournalArticle.astro` | The per-article template, mounted at `/journal/[...slug]/` |
| `src/styles/` | Tokens and the responsive layer, from the design system |
| `public/` | Assets, `CNAME`, `.nojekyll` — copied verbatim |

## Routes

| URL | Source |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/journal/` | `src/pages/journal/index.astro` |
| `/journal/<slug>/` | `src/routes/JournalArticle.astro` (injected) |
| `/archive/` | `src/pages/archive.astro` |
| `/about/` | `src/pages/about.astro` |
| `/editorial-policy/` | `src/pages/editorial-policy.astro` |
| `/404.html` | `src/pages/404.astro` |
| `/rss.xml` | `src/pages/rss.xml.js` |
| `/sitemap-index.xml` | `@astrojs/sitemap` |

The archive filter is **progressive enhancement only**: every article is in the
HTML and every row is a real link, so the page is complete and readable with
JavaScript disabled. The script only hides rows.

## Still open

- **Fonts are still served from Google's CDN** (`src/styles/fonts.css`). The file
  carries a ready-to-fill `@font-face` block and the exact list of files to drop
  into `public/fonts/`; self-hosting is a five-minute change now that a build
  exists, and removes a third-party request from every page load.
- **Icons** are inlined from Lucide at build time (`src/components/Icon.astro`),
  so there is no CDN dependency at runtime. Lucide remains a flagged substitution:
  the brand has no icon set of its own.
