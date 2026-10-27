<!--
DOCUMENT_STATUS: HISTORY
SCOPE: APP / Flutter 인문논술 UI/UX (첨삭 결과 사용자 문구 정책 정합)
DATE: 2026-10-27
PR_STATE: branch pushed (not merged)
PRODUCTION: NOT_DEPLOYED (Owner builds/submits)
-->

# APP 인문논술 UI/UX 점검 및 문구 정책 정합 기록 (2026-10-27)

작성: Claude(APP UI/UX) · Repo: [`LC3808/legendstudy-app`](https://github.com/LC3808/legendstudy-app)
Base: `codex/material-service-app-20261022` (`c7694e2`) · Branch: `claude/essay-app-uiux-20261027` · Commit `b34b1419` · Remote SHA 일치 확인

> 링크·요약 기록(공개 저장소 규칙: 코드 전문·시크릿·학생 PII·답안 원문 비포함). WEB·Backend·Worker·DB·Credit·History·결제·Secret 변경 없음. APP 파일만 수정. Codex 논술 기능·Backend 계약 보존.

## 0. 한 줄 요약
최신 Owner 정책(Unified Wiki 2026-10-24·10-25)의 **사용자 화면 'AI' 문구 노출 금지**를 APP 인문논술 결과 화면에 반영했다. WEB은 2026-10-24에 이미 교체 완료(`AI 평가→첨삭 평가`)였고 **APP만 미반영**이던 GAP를 닫았다. 그 외 인문논술 흐름은 기존 구현을 재사용하며 수정하지 않았다.

## 1. 착수 전 확인 (지시서 §1)
- 베이스 브랜치 Owner 확정: `codex/material-service-app-20261022`(오늘자 최신 APP, main+582, 논술 UI 전체 보유). main엔 논술 기능 없음(Day 1–5 스캐폴드). 제 기존 worktree 브랜치는 구버전(논술 10파일).
- 해당 SHA에서 **신규 Claude 전용 브랜치** 분기, 작업트리 clean 확인.
- 최신 Unified Wiki Owner 정책 우선 정독: Essay-first UX, 2026-10-24 LAB 결과 재설계, 2026-10-25 handoff, 2026-10-26 베타·성장 결정.

## 2. 기존 구현 상태 분류 (지시서 §2, 확인한 범위)
- **A. 이미 구현·정상(수정 안 함):** 대학/시험/문항 선택(SourceCatalogPage), 답안 작성·저장(Draft·CAS 충돌 처리·실전/연습 타이머·360px 문제↔답안 토글), 첨삭 요청·처리/실패 상태, 첨삭 결과(EssayResultView: 한눈에 보기 색상 카드·종합평가·평가 항목별 별 단계·근거 토글), 실제 답안 기반 코칭(EssaySentenceSection: 학생이 작성한 글/평가/수정 방향/수정 예시 토글), 수정된 문장 보기, 재작성(다시 써보기 CTA), 성장 비교(GrowthBars·항목별 전/후·성장 공유), 별 단계 "공식 점수 아님" 주석, 평가 미준비 상태 정직 표시.
- **B. 구현됐으나 보완(이번에 수정):** **첨삭 결과·대기 화면의 'AI' 사용자 문구** → 정책 위반, 교체 완료.
- **C. Backend 존재·APP 연결 보완 여지(이번 범위 아님, 보고):** 라이브 흐름의 문제/제시문은 **대학 공식 원문 외부 링크**로 제공(인앱 문제 PDF 뷰어는 WEB도 미보유 GAP로 기록됨). Math 결과용 `EvaluationReportView`는 문장 단위 토글 미연결(수리논술은 베타 유료 비활성 범위).
- **D. 미구현:** 이번 확인 범위에서 신규 미구현으로 단정할 항목 없음(대학 연결·회차 STANDBY는 Codex/WEB·Backend 담당).

## 3. 실제 수정 (지시서 §3/§6)
`lib/features/essay/essay_pages.dart` 사용자 노출 문자열 4건을 '첨삭' 기반으로 교체(로직·데이터 계약·레이아웃 불변):
1. 대기 화면(미리보기): `실제 AI 호출은 없습니다` → `실제 첨삭 요청은 없습니다`
2. 재첨삭 비교 토글: `AI 재첨삭 평가 설명 보기` → `재첨삭 평가 설명 보기`
3·4. 재작성 참고 예시 안내(미리보기·실서비스 2곳): `AI가 첨삭 내용을 반영해 만든 예시…` → `첨삭 내용을 반영해 만든 예시…`
- 전체 `lib`에서 사용자 노출 'AI'/'인공지능'/'모범답안' 잔존 없음 확인.

## 4. 검증 (지시서 §8)
- 도구: fvm Flutter 3.47.6 (Dart 3.13.5, 프로젝트 요구 `sdk ^3.13.3 / flutter >=3.47.3` 충족).
- `flutter analyze lib/features/essay` → **No issues found**.
- `flutter test`(essay_workspace / approved_essay_result / additional_operating_result / essay_sentence_review / essay_live_gateway) → **All passed (+68, ~5 skipped)**. 결과 계층·overview·재작성·example·수정문장 포함 회귀 없음.
- 옛 문자열을 단언하는 테스트 없음(검색 확인).

## 5. 미완료 GAP / 후속 (날조 금지)
- 인앱 문제 PDF 뷰어(현재 공식 원문 외부 링크) — WEB도 동일 GAP, Backend/자료 연결 담당.
- Math 결과 뷰 문장 토글 미연결 — 수리논술 유료 비활성 범위(별도 PoC).
- 재작성 CTA 위치·결과 스크롤 길이 등 세부 UX 조정 — 테스트 계약·Codex 활성 브랜치 영향으로 이번 최소 범위 제외, P1 후보.

## 6. 브랜치 / 빌드 (Owner 수행)
- Branch `claude/essay-app-uiux-20261027` · Commit `b34b1419` · `origin` 동일 SHA 확인 · auto-merge 미설정.
- Owner 빌드/실기기 검수(이 저장소에서):
  - `fvm use 3.47.6` (또는 fvm 미사용 시 Flutter 3.47.x) · `fvm flutter pub get`
  - Android: `fvm flutter build appbundle --release` · iOS: `fvm flutter build ipa --release`
  - 라이브 쓰기/평가 dart-define(`ESSAY_LIVE_WRITES_ENABLED`·`ESSAY_EVALUATION_REQUESTS_ENABLED`)은 기존 릴리스 구성값을 유지한다.

## 7. 보존·경계
기존 ID·답안·History·Credit/Ledger·결제·Secret 불변. WEB/Backend/Worker/DB 미변경. Codex 활성 APP 작업과 파일 충돌 없이 신규 브랜치에서만 수정.
