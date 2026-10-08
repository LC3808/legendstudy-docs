# CHANGELOG — Tistory Marketing Deployment Package

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
