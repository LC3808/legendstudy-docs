<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH
CREATED: 2026-10-08
VERIFICATION_BASIS: legendstudy-docs @ 1c03917
-->

# MESSAGING SYSTEM — 2026 Launch

The single copy source. Every banner/CTA pulls from here. Each line is tagged **KEEP** (use as-is), **REFINE** (improved wording), or **ALTERNATIVE** (A/B option for Owner).

## 0. Hard copy rules (non-negotiable)

**Banned phrases** (unimplemented / misleading / store-risk):
- 합격 보장 · 합격 가능성 · 합격 확률 · 입결 · 등급 환산 · 점수 예측
- AI 자동 채점 · AI가 채점 · 대학이 채점 · 대학 공식 첨삭 · 실제 입시 채점과 동일
- 대학 공식 / 대학 제휴 / 공식 파트너 (any affiliation implication)
- 결제 가능 / 지금 구매 / 인앱 구매 (until DD-1 / DD-15 clear)
- Internal/technical terms: evaluation pipeline, DB, model, scoring engine, 데이터 처리, 재평가 로직…

**Allowed evaluation framing (ceiling):**
> "대학별 평가·채점 기준에 맞춰 내 답안을 점검합니다."
> "관심 대학 기준으로 강점·보완 지점을 살펴봅니다."

Every line answers one question: **"이걸 쓰면 나에게 어떤 도움이 되는가?"**

## 1. Brand / positioning

| Use | Line | Tag |
|---|---|---|
| Outward master | 내신 관리부터 수능, 논술 준비까지. 데이터가 쌓일수록 나의 가능성은 더 선명해집니다. | KEEP (Owner) |
| Short brand | 레전드스터디+ · 입시 준비를 한 곳에서 | REFINE |
| LAB system | LegendStudy LAB — 내신 LAB · 수능 LAB · 논술 LAB | KEEP |

## 2. 논술 LAB core messaging

| Role | Line | Tag |
|---|---|---|
| Differentiator | 대학마다 논술 평가 기준이 다릅니다. | KEEP |
| Differentiator (expanded) | 대학별 평가 기준에 맞춰 답안을 점검하고 개선 방향을 제시합니다. | KEEP |
| Problem hook | 내 논술 답안, 어디부터 고쳐야 할지 모르겠다면? | KEEP |
| Problem hook (short, mobile) | 내 논술 답안, 무엇이 부족할까? | KEEP |
| Behavior | 논술, 직접 쓰고 다시 써보세요. | KEEP |
| Behavior loop | 첨삭 → 재작성 → 변화 확인 | KEEP |
| Positioning (not grading) | AI 채점이 아니라, 대학별 논술 학습 코칭입니다. | ALTERNATIVE |

## 3. Signup offer (gated DD-3 for go-live; copy is accurate as policy)

| Role | Line | Tag |
|---|---|---|
| Primary | 신규 가입 시 첨삭권 3회 제공 | KEEP |
| Supporting | 가입하고 첨삭권 3회로 직접 경험해보세요. | REFINE |
| Fine print anchor | 첨삭권 1회 = 최초 첨삭 + 동일 답안 첫 재첨삭. 자세한 조건은 이용안내. | KEEP |

Do **not** dress this as a discount/limited event. It exists to make students experience the essay learning loop.

## 4. CTA labels

| Context | Label | Destination logic | Tag |
|---|---|---|---|
| Essay LAB start | 논술 LAB 시작하기 | Live LAB route at the time (web: `lab.legendstudy.com` essay entry; app: native `/lab/essay`) | KEEP |
| Article top (awareness) | [대학]논술 LAB | University LAB entry (gated) | KEEP |
| Article post-download (conversion) | 이 문제로 첨삭 시작하기 | University LAB entry (gated) | KEEP |
| App internal | 논술 LAB 시작 | app native `/lab/essay` | KEEP |
| Web continue | 웹에서 계속하기 | `lab.legendstudy.com` | KEEP |
| App view | 앱에서 보기 | Store URL (gated, placeholder) | KEEP |
| Text fallback | 레전드스터디 논술 LAB에서 내 답안 점검하기 → | Live route | KEEP |

Never mix Slider 1 (APP awareness/install) and Slider 2 (Essay LAB → start learning) CTA intents.

## 5. University article CTA copy (master, variable-driven)

**CTA A — article top (awareness, small, non-intrusive):**
> {{university_name}} 논술 준비 중인가요?
> 대학별 평가·채점 기준에 맞춰 내 답안을 점검하고 다시 써보세요.
> [{{university_short}} 논술 LAB]

**CTA B — after the student finds/downloads the 기출 (conversion, the key point):**
> 기출을 찾았다면, 이제 직접 풀어보세요.
> {{university_name}} 논술 LAB에서 답안을 작성하고, 첨삭 → 재작성 → 변화 확인까지.
> 신규 가입 시 첨삭권 3회 제공
> [이 문제로 첨삭 시작하기]

## 6. Cross-promotion (soft, no forced conversion)

| Surface | Line | Tag |
|---|---|---|
| LAB web → APP | 앱에서도 이어서 학습할 수 있습니다. | KEEP |
| APP → LAB | 논술 LAB에서 답안을 점검해보세요. | KEEP |

Never force web users to the App Store.

## 7. School / B2B (separate from student banners)

| Role | Line | Tag |
|---|---|---|
| B2B CTA (own placement only) | 학교·단체 이용 문의 | KEEP |

Keep B2B out of student main banners. (Student acquisition ≠ school/teacher acquisition.)

## 8. Mobile length guidance

- Headline ≤ 16 Korean chars/line, ≤ 2 lines.
- Sub ≤ 22 chars/line, ≤ 2 lines.
- Honor Korean `word-break: keep-all`; manually break at clause boundaries (the admin console overflow bug came from long unbroken Korean strings — keep lines short).
- One CTA per mobile banner.
