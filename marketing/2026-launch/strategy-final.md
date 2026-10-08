<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH
OWNER: Claude Growth/Marketing
CREATED: 2026-10-08
VERIFICATION_BASIS: legendstudy-docs @ 1c03917 — see product-readiness.md
-->

# FINAL MARKETING STRATEGY — 2026 Launch

Built on the pre-review strategy v1.0 (2026-10-08). This version reconciles it against the verified wiki and marks each decision **KEEP / REFINE / HOLD**.

## 1. One-line goal

Convert LegendStudy.com's existing organic 기출 search traffic into **real, repeat learners** of LegendStudy+ / LegendStudy LAB — not raw installs.

> Philosophy: *"기출자료를 찾으러 온 학생에게 다음 학습 행동을 제안한다."*

## 2. Service roles (KEEP)

- **LegendStudy.com** — free 기출/입시 자료 + organic acquisition surface.
- **LegendStudy LAB** (`lab.legendstudy.com`) — web admissions/learning service; parent system of **내신 LAB / 수능 LAB / 논술 LAB** (논술 LAB live first — do **not** rename the parent to essay-only).
- **LegendStudy+ APP** — mobile study + 자료 탐색 + 학습 관리 + LAB 연결.
- **Shared backend** — one account / Credit / Essay / History.

LAB web is **not** an "app-install landing page." It is a real service surface.

## 3. Positioning (KEEP — Owner authority)

- **Outward headline family:** "내신 관리부터 수능, 논술 준비까지. 데이터가 쌓일수록 나의 가능성은 더 선명해집니다."
- 기출·AI are **not** the outward headline center.
- 논술 LAB differentiator: **대학별 논술 학습 코칭** — not "AI 자동 채점".
- Learner loop, applied consistently everywhere: **기출 확인 → 직접 작성 → 첨삭 → 다시 작성 → 변화 확인**.

## 4. Primary funnel (KEEP)

```
LegendStudy.com 자연검색
  → 기출자료 탐색
  → 다음 학습 행동 제안 (Article CTA)
  → LAB / APP
  → 회원가입
  → 실제 학습 (답안 작성)
  → 첨삭 → 재작성 → 변화 확인
  → 반복 사용 → Credit 소진
  → 구매
```

Essay sub-funnel (the money path):
`대학별 기출 게시물 → 해당 대학 LAB → 답안 작성 → 첨삭 → 재작성 → 변화 확인 → Credit 사용 → 구매`

## 5. Decisions reconciled against the verified wiki

| Brief decision | Verdict | Why / change |
|---|---|---|
| Two main sliders (APP, Essay LAB) | **KEEP** | Matches "don't grow slider count"; destinations verified. |
| 논술 marketing destination = LAB Web (not App Store) for web traffic | **KEEP + REFINE** | For **web** acquisition, LAB Web is the destination. **Correction:** inside the APP, 논술 LAB is **app-first native `/lab/essay`** (app `e1398d8`), not a web redirect — so APP-internal promo must point to the native route, "웹에서 이어서" is secondary/optional. |
| Signup "첨삭권 3회 제공" copy | **KEEP (build) / HOLD (go-live)** | Policy accurate; public go-live gated on DD-3. |
| "결제 가능 / 지금 구매" messaging | **HOLD** | Toss LIVE OFF (DD-1). Build launch-ready assets; do not activate. |
| Per-university banners, all on at once | **REFINE** | Phase on per readiness (gate #11/#13, DD-4/DD-5). Build the master template now; activate a short confirmed list first. |
| University **ranking/우선순위 by 지원자 규모** in copy | **REFINE** | Catalog stores **no ranking/score**. Ordering is an internal launch-priority decision, never shown as a rank in copy. |
| Store URL / QR / 출시일 | **HOLD placeholders** | No real Store URL yet (DD-2). Replaceable layers only; no fake data. |
| IAP purchasable | **HOLD** | Not implemented (matrix #15). |
| 내신/수능 LAB in launch banners | **HOLD** | "준비 중"; post-launch only. |
| `home.legendstudy.com` landing | **HOLD** | Not created; Owner decision (see §8). |
| Essay copy level ("평가·채점 기준에 맞춰 점검") | **KEEP** | Explicitly allowed; stay below any 합격/예측/채점-by-university claim. |

## 6. Launch phasing (section 28)

**A. PRE-LAUNCH (build now, hold public)** — all assets in this package: sliders, QR versions, 3-Credits promo, university campaigns, purchase CTAs. HOLD until their gate clears.

**B. LAUNCH (go-live as each gate clears)** — APP install banner (after DD-2), Essay LAB slider, signup 3-Credits (after DD-3), confirmed-university CTAs (after DD-4/DD-5), pricing/purchase link (after DD-1).

**C. POST-LAUNCH (after real usage data)** — rewrite/growth-record campaigns, per-university segmentation, 내신/수능 LAB launches, behavior-based re-visit campaigns, teacher/school (separate authority; do not mix with the main launch — teacher offline coupon campaign e.g. 2026-10-25 is tracked elsewhere).

## 7. KPI (funnel, not CTR alone)

**Essay/web funnel:** Article→LAB CTR · LAB arrival→signup · signup→first essay · first essay→evaluation complete · evaluation→rewrite · free-Credit exhaustion · free→paid · repeat usage.

**APP funnel:** banner→Store · Store→install · install→signup · signup→first meaningful action · D1/D7.

Exact metric/event definitions follow the existing Analytics authority (DD-7) — Growth defines none of its own.

## 8. Production-priority order (internal, not shown to users)

University activation order (internal only): 1) 출시 이후 논술고사 일정, 2) 지원자 규모, 3) LegendStudy 기존 유입, 4) 기출/평가자료 확보, 5) LAB runtime/content readiness. The first banners go LIVE only for universities clearing DD-4/DD-5.

## 9. Owner decisions required (summary — full list in owner-decisions.md)

1. Marketing homepage URL: `home.legendstudy.com` vs `legendstudy.com/home`.
2. Final Main Slider visuals (choose from this package).
3. Store before/after banner swap timing.
4. University logo usage (yes/no) — default is name-centric, no logo.
5. University campaign activation list (first wave).
6. Final Store copy polish (this is a LAUNCH DRAFT, not FINAL).
7. Final QR target URL.
8. Headline A/B choices where offered.
