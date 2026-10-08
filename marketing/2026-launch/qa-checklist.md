<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH
CREATED: 2026-10-08
-->

# MARKETING QA CHECKLIST

Run per asset before go-live. Each asset ends with a status:
`READY` · `READY_AFTER_URL` · `READY_AFTER_FEATURE` · `HOLD`.

## Per-asset checks (section 27)

- [ ] **Copy accuracy** — matches `messaging.md`, no banned phrase.
- [ ] **Feature truth** — every claimed feature is actually live/V1 (not FUTURE).
- [ ] **CTA destination** — resolves, and is a CONFIRMED route at go-live.
- [ ] **University ↔ destination match** — right university → right route.
- [ ] **PC readability** — hierarchy clear, headline not crowded.
- [ ] **Mobile readability** — stacked, single CTA, short lines.
- [ ] **Korean line wrapping** — `keep-all` respected; no overflow at 320px / 200% text (the admin console overflow bug came from long unbroken Korean strings).
- [ ] **CTA visibility** — one accent CTA, clearly the primary action.
- [ ] **Contrast / accessibility** — accent `#ffac14` text uses dark ink; status by text label not color-only; ≥4.5:1 body text.
- [ ] **No "official university" look** — no crest/official design/affiliation wording.
- [ ] **No exaggeration** — no 합격 보장 / 합격 가능성 / 점수 예측 / 입결.
- [ ] **3-Credits accuracy** — "첨삭권 3회" with truthful fine print.
- [ ] **No premature feature ad** — nothing advertised that a user cannot do yet.
- [ ] **No placeholder leak** — `QR_PLACEHOLDER` / `STORE_BADGE_PLACEHOLDER` / `{{variable}}` never ship visible.

## Asset status board (this package)

| Asset | Package | Status | Gate to clear |
|---|---|---|---|
| App slider PC/mobile | A | `READY_AFTER_URL` | DD-2 (Store URL/QR) |
| Essay LAB slider PC/mobile | B | `READY_AFTER_FEATURE` | DD-3, DD-4 |
| University wide master | C | `READY_AFTER_FEATURE` | DD-4, DD-5, DD-6 + per-university gate |
| University mobile master | D | `READY_AFTER_FEATURE` | same as C |
| Compact article CTA | E | `READY_AFTER_FEATURE` | same as C |
| Text CTA | F | `READY_AFTER_FEATURE` | destination CONFIRMED (DD-6) |
| App internal Essay LAB | G | `READY_AFTER_FEATURE` | DD-3, DD-4 + APP-home placement confirm |
| Signup 3-Credits | H | `READY_AFTER_FEATURE` | DD-3 |

## Pre-publish gate (whole launch)
- [ ] Product Readiness Matrix re-checked against the **latest** daily (currently 2026-10-06; re-verify if a newer daily lands).
- [ ] No `DO_NOT_ADVERTISE_YET` item referenced as available (Toss LIVE, IAP, 내신/수능 LAB, home.legendstudy.com).
- [ ] Per-university activation list is Owner-approved (`owner-decisions.md`).
- [ ] Analytics params reconciled with the existing contract (DD-7) or omitted.
