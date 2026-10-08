# USER-FACING COPY AUTHORITY — LegendStudy LAB

**STATUS: ACTIVE.**

These strings are Owner-approved. An AI agent must not rewrite, paraphrase, shorten,
translate or "improve" them without a new explicit Owner decision. When a screen needs
copy that has no approved string, keep it minimal and add it here in the same change.

## 논술 LAB (Essay LAB)

### Hero

| Slot | Copy |
|---|---|
| 제목 (page identity label) | 논술 LAB |
| 본문 (hero headline) | 대학별 평가 기준에 맞춰 내 답안을 점검하고, 직접 다시 써보세요. |

Rules:

- The approved sentence is the hero headline. `논술 LAB` is the page identity and is
  rendered as a small brand label above it (약 18~20px, brand/muted accent), never as a
  large hero headline.
- The hero must not carry 기출/모집요강/information-service copy. Official admissions
  material belongs next to the official 입학처 link on the university detail screen,
  not in the hero.
- The page metadata description uses the same approved sentence.
- Hero width and text measure are visual, not copy: the surface spans the content grid
  while the sentence keeps its own readable measure.

### Product identity

```
대학별 평가 기준 → 첨삭 → 재작성 → 재첨삭 → 성장 기록
```

A visitor must immediately read "여기서 내 논술 답안을 첨삭받고 다시 써볼 수 있다".
The screen must not read as a 기출 정보 제공 서비스.

### Not allowed on Essay LAB user-facing screens

implementation 설명, runtime 설명, evaluation pipeline, synthetic/mock, foundation,
internal terminology, 데이터 구조, 권한 구조, 장문의 정책 설명, `구현되지 않았습니다`.

### Required honest labels (not a regression)

연습 예시 · 피드백 예시 and the 연습 예시 안내 notice stating that the example problem and
feedback are not a real university 기출 or an evaluation of the student's own answer.
They must stay while the connected backend does not exist.

## History

| Date | Change | LAB commit |
|---|---|---|
| 2026-10-08 | Hero copy restored to the approved sentence; the information-service wording that entered with `65aa957` was removed. `논술 LAB` demoted to a label. | `13fc77c` |
| 2026-10-08 | Copy audit: English section labels on the feedback example page → 총평 / 강점과 개선점 / 나의 논술 패턴; public source notes de-jargoned. | `13fc77c` |
