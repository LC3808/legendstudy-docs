<!--
DOCUMENT_STATUS: HISTORY
SCOPE: LAB / 논술 LAB WEB (첨삭 결과·공개 미리보기 UI)
DATE: 2026-10-24
PR_STATE: OPEN (not merged)
PRODUCTION: NOT_DEPLOYED
-->

# 논술 LAB WEB 첨삭 결과·미리보기 UI/UX 개선 기록

작성: Claude(논술 LAB WEB UI/UX) · 작성일: 2026-10-24
Repo: [`LC3808/legendstudy-lab`](https://github.com/LC3808/legendstudy-lab) · Branch: `claude/web-essay-ui-redesign-20261024-81e3c9`

> 이 문서는 **링크·요약 기록**이다(공개 저장소 규칙: 코드·시크릿·학생 PII·답안 원문 비포함, commit ID·링크만).
> 정규 상세는 lab 저장소 `docs/ESSAY_LAB_UI_REDESIGN_2026-10-24.md`. PR은 **Open 유지**, main 병합·Production
> 배포·DB·RPC·Credit·Ledger·평가 Worker/Registry·`src/lib/essay-runtime/**`(특히 `server/*`) 변경 없음.
> admin PR#2 / MY PR#3와 파일이 분리되어 섞이지 않는다.

## 0. 한 줄 요약
논술 LAB **첨삭 결과 화면(MY)** 과 **공개 미리보기(essay-lab)** 를 APP 기준의 섹션·카드 리듬으로 개선
(프레젠테이션만). 저장된 평가 실데이터·honesty fallback만 소비하고 가짜 점수·근거·상태·대학별 상태는
생성하지 않음. 계약 밖 APP 기능은 구현하지 않고 **GAP**으로 명시.

## 1. 착수 전 전제 (§1)
WEB 논술 LAB는 ① 공개 **미리보기/카탈로그**(`src/app/essay-lab/**`, fixture 기반, 전부 "연습 예시"
표기)와 ② 실제 저장 결과를 보여주는 **MY 화면**(`src/components/my/**`)으로 구성. 브리프가
"제거/이동/재사용"으로 기술한 일부는 **Flutter APP 기능**이며 WEB엔 대상 부재 → 날조 없이 GAP 기록.

## 2. 구현 완료 (PASS, 프레젠테이션만)
- **첨삭 결과(§9/§10)**: 결과 9영역을 섹션·카드로 재구성(종합평가 강조, 평가기준 카드 그리드,
  잘한점/보완점 색조, **답안 근거는 저장돼 있을 때만** 별도 인용 블록). 데이터·조건·문구 동일,
  별 1~5단계는 저장값 그대로 + "공식 점수·합격 가능성 아님" 주석 유지.
- **성장 비교(§12)**: 최초·재첨삭이 실제로 둘 다 존재하고 비교 조건 충족 시만 향상/동일/하락/비교불가를
  실제 결과대로 chip 색조로 표시. 가짜 수치·가상 개선 없음, 하락도 그대로.
- **History 연결(§13)**: 기록 상태를 색조 chip으로 표기(라벨·필터·Credit 비차감 로직 불변).
- **공개 미리보기(§3/§7/§15/§16)**: 상세/연도/문항/평가/작성 화면에 스코프 class + 따뜻한 캔버스·
  카드 입체감·포커스 링·≥44px 터치 타겟·좁은 폭 레이아웃. mock 표기·Owner 문구·브라우저 Draft 불변.
- `globals.css`는 **중간부만** 수정 — MY PR#3은 파일 끝만 수정하여 머지 충돌 없음.

## 2a. 사용자 화면 용어 (§3 정책, Owner 추가 지시)
사용자 화면 'AI' 표현 금지 반영: OriginLabel `MODEL_DERIVED` 배지 "AI 평가"→"첨삭 평가", 합성 평가
fixture 면책 "AI 출력이 아님"→"첨삭 결과가 아님". '예시답안'/'공식 예시답안' 문구는 사용자 화면에
애초에 없음(변경 불필요). 운영자 전용 `/ql` 콘솔 문구와 `business-info` 제공자 법적 고지는 범위 밖→불변.

## 3. 미완료 GAP (구현 금지·날조 금지)
1. **§3 실제 작성→제출→AI 첨삭 흐름**: essay-lab은 mock, `EssayRuntimeClient`가 작성 UI에 미연결 →
   Codex 11대학 백엔드 + WEB 작성/제출/상태 화면 연결 필요.
2. **§4 문제영역 너비 제거**: 대상 UI 없음(이미 반응형). 제거할 것이 없음.
3. **§5 2027 일정 펼침 이동**: 펼침 컴포넌트 부재(공식 링크 버튼만 존재).
4. **§6 PDF Viewer**: WEB에 PDF 뷰어 없음(문제는 텍스트). 문제 PDF 소스+뷰어 신규 필요.
5. **§14 대학별 라이브 상태**: 기존 API 미제공(`/api/essay/availability`는 math boolean만) → 하드코딩 금지.
6. **§19 APP 세부 UI 조정**(버튼 간격·여백 등): APP 수정 범위 아님 → P1 후속.

## 4. PR / Commit
- PR: **[LC3808/legendstudy-lab#4](https://github.com/LC3808/legendstudy-lab/pull/4)** — ready, **Open 유지**.
- Base `main`(8991b51) ← `claude/web-essay-ui-redesign-20261024-81e3c9` · 코드 `674e11f` + §3 용어 `5b31633`
  · Remote SHA 일치 확인 · auto-merge OFF.

## 5. 검증 (모두 통과)
- `tsc --noEmit` · `eslint .` · `vitest run`(**938**) · `node scripts/verify-boundaries.mjs`(**PASS**) ·
  `NODE_ENV=production next build`(정적 export 유지). 미리보기 PC/모바일 수기 확인.
- 회귀 보존: Draft · 결과·음성 정책 · 제출 상태 · History 필터·Credit 비차감 · 대시보드 빈 상태.

## 6. 관련 문서
- lab 상세: `docs/ESSAY_LAB_UI_REDESIGN_2026-10-24.md`
- MY 재설계: [`90_HISTORY/2026-10-24-my-dashboard-redesign.md`](2026-10-24-my-dashboard-redesign.md) · PR [#3](https://github.com/LC3808/legendstudy-lab/pull/3)
- 관리자 콘솔: [`90_HISTORY/2026-10-23-admin-console-redesign-phase123.md`](2026-10-23-admin-console-redesign-phase123.md) · PR [#2](https://github.com/LC3808/legendstudy-lab/pull/2)
- P1 백로그: [`90_HISTORY/2026-10-23-my-admin-p1-backlog.md`](2026-10-23-my-admin-p1-backlog.md)
