<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH (no product authority)
OWNER: Claude Growth/Marketing
CREATED: 2026-10-08
VERIFICATION_BASIS: legendstudy-docs origin/main @ 8bd0b5d (fetched + merged 2026-10-08) — AI_CONTEXT.md, CURRENT_STATUS.md (Production activation closeout 2026-10-08 + Overnight 2026-10-07), DAILY/2026-10-07.md + DAILY/2026-10-08.md. LAB remote: legendstudy-lab origin/main @ 4f2e349 (wiki-cited functional release 63f8dc3 on Manus visual ae44317).
AUTHORITY_NOTE: Corrected 2026-10-08. The first build used a stale local checkout (1c03917 / daily 2026-10-06). This version is reconciled against origin/main @ 8bd0b5d, which adds the 2026-10-07/08 Codex/Manus closeouts. PRODUCT POLICY CORRECTION applied: APP and LAB Web are two full user surfaces of one product sharing one backend/account/Credit/Essay/History — LAB Web is NOT an app-install landing. The "app-first native" framing from the first build is removed.
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
| 1 | **LAB public web** (home/header/login/LAB/pricing) | `CONFIRMED` | LAB `PRODUCTION_APPLIED`; `lab.legendstudy.com` live (functional release LAB `63f8dc3`, remote main `4f2e349`); 13–17 public routes HTTP 200; header 내신 LAB / 모의·수능 LAB / 논술 LAB / 이용 안내 | `MARKETING_NOW` | Safe to send traffic to `lab.legendstudy.com` and `/pricing/`. LAB Web is the **primary** learning destination (not an app-install page). |
| 2 | **Pricing page + direct checkout entry** | `CONFIRMED (UX)` | Pricing `PRODUCTION_VERIFIED`; direct checkout embedded (Pricing → existing order API → official Toss SDK, no second page) deployed to Production (frontend/browser verified); purchase CTA still gated on payment LIVE | `MARKETING_NOW` (prices) | Prices advertisable: 4,900 / 11,900 / 17,900 / 29,900 KRW. The checkout *entry* exists, but **do not** advertise "결제 가능" — payment LIVE is OFF (#5). |
| 3 | **Signup free 3 Credits** | `PARTIAL` | Verified-email signup guard implemented (migration `20261007150000`): canonical once, `+3`, no intrinsic expiry; email confirmation ON; concurrency/idempotency tests PASS (local PG17 + PGlite, 8 concurrent signups → one grant). **Production migration activation pending (`DB_PRODUCTION_APPLIED: NONE`); deployed activation `NOT_ASSESSABLE`.** | `MARKETING_AT_LAUNCH` | Copy "신규 가입 시 첨삭권 3회 제공" is **accurate as policy**. Build now; switch the public offer ON only after the signup-guard migration is Production-activated and confirmed (DD-3). |
| 4 | **Toss TEST E2E** | `CONFIRMED (internal)` | TOSS_TEST_E2E PASS; Owner fresh TEST order PAID/TEST/TEST_RECORDED, exactly 1 CONFIRM/SUCCEEDED, no real charge; `CARD_REVIEW_READY: YES` (TEST evidence); public runtime REVIEW/TEST, `consumer_purchase=false` | `DO_NOT_ADVERTISE_YET` | Internal verification only. **Never implies a buyer can pay.** |
| 5 | **Toss LIVE payment** | `BLOCKED` | LIVE OFF; Production payment migration NOT_APPLIED; external card/PG approval pending | `DO_NOT_ADVERTISE_YET` | No "지금 결제" / "구매 가능" messaging until LIVE is ON. Purchase CTA on pricing is `PRESENT_DISABLED`. |
| 6 | **논술(Essay) LAB — exists as a service (web + app)** | `PARTIAL` | LAB Web is an **independent full-service surface** (shared backend/account/Credit/Essay/History), reached at `lab.legendstudy.com`; public header now carries 내신 LAB / 모의·수능 LAB / 논술 LAB / 이용 안내. APP carries the same LAB via the shared backend (peer surface, not a web redirect). Essay public E2E **not yet Production-verified**; ESSAY RUNTIME is the next Owner-queue item, **not started** (2026-10-08). | `MARKETING_AT_LAUNCH` | Advertisable as "논술 LAB" at launch, destination **LAB Web**. See #7–#9 for what we can actually promise. |
| 7 | **Essay submission (write an answer)** | `PARTIAL` | Essay schema `PRODUCTION_APPLIED`; APP v1 defines set `ESSAY_LIVE_WRITES_ENABLED` / `ESSAY_EVALUATION_REQUESTS_ENABLED=true`; **no real-student Essay traffic / public web E2E verified yet** | `MARKETING_AT_LAUNCH` | "답안을 작성하고" is fine as a described behavior; confirm the public LAB Web route works before a university-specific LIVE CTA (gate #13). |
| 8 | **Essay evaluation (첨삭)** | `PARTIAL` | Engine present; Quality Authorization `PRODUCTION_VERIFIED`, but **first legitimate evaluation = NEXT_GATE / `NOT_ASSESSABLE`**; no real case yet | `MARKETING_AT_LAUNCH` | Say "대학별 평가·채점 기준에 맞춰 점검" — **never** "AI가 채점" / "대학이 채점" / "합격 채점". |
| 9 | **Rewrite → re-evaluation (재작성 → 변화 확인)** | `PARTIAL` | Policy canonical: 1 included reevaluation within 14 days, no extra Credit; math included-reeval verified in smoke. Essay public runtime not real-user-verified. | `MARKETING_AT_LAUNCH` | The "첨삭 → 재작성 → 변화 확인" loop is the core message; go LIVE per-university only after gate #13. |
| 10 | **MY / History dashboard** | `PARTIAL` | New six-section MY Dashboard UI **deployed to Production** (LAB, Cloudflare SUCCESS): Credit usage/history, profile/target edit, Essay records / 1–5 dimensions, other LABs, account/support. **Authenticated runtime / hosted member-data acceptance `NOT_ASSESSABLE`** (no live account verified). Notification center consumer code complete, CI-pending. | `MARKETING_AT_LAUNCH` | Can reference "학습 기록 · 내 기록을 한 곳에서" softly; do not promise analytics/graphs/scores that aren't live-verified. |
| 11 | **University deep link (per-university route)** | `PARTIAL` | `universities` catalog active 5 → **50** (data-only seed, idempotent). Catalog presence **≠** per-university essay content/evaluation readiness. | `MARKETING_AT_LAUNCH` | Build the master template now. Activate a university's banner only after per-university readiness (gate #13). **No ranking/점수** — catalog stores slug/name/is_active only. |
| 12 | **내신분석 LAB / 수능·모의고사 LAB** | `PLANNED` | Service-state UX: both = "준비 중" (coming soon) | `DO_NOT_ADVERTISE_YET` | Mention only as "준비 중" roadmap, never as available. Post-launch campaign material. |
| 13 | **APP Store URL (Apple)** | `BLOCKED` | Store release PENDING; submission BLOCKED; no live App Store URL | `MARKETING_AT_LAUNCH` | Build slider with **replaceable URL/QR placeholder**. No fake URL/QR/date. |
| 14 | **Google Play URL** | `BLOCKED` | Same as #13 (account-deletion blocker now resolved; other store gates remain) | `MARKETING_AT_LAUNCH` | Same placeholder rule as #13. |
| 15 | **IAP (Apple/Google in-app purchase)** | `PLANNED` | IAP gap analysis done; backend foundation partial; no store products / IAP implementation | `DO_NOT_ADVERTISE_YET` | Never imply in-app purchase is available. |
| 16 | **Marketing landing (home.legendstudy.com)** | `PLANNED` | `MARKETING_LANDING: NOT_STARTED`; `home.legendstudy.com: NOT_CREATED` | `DO_NOT_ADVERTISE_YET` | Owner decision pending (see owner-decisions). Use `lab.legendstudy.com` as the live destination meanwhile. |
| 17 | **Account deletion / privacy (store compliance)** | `CONFIRMED` | Production LIVE + destructive E2E PASS (2026-10-06); privacy corrected LIVE; public deletion/privacy/terms/support routes HTTP 200 | `MARKETING_NOW` (compliance only) | Not a marketing message; removes a store blocker. |

## Three-LAB structure (naming authority — do not collapse)

`LegendStudy LAB` is the **parent system**, not a synonym for 논술 LAB (AI_CONTEXT §14, Owner authority).

| LAB | State | Advertise? |
|---|---|---|
| **논술 LAB** | 이용 가능 — full service on **LAB Web** (and APP, shared backend) | Yes, at launch; destination LAB Web (gates #6–#9, #13) |
| **내신 LAB (내신분석)** | 준비 중 (web header present) | "준비 중" only |
| **모의·수능 LAB (수능·모의고사)** | 준비 중 (web header present) | "준비 중" only |

> LAB Web header labels (2026-10-07/08): **내신 LAB / 모의·수능 LAB / 논술 LAB / 이용 안내**. A LAB appearing in the header is navigational presence, not a claim it is usable — only 논술 LAB is usable; the other two are 준비 중.

## Rollups for the completion report

**READY_TO_USE_NOW (`MARKETING_NOW`)**
- LAB public web + `lab.legendstudy.com` destinations
- Pricing page + advertised prices
- Account-deletion/privacy (store compliance, not a message)

**READY_AT_LAUNCH (`MARKETING_AT_LAUNCH` — asset built now, go-live after its gate)**
- Signup free 3 Credits offer (after the signup-guard migration is Production-activated — DD-3)
- 논술 LAB service on **LAB Web** + the 첨삭 → 재작성 → 변화 확인 loop (after essay public runtime — DD-4)
- MY / 학습 기록 soft references (after authenticated runtime verified)
- University per-university banners → **LAB Web** (after per-university readiness gate)
- APP install sliders (after real Store URL/QR) — APP is a peer surface, not the required destination

**HOLD (`DO_NOT_ADVERTISE_YET`)**
- Toss LIVE / "결제 가능" / "지금 구매"
- IAP / in-app purchase
- 내신분석 LAB, 수능·모의고사 LAB as available
- `home.legendstudy.com` landing (not created; Owner decision pending)

## DEVELOPMENT DEPENDENCIES (handoff — Claude does not fix these)

Recorded as `DEVELOPMENT_DEPENDENCY`; Growth does not touch product code/DB/Production.

- **DD-1 (Payment):** Toss LIVE activation + external card/PG approval + Production payment migration apply + small LIVE smoke. Blocks all purchase/결제 CTAs. — Owner / Codex.
- **DD-2 (Store URLs):** Real App Store + Google Play URLs (and store submission gates). Blocks slider QR/URL go-live. — Owner / Store Console.
- **DD-3 (Signup bonus Production activation):** Apply + activate the verified-email signup guard migration `20261007150000` in Production and confirm `+3` fires on a real verified signup (currently `DB_PRODUCTION_APPLIED: NONE`, deployed activation `NOT_ASSESSABLE`). Blocks the public 3-Credits offer. — Codex / Owner.
- **DD-4 (Essay public web runtime):** First legitimate public Essay evaluation on **LAB Web** (currently `NOT_ASSESSABLE`; ESSAY RUNTIME is the next Owner-queue item, not started), with a confirmed public essay route + mobile web route + login flow. Blocks university LIVE CTAs. — Codex / backend.
- **DD-5 (Per-university content readiness):** Per-university evaluation context (문항/평가기준) availability for each university before its banner goes LIVE. Blocks per-university activation list. — Content / Owner.
- **DD-6 (Deep-link routes):** Confirm which per-university / per-problem deep links actually resolve (CONFIRMED / PLANNED / NOT_AVAILABLE). Blocks deep-link-level CTAs. — LAB / APP.
- **DD-7 (Analytics contract):** Confirm the existing Analytics authority (Postgres SoT + GA4 role) and its event/dimension names before any tracking params ship. Growth will not create a parallel schema. — Analytics authority (APP `analytics-p0-launch-contract.md`).
- **DD-8 (Marketing landing):** `home.legendstudy.com` not created; Owner decision on `home.legendstudy.com` vs `legendstudy.com/home` pending. — Owner.
