<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH (no product authority)
OWNER: Claude Growth/Marketing
CREATED: 2026-10-08
VERIFICATION_BASIS: legendstudy-docs @ 1c03917 (main) — AI_CONTEXT.md, CURRENT_STATUS.md (as of 2026-10-05 + 2026-10-06 appends), DAILY/2026-10-06.md (latest verified daily)
AUTHORITY_NOTE: The marketing brief cites a "2026-10-08 working context". No 2026-10-07 or 2026-10-08 Daily exists in the wiki; the latest VERIFIED daily is 2026-10-06. Where the brief and the verified wiki differ, the verified wiki wins and the difference is logged here.
PRODUCT_CODE_CHANGED: NO · DB_CHANGED: NO · PRODUCTION_CHANGED: NO
-->

# PRODUCT READINESS MATRIX — 2026 Launch Marketing

This is the **gate document**. No banner copy or CTA is confirmed as `LIVE`-eligible until the item it depends on is `CONFIRMED` here. Every downstream asset carries one of `MARKETING_NOW` / `MARKETING_AT_LAUNCH` / `DO_NOT_ADVERTISE_YET`, copied from this table.

## Status vocabulary

- **Dev status:** `CONFIRMED` (Production-verified) · `PARTIAL` (implemented but not fully Production-verified / not real-user-verified) · `PLANNED` (designed/future) · `BLOCKED` (gated on an external approval/credential)
- **Marketing status:** `MARKETING_NOW` (advertisable today) · `MARKETING_AT_LAUNCH` (asset buildable now, go-live only after the gate clears) · `DO_NOT_ADVERTISE_YET` (do not reference as an available benefit)

## The matrix

| # | Item | Dev status | Evidence (verified wiki) | Marketing status | Marketing note |
|---|---|---|---|---|---|
| 1 | **LAB public web** (home/header/login/pricing) | `CONFIRMED` | LAB `PRODUCTION_APPLIED`; `lab.legendstudy.com` live; pricing live HTTP 200 @ main `3370dad` | `MARKETING_NOW` | Safe to send traffic to `lab.legendstudy.com` and `/pricing/`. |
| 2 | **Pricing page** | `CONFIRMED` | Owner `FINAL_APPROVED` + released; `PRODUCTION_VERIFIED` | `MARKETING_NOW` | Prices advertisable: 4,900 / 11,900 / 17,900 / 29,900 KRW. |
| 3 | **Signup free 3 Credits** | `PARTIAL` | Canonical `+3 signup_bonus` verified via normal RLS path in the 2026-10-05 hosted Math smoke (synthetic `test1@`). Not yet verified on a public real-user signup at scale. | `MARKETING_AT_LAUNCH` | Copy "신규 가입 시 첨삭권 3회 제공" is **accurate as policy**. Build now; switch the public offer ON only after a Production real-signup confirmation. |
| 4 | **Toss TEST E2E** | `CONFIRMED (internal)` | PAYMENT-E2E-TOSS-1R-FAST COMPLETE; full merchant TEST matrix PASS on isolated TEST project | `DO_NOT_ADVERTISE_YET` | Internal verification only. **Never implies a buyer can pay.** |
| 5 | **Toss LIVE payment** | `BLOCKED` | LIVE OFF; Production payment migration NOT_APPLIED; external card/PG approval pending | `DO_NOT_ADVERTISE_YET` | No "지금 결제" / "구매 가능" messaging until LIVE is ON. Purchase CTA on pricing is `PRESENT_DISABLED`. |
| 6 | **논술(Essay) LAB — exists as a service** | `PARTIAL` | APP-LAB-SERVICE-STATE-UX (app `e1398d8`): 논술 LAB = "이용 가능", app-first native `/lab/essay` with existing Credit·첨삭·재작성·평가 flow. LAB web Essay consumer implemented. | `MARKETING_AT_LAUNCH` | Advertisable as "논술 LAB" at launch. See #7–#9 for the sub-steps that qualify *what* we can promise. |
| 7 | **Essay submission (write an answer)** | `PARTIAL` | Essay schema `PRODUCTION_APPLIED`; **no real-student Essay traffic yet** | `MARKETING_AT_LAUNCH` | "답안을 작성하고" is fine as a described behavior; confirm the public route works before a university-specific LIVE CTA (gate #13). |
| 8 | **Essay evaluation (첨삭)** | `PARTIAL` | Engine present; Quality Authorization `PRODUCTION_VERIFIED`, but **first legitimate evaluation = NEXT_GATE / `NOT_ASSESSABLE`**; no real case yet | `MARKETING_AT_LAUNCH` | Say "대학별 평가·채점 기준에 맞춰 점검" — **never** "AI가 채점" / "대학이 채점" / "합격 채점". |
| 9 | **Rewrite → re-evaluation (재작성 → 변화 확인)** | `PARTIAL` | Policy canonical: 1 included reevaluation within 14 days, no extra Credit; math included-reeval verified in smoke. Essay public runtime not real-user-verified. | `MARKETING_AT_LAUNCH` | The "첨삭 → 재작성 → 변화 확인" loop is the core message; go LIVE per-university only after gate #13. |
| 10 | **MY / History dashboard** | `PARTIAL` | MY structure in progress; notification center code complete, CI-pending; not all Production-verified | `MARKETING_AT_LAUNCH` | Can reference "학습 기록" softly; do not promise analytics/graphs that aren't live. |
| 11 | **University deep link (per-university route)** | `PARTIAL` | `universities` catalog active 5 → **50** (data-only seed, idempotent). Catalog presence **≠** per-university essay content/evaluation readiness. | `MARKETING_AT_LAUNCH` | Build the master template now. Activate a university's banner only after per-university readiness (gate #13). **No ranking/점수** — catalog stores slug/name/is_active only. |
| 12 | **내신분석 LAB / 수능·모의고사 LAB** | `PLANNED` | Service-state UX: both = "준비 중" (coming soon) | `DO_NOT_ADVERTISE_YET` | Mention only as "준비 중" roadmap, never as available. Post-launch campaign material. |
| 13 | **APP Store URL (Apple)** | `BLOCKED` | Store release PENDING; submission BLOCKED; no live App Store URL | `MARKETING_AT_LAUNCH` | Build slider with **replaceable URL/QR placeholder**. No fake URL/QR/date. |
| 14 | **Google Play URL** | `BLOCKED` | Same as #13 (account-deletion blocker now resolved; other store gates remain) | `MARKETING_AT_LAUNCH` | Same placeholder rule as #13. |
| 15 | **IAP (Apple/Google in-app purchase)** | `PLANNED` | IAP gap analysis done; backend foundation partial; no store products / IAP implementation | `DO_NOT_ADVERTISE_YET` | Never imply in-app purchase is available. |
| 16 | **Marketing landing (home.legendstudy.com)** | `PLANNED` | `MARKETING_LANDING: NOT_STARTED`; `home.legendstudy.com: NOT_CREATED` | `DO_NOT_ADVERTISE_YET` | Owner decision pending (see owner-decisions). Use `lab.legendstudy.com` as the live destination meanwhile. |
| 17 | **Account deletion / privacy (store compliance)** | `CONFIRMED` | Production LIVE + destructive E2E PASS (2026-10-06); privacy corrected LIVE | `MARKETING_NOW` (compliance only) | Not a marketing message; removes a store blocker. |

## Three-LAB structure (naming authority — do not collapse)

`LegendStudy LAB` is the **parent system**, not a synonym for 논술 LAB (AI_CONTEXT §14, Owner authority).

| LAB | State | Advertise? |
|---|---|---|
| **논술 LAB** | 이용 가능 (app-first) | Yes, at launch (gates #6–#9, #13) |
| **내신분석 LAB** | 준비 중 | "준비 중" only |
| **수능·모의고사 LAB** | 준비 중 | "준비 중" only |

## Rollups for the completion report

**READY_TO_USE_NOW (`MARKETING_NOW`)**
- LAB public web + `lab.legendstudy.com` destinations
- Pricing page + advertised prices
- Account-deletion/privacy (store compliance, not a message)

**READY_AT_LAUNCH (`MARKETING_AT_LAUNCH` — asset built now, go-live after its gate)**
- Signup free 3 Credits offer (after Production real-signup confirmation)
- 논술 LAB service + the 첨삭 → 재작성 → 변화 확인 loop
- University per-university banners (after per-university readiness gate)
- APP install sliders (after real Store URL/QR)

**HOLD (`DO_NOT_ADVERTISE_YET`)**
- Toss LIVE / "결제 가능" / "지금 구매"
- IAP / in-app purchase
- 내신분석 LAB, 수능·모의고사 LAB as available
- `home.legendstudy.com` landing (not created; Owner decision pending)

## DEVELOPMENT DEPENDENCIES (handoff — Claude does not fix these)

Recorded as `DEVELOPMENT_DEPENDENCY`; Growth does not touch product code/DB/Production.

- **DD-1 (Payment):** Toss LIVE activation + external card/PG approval + Production payment migration apply + small LIVE smoke. Blocks all purchase/결제 CTAs. — Owner / Codex.
- **DD-2 (Store URLs):** Real App Store + Google Play URLs (and store submission gates). Blocks slider QR/URL go-live. — Owner / Store Console.
- **DD-3 (Signup bonus public verification):** Confirm `+3 signup_bonus` fires on a real public signup in Production (not only synthetic). Blocks the public 3-Credits offer. — Codex / Owner.
- **DD-4 (Essay public runtime):** First legitimate public Essay evaluation (currently `NOT_ASSESSABLE`), and a confirmed public per-university essay route + mobile route + login flow. Blocks university LIVE CTAs. — Codex / backend.
- **DD-5 (Per-university content readiness):** Per-university evaluation context (문항/평가기준) availability for each university before its banner goes LIVE. Blocks per-university activation list. — Content / Owner.
- **DD-6 (Deep-link routes):** Confirm which per-university / per-problem deep links actually resolve (CONFIRMED / PLANNED / NOT_AVAILABLE). Blocks deep-link-level CTAs. — LAB / APP.
- **DD-7 (Analytics contract):** Confirm the existing Analytics authority (Postgres SoT + GA4 role) and its event/dimension names before any tracking params ship. Growth will not create a parallel schema. — Analytics authority (APP `analytics-p0-launch-contract.md`).
- **DD-8 (Marketing landing):** `home.legendstudy.com` not created; Owner decision on `home.legendstudy.com` vs `legendstudy.com/home` pending. — Owner.
