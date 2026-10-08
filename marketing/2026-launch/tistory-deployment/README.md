<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH (documentation + skin package only)
CREATED: 2026-10-08
BRANCH: claude/launch-marketing-2026
PRODUCT_CODE_CHANGED: NO · DB_CHANGED: NO · PRODUCTION_CHANGED: NO (Tistory not modified by Claude)
-->

# Tistory Marketing Deployment Package — LegendStudy.com

Ready-to-apply package that adds the 2026 launch marketing layer to the **actual** LegendStudy.com Tistory skin: two optional main slides (APP, 논술 LAB) and auto-injected CTAs on 논술 기출 posts. Built from the Owner-provided Production skin, **additive only**, **OFF by default**, fully reversible. Claude does not modify the Tistory site — Owner applies it.

> Authority: verified against `legendstudy-docs` origin/main `bad4ecc` (2026-10-08). Product policy: APP and LAB Web are two full surfaces of one product (shared backend/account/Credit/Essay/History); the essay funnel destination is **LAB Web**; app install is never forced.

## Files

| Path | What |
|---|---|
| `SKIN_AUDIT.md` | Read-only analysis of the real skin + where/how we insert. |
| `DEPLOYMENT.md` | Exact apply steps (inline or file), flags, launch sequence, smoke checklist. |
| `ROLLBACK.md` | Instant disable / partial removal / full restore. |
| `CHANGELOG.md` | What changed, validation results. |
| `original/skin.html`, `original/style.css` | **Byte-exact** current skin (restore source). |
| `modified/skin.html`, `modified/style.css` | Skin with marketing layer (marker-wrapped). |
| `inline/paste-into-skin-html.html` | The two HTML blocks to paste (slides + script). |
| `inline/paste-into-style-css.css` | The CSS block to paste. |
| `modules/legendstudy-marketing.js` | Logic (slides prep + 논술 CTA injection), standalone. |
| `modules/university-map.js` | Per-university detection/activation map. |
| `modules/legendstudy-marketing.css` | Marketing styles, standalone. |
| `patches/skin.patch`, `patches/style.patch` | Unified diffs (additive; 0 removals). |
| `favicon/` | Full-orange web favicon package (assets + `export_favicon.py` + apply/rollback). See `favicon/README.md`. |

## How it works (one paragraph)

The marketing script loads **before** the existing landing script, so it prepares the slides before `initSlider()` counts them (correct dots, no dead link). Two marketing slides live inside the **existing** slider and are auto-removed when their flag is OFF or a Store URL is missing. On 논술 article pages the script reads the post title + category, identifies the university from `university-map.js`, and injects a small top CTA (awareness) and a bottom CTA (conversion) — pointing to **LAB Web**, falling back to LAB main when a university's own route isn't confirmed. All of it is governed by one `CONFIG` object; everything is OFF until each readiness gate clears.

## Gates (why default OFF) — from `../product-readiness.md`

- **DD-2** Store URLs → APP slide.
- **DD-3** signup `+3` real-user E2E (migration now Production-applied 2026-10-08) → `SHOW_SIGNUP_BONUS`.
- **DD-4** Essay public web runtime verified → 논술 slide + article CTAs.
- **DD-6** per-university routes → per-university `active`.
- **DD-7** analytics/UTM reconciliation.

Start by applying with all flags OFF (zero visitor-facing change), then flip per `DEPLOYMENT.md`.
