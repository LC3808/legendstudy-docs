<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH (documentation + assets only; no product authority)
OWNER: Claude Growth/Marketing
CREATED: 2026-10-08
BRANCH: claude/launch-marketing-2026
PRODUCT_CODE_CHANGED: NO · DB_CHANGED: NO · PRODUCTION_CHANGED: NO
-->

# LegendStudy+ / LegendStudy LAB — 2026 Launch Marketing

Growth/Marketing deliverables for the 2026 launch. **Marketing documentation and assets only** — no product code, DB, migration, payment, or Production changes. Everything here is gated by `product-readiness.md`.

> **Authority note (reconciled 2026-10-08):** verified against `legendstudy-docs` **origin/main @ `8bd0b5d`** (AI_CONTEXT, CURRENT_STATUS Production-activation-closeout 2026-10-08 + Overnight 2026-10-07, DAILY/2026-10-07 + 2026-10-08), and `legendstudy-lab` origin/main @ `4f2e349`. The first build used a stale local checkout (`1c03917` / daily 2026-10-06) and has been corrected. **Product policy:** APP and LAB Web are two **full user surfaces** of one product sharing one backend/account/Credit/Essay/History — LAB Web is an independent full-service surface, not an app-install landing, and app install is never forced. The "app-first native" framing has been removed.

## Read in this order

1. [`product-readiness.md`](product-readiness.md) — **the gate.** Matrix + development dependencies. Nothing goes LIVE ahead of its row.
2. [`strategy-final.md`](strategy-final.md) — final strategy (KEEP/REFINE/HOLD), funnel, phasing, KPI, owner summary.
3. [`messaging.md`](messaging.md) — the single copy source + hard copy rules.
4. [`banner-system.md`](banner-system.md) — design tokens, dimensions, asset inventory.
5. [`main-sliders.md`](main-sliders.md) — Slider 1 (APP) + Slider 2 (Essay LAB).
6. [`university-template.md`](university-template.md) — master template, compact + text CTA, activation gate.
7. [`app-internal-and-promo.md`](app-internal-and-promo.md) — APP-internal LAB promo + signup 3-Credits.
8. [`app-store-marketing.md`](app-store-marketing.md) — store copy LAUNCH DRAFT.
9. [`landing-deeplink-plan.md`](landing-deeplink-plan.md) — landing URL options + deep-link classification.
10. [`analytics-handoff.md`](analytics-handoff.md) — dimensions/campaign IDs to reconcile with the existing contract.
11. [`qa-checklist.md`](qa-checklist.md) — per-asset QA + status board.
12. [`owner-decisions.md`](owner-decisions.md) — decisions reserved for the Owner.

Assets: [`../../assets/marketing/2026-launch/`](../../assets/marketing/2026-launch/) — SVG banners with replaceable placeholder layers (no fake URL/QR/date/deep-link).

**Tistory deployment package:** [`tistory-deployment/`](tistory-deployment/README.md) — ready-to-apply skin changes for LegendStudy.com (main slides + auto-injected 논술 post CTAs), additive & OFF-by-default, built from the real Production skin. Owner applies; Claude does not modify the Tistory site.

## Deliverable map (brief section 50)

| # | Required output | Location |
|---|---|---|
| 1 | PRODUCT_READINESS_MATRIX | `product-readiness.md` |
| 2 | FINAL_MARKETING_STRATEGY | `strategy-final.md` |
| 3 | MESSAGING_SYSTEM | `messaging.md` |
| 4 | MAIN_SLIDER_1_APP | `main-sliders.md` + `assets/.../app-main/` |
| 5 | MAIN_SLIDER_2_ESSAY_LAB | `main-sliders.md` + `assets/.../essay-lab-main/` |
| 6 | UNIVERSITY_BANNER_MASTER | `university-template.md` + `assets/.../university-template/university-wide-pc.svg` |
| 7 | MOBILE_UNIVERSITY_MASTER | `university-template.md` + `assets/.../university-template/university-mobile.svg` |
| 8 | COMPACT_ARTICLE_CTA | `university-template.md` + `assets/.../compact-cta/` |
| 9 | TEXT_CTA | `university-template.md` §2 (F) |
| 10 | APP_INTERNAL_LAB_PROMO | `app-internal-and-promo.md` + `assets/.../app-internal/` |
| 11 | FREE_3_CREDIT_PROMO | `app-internal-and-promo.md` + `assets/.../free-3-credit/` |
| 12 | STORE_MARKETING_DRAFT | `app-store-marketing.md` |
| 13 | LANDING / DEEP-LINK PLAN | `landing-deeplink-plan.md` |
| 14 | CAMPAIGN / ANALYTICS HANDOFF | `analytics-handoff.md` |
| 15 | MARKETING_QA_CHECKLIST | `qa-checklist.md` |
| 16 | DEVELOPMENT_DEPENDENCIES | `product-readiness.md` (DD-1…DD-8) |
| 17 | OWNER_DECISIONS_REQUIRED | `owner-decisions.md` |

## Boundary
No entry here records marketing work as a product `IMPLEMENTED` state. Development issues found are logged as `DEVELOPMENT_DEPENDENCY` only; Claude does not fix them.
