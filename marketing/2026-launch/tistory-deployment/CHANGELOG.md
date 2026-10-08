# CHANGELOG — Tistory Marketing Deployment Package

## 2026-10-08 — favicon addendum (full-orange brand)

Added `favicon/` — brings the new full-orange App Icon (orange bg + white
notebook/pencil, `#FFA300`) to the legendstudy.com favicon. Built from the same
canonical source as the App Icon (`legendstudy-app` `8cb7b24`, sha `7f37ed2c…`,
untouched) via the same figure/ground colour-swap; **no new design**. Favicon-only
optical size 86% (no web mask safe-zone). Assets: `favicon.ico` (16/32/48) +
`favicon-16/32/48`, `apple-touch-icon` (180), `192`, `512` PNGs; reproducible via
`favicon/export_favicon.py` (byte-verified). Current Tistory reference is a single
`shortcut icon → favicon.ico`; minimal apply = replace that file, optional
`head-snippet.html` adds PNG + Apple touch icon. Rollback = manual backup (live
favicon could not be auto-captured). Tistory not modified by Claude.

**FOLLOW-UP (LAB favicon):** `legendstudy-lab` (`origin/main @ 90bbfd3`) ships its
own icon set — `src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png`,
`public/brand/legendstudy-app-icon.png` (the latter two identical, 1024², and
**predominantly white = the OLD orange-on-white brand**). It does **not** match the
new full-orange icon. Recommended separate follow-up: regenerate the LAB icon set
to the full-orange brand (LAB product code change — out of scope for this marketing
task; not modified here).

## 2026-10-08 — v1 (initial package)

Authority: legendstudy-docs origin/main `bad4ecc` (fetched + merged). Skin source: Owner-provided `CustomSkin(2026-10-08)`.

**Added (additive only; 0 original lines removed):**
- `modified/skin.html`: two marker-wrapped blocks — (1) APP + 논술 LAB main slides inside the existing slider track; (2) marketing script (university map + logic) placed before the landing IIFE.
- `modified/style.css`: marker-wrapped marketing CSS using existing skin variables.
- `modules/`: standalone `legendstudy-marketing.css`, `legendstudy-marketing.js`, `university-map.js`.
- `inline/`: paste-ready `paste-into-skin-html.html`, `paste-into-style-css.css`.
- `patches/`: `skin.patch`, `style.patch` (unified diffs).
- Docs: `README`, `SKIN_AUDIT`, `DEPLOYMENT`, `ROLLBACK`.

**Behavior:** all features OFF by default (flags) — deployable now, zero visitor-facing change until Owner flips flags per gate. No dead links (auto-removal / fallback). Reuses the existing slider; no new library.

**Validation:** JS `node --check` PASS (modules + inline); CSS braces balanced; marker pairs balanced; originals byte-exact; 0 removed lines; SECRETS_FOUND NO.

**Readiness snapshot (2026-10-08):** signup migration `20261007150000` Production-applied (real-user +3 E2E pending, DD-3); Essay public web runtime not verified (DD-4); Store URLs unavailable (DD-2); per-university routes unconfirmed (DD-6). Hence default-OFF.
