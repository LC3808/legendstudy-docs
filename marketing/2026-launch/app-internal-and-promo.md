<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH
CREATED: 2026-10-08
-->

# APP INTERNAL LAB PROMO + FREE 3-CREDITS PROMO

Covers package items **G** (app-internal Essay LAB banner) and **H** (signup 3-Credits asset).

---

## G · APP internal Essay LAB promotion

**Status:** `READY_AFTER_FEATURE` (DD-3/DD-4). Asset: `assets/marketing/2026-launch/app-internal/app-internal-essay-lab.svg` (1080×420).

### Placement — READ-ONLY confirm before locking
The brief's candidate position (D-Day/학습정보 → 급식 → Essay LAB → 자료검색) is from an older APP layout. **Do not fix the old position.** The current APP already has a dedicated LAB home with 3 services (내신분석/수능·모의고사/논술) where 논술 LAB = app-first native `/lab/essay` (app `e1398d8`).

**Recommendation:** place the promo card on the **APP Home**, above the resource-search block, as a single entry into the native 논술 LAB — reusing the existing LAB-home routing rather than inventing a new surface. Confirm exact slot against the latest APP Home UI before final placement (Owner/APP authority).

### Destination (corrected vs brief)
APP-internal → **native `/lab/essay`** (not a web redirect, not App Store). "웹에서 이어서" is secondary/optional only.

### Copy
| Slot | Text |
|---|---|
| Eyebrow | 논술 LAB |
| Headline | 내 논술 답안, 지금 먼저 고쳐야 할 부분은? |
| Sub | 대학별 평가 기준에 맞춰 확인해보세요. |
| Chip | 신규 가입 첨삭권 3회 제공 (gated DD-3) |
| CTA | 논술 LAB 시작 |

### Guardrails
No forced conversion, no 합격/채점-by-university claim, soft cross-promo only.

---

## H · Signup free 3-Credits promo

**Status:** `READY_AFTER_FEATURE` (DD-3). Asset: `assets/marketing/2026-launch/free-3-credit/free-3-credits.svg` (1080×1080 square).

### Purpose
Get the student to **experience the essay learning loop**: `Signup → Free Credit → First Essay → Rewrite → Re-evaluation`. Not a discount event.

### Copy
| Slot | Text |
|---|---|
| Headline | 신규 가입 시 첨삭권 3회 제공 |
| Sub | 가입하고 내 논술 답안을 직접 점검해보세요. |
| Micro-steps | 답안 작성 → 첨삭 → 재작성 → 변화 확인 |
| Fine print | 첨삭권 1회 = 최초 첨삭 + 동일 답안 첫 재첨삭. 자세한 조건은 이용안내. |
| CTA | 논술 LAB 시작하기 |

### Accuracy guardrails
- "3회" means 3 첨삭 sessions (1 Credit = initial + first re-eval of the same answer). The fine print must stay truthful.
- No fake urgency / 한정 / 할인율.
- Public go-live gated on DD-3 (Production real-signup bonus confirmation). Until then the asset is held.
