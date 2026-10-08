<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH
CREATED: 2026-10-08
-->

# MAIN SLIDERS — LegendStudy.com

Two slides only at launch (section 29). Slide 1 = APP awareness/install. Slide 2 = Essay LAB → start learning. CTA intents never mixed.

Assets: `assets/marketing/2026-launch/app-main/` and `essay-lab-main/`.

---

## SLIDER 1 — LegendStudy+ APP

**Status:** `READY_AFTER_URL` (matrix #13/#14, DD-2). Build complete; go-live after real Store URL/QR.

### Composition — PC (1200×480)
- Left (text, ~60%): eyebrow → headline → sub → CTA buttons.
- Right (~40%): phone mock placeholder + `QR_PLACEHOLDER` + `STORE_BADGE_PLACEHOLDER`.

### Composition — Mobile (720×600)
- Stacked: eyebrow → headline → sub → single store button for the current OS (`STORE_BADGE_PLACEHOLDER`, OS-detected by operator). QR omitted on mobile.

### Copy
| Slot | Text |
|---|---|
| Eyebrow | 레전드스터디+ 모바일 앱 |
| Headline | 기출 문제부터 학습 관리까지, 이제 앱에서 더 편하게. |
| Sub | 자료 탐색 · 저장 · D-Day · 학습 타이머를 한 곳에서. |
| CTA (PC) | [App Store]  [Google Play]  + QR |
| CTA (mobile) | 현재 OS 스토어 버튼 1개 |

### Feature claims (match V1 only — section 33)
Advertise only what is in the shipping V1. Verify against the latest APP authority before go-live. Candidate V1 features (confirm each): 기출자료 탐색, PDF 확인, 저장, 최근 본 자료, D-Day, Study Timer, 학교 개인화, 급식, LAB 연결.

- Mark FUTURE features (e.g. 내신/수능 LAB analysis, admissions prediction) **NOT_FOR_V1** — never shown as current.
- No "기록이 쌓일수록 합격 가능성이 선명해집니다" as a feature claim (abstract / implies 합격). Lead with concrete features.

### Placeholder rules
No fake Store URL, no fake QR, no 출시일. All in replaceable layers.

---

## SLIDER 2 — LegendStudy 논술 LAB

**Status:** `READY_AFTER_FEATURE` (matrix #6–#9, DD-3/DD-4). Build complete; go-live after essay public runtime + signup-bonus confirmation.

### Composition — PC (1200×480)
- Left (text): eyebrow → headline → sub → benefit chip → CTA.
- Right: a calm abstract "답안 → 점검 → 다시 쓰기" 3-step visual (no university imagery, no crest).

### Composition — Mobile (720×600)
- Stacked: eyebrow → headline → sub → chip → CTA.

### Copy
| Slot | Text |
|---|---|
| Eyebrow | 레전드스터디 LAB · 논술 LAB |
| Headline | 내 논술 답안, 무엇이 부족할까? |
| Sub | 대학별 평가·채점 기준에 맞춰 내 답안을 점검하고 직접 다시 써보세요. |
| Benefit chip | 신규 가입 시 첨삭권 3회 제공 |
| CTA | 논술 LAB 시작하기 |

### Destination
**LAB Web** essay entry on `lab.legendstudy.com` (the full-service surface — PC + mobile web). Confirm the live Production essay-entry route at go-live time, that it resolves on PC + mobile web, and that the login flow works (DD-4 + gate #13 in product-readiness). This slide sends users to LAB Web, not the App Store; app install is not forced.

### Guardrails
Benefit chip go-live gated on DD-3 (hide the chip if the public signup bonus is not yet confirmed; the rest of the slide can still run). No 합격/채점-by-university wording.

---

## Carousel operation
- Exactly 2 slides at launch. Do not add slides for marketing appetite; it harms the free-resource site's primary purpose.
- Autoplay interval ≥ 6s, pause on hover/focus, manual controls, visible dots. Each slide readable as a static frame (not motion-dependent).
- Respect `prefers-reduced-motion`: no autoplay transition for those users.
