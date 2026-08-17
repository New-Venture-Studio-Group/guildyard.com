# guildyard.com

Public parent-company site for Guildyard LLC.

Built from the Guildyard design system. This directory is a drop-in replacement
for the repository root — file names and paths match the existing layout, so it
can be copied over and committed.

Do not invent ventures, customers, results, people, or addresses.

## Provenance note

An earlier export (commit 288d710) regressed two copy decisions that had been
made in this repo: it reverted Journal publication dates to placeholder values
and reintroduced em dashes into several article, home and About lines. Both have
been absorbed into the design system as standards, and this export restores the
repo's versions. The design system is upstream for structure and styling; **the
repo is upstream for published facts like article dates.**

## What changed in this export

1. **`mobile.css` — responsive layer rebuilt.** Fixes a live layout bug: on the
   article and About pages, `.gy-split.is-prose` gave the sidebar `1fr` against
   a fixed 680px measure, so between roughly 800px and 1100px the sidebar
   collapsed to about 90px and its contents overflowed. The two-column form now
   waits until **1080px**, the sidebar carries a `minmax(220px,1fr)` floor, and
   the gap eases 56 → 72px at 1240px.
2. **`.gy-wrap` reads `--gy-container-site` (1160px)** instead of a hardcoded
   value, so a consumer using the class alone gets the documented width.
3. **`_ds_bundle.js` rebuilt** — includes new components (`Figure`,
   `AbstractField`, `Prose`, `ArticleMeta`, `Pagination`), a `Logo` that
   resolves marks from declarative `data-gy-logo` preloads so they survive
   offline bundling, a responsive `NavBar`, and `Button` with
   `white-space: nowrap` so labels cannot wrap out of the fixed height.
4. **Chips no longer stretch.** In the article and About sidebars, `Tag` was a
   flex item in a column container and inherited `align-items: stretch`, so at
   stacked widths it filled the column and read as a text input. Wrappers now set
   `align-items: flex-start`.
5. **Viewport meta** present on all six pages.
6. **Copy restored and standardised.** Journal dates are the real publication
   dates (29 July to 16 August 2026), and no em dashes appear in any published
   copy. Both are now house rules in the design system's `readme.md` §3, so a
   future export cannot silently undo them.

## Files

| Path | Notes |
| --- | --- |
| `index.html`, `journal.html`, `article.html`, `archive.html`, `about.html`, `policy.html` | One entry per view; each mounts `SiteApp` with a starting view |
| `app.jsx` | View state |
| `site-parts.jsx` | `Container`, `SiteHeader`, `SiteFooter`, `ArticleRow` |
| `home.jsx`, `journal.jsx`, `article.jsx`, `archive.jsx`, `pages.jsx` | The views |
| `data.jsx` | Article list — replace with real published articles |
| `styles.css` | Import list only |
| `tokens/` | Design tokens, verbatim from the design system |
| `mobile.css` | Generated from `tokens/responsive.css`; do not edit here |
| `_ds_bundle.js` | Compiled components; a build artifact, do not edit |
| `assets/` | Brand artwork, verbatim |

## Editing rules

- **Tokens and `mobile.css` are generated.** Change them in the design system
  and re-export, or the two will drift apart again.
- **Page composition uses the `.gy-*` classes; components are inline-styled.**
  Keep that division.
- The wordmark is artwork; never re-set it in a live font.
- **No em dashes in published copy.** Use a comma, colon, semicolon or full stop.
- **Article dates in `data.jsx` are facts.** Never regenerate or shift them.
