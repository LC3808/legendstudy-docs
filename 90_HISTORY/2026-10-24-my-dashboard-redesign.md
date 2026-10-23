<!--
DOCUMENT_STATUS: HISTORY
SCOPE: LAB / MY 마이페이지 (일반 사용자)
DATE: 2026-10-24
PR_STATE: OPEN (not merged)
PRODUCTION: NOT_DEPLOYED
-->

# MY 마이페이지 UI/UX 개선 — 입시·논술 성장 대시보드 기록

작성: Claude(MY 마이페이지 UI/UX) · 작성일: 2026-10-24
Repo: [`LC3808/legendstudy-lab`](https://github.com/LC3808/legendstudy-lab) · Branch: `claude/web-my-redesign-20261023-00d88e`

> 이 문서는 **링크·요약 기록**이다(공개 저장소 규칙: 코드·시크릿·학생 PII 비포함, commit ID·링크만).
> 정규 상세는 lab 저장소 문서 `docs/MY_DASHBOARD_REDESIGN_2026-10-24.md`에 있다. MY PR은 **Open 유지**,
> main 병합·Production 배포·DB·RPC·Credit·Ledger·결제·평가 Worker/Registry 변경은 하지 않았다.
> 관리자 콘솔 작업([2026-10-23 기록](2026-10-23-admin-console-redesign-phase123.md))과는 파일이 분리되어 섞이지 않는다.

## 0. 한 줄 요약
일반 사용자 **마이페이지**를 입시 준비·논술 성장 개인 대시보드로 개선(프레젠테이션만).
조회 계약으로 불가능한 지표는 가짜로 만들지 않고 **GAP**으로 명시. 데이터 계약·Ledger·결제·
Codex 백엔드 무수정, 기존 사용자 데이터 불변.

## 1. 정보구조(§3) 섹션 순서
`나의 프로필 · 내 이용 현황 · 나의 논술 성장 · 나의 학교·학년 · 나의 목표 · 나의 지원 현황 · LAB · 나의 학습시간 · 계정 및 지원`

## 2. 구현 완료 (PASS)
- **나의 프로필 카드(P0)**: 미사용 뷰 계약 `myIdentity` 연결 — 닉네임/이메일/학교·학년(설정 시), 닉네임 없으면 이메일만, 이메일 중복 금지.
- **나의 논술 성장(P1)**: 배포된 `my_essay_summary` RPC + 엄격 게이트 `comparableDimensionDelta`만 사용. 최초→재첨삭 단계 변화(향상/동일/하락 개수), 상태별 UI(기록없음/진행중/최초만/재첨삭/여러대학). 가짜 수치 없음.
- **첨삭권 내역(P0)**: 잔액 요약(canonical `credit_summary`, 무료 Credit에 구매 만료일 오적용 금지) + 10건/페이지 이동 + 통일된 뒤로가기/마이페이지.
- **지원 현황 입력(P0)**: 입학학년도 기본값 = 다음 입학연도(1900 기본 버그 수정), 수시/정시 라디오(레거시 값 보존).
- 학교·학년 구분선 · 비활성 LAB(내신·모의/수능) 회색 처리 · 목표 검색 영역 정리.

## 3. 미완료 GAP (신규 집계/계약 필요 — 임의 구현 안 함)
1. **P2 대학별 평균 작성 횟수 비교**: 교차 학생 집계 RPC + 유효 표본 30명 이상·RLS 보장 필요(Codex 백엔드 완료 + Owner 승인 대상). `my_essay_summary`는 본인 데이터만 반환 → 운영 노출·Mock 금지, UI 미생성.
2. **"개선된 평가요소 이름"**: `my_essay_summary`에 criterion 라벨 부재 → 향상/동일/하락 개수만 표기하고 이름별 내역은 상세(`/account/essay`)로 연결. 요약 RPC에 라벨 추가 시 직접 표기 가능.

## 4. PR #3 정보
- PR: [LC3808/legendstudy-lab#3](https://github.com/LC3808/legendstudy-lab/pull/3) — "MY 마이페이지: 입시·논술 성장 개인 대시보드 (UI만)"
- Base: `main`(8991b51) ← `claude/web-my-redesign-20261023-00d88e` · 상태: **Open** (ready, draft 아님) · auto-merge OFF

## 5. Commit
- 코드 Commit: `1bae5407813aa65217cbc8c59309c5d3206c8b98` · Remote SHA 일치 확인.

## 6. 검증 (모두 통과)
- `tsc --noEmit` · `eslint .` · `vitest run`(**947**) · `node scripts/verify-boundaries.mjs`(**PASS**) · `NODE_ENV=production next build`(정적 export 유지)

## 7. 관련 문서
- lab 상세: `docs/MY_DASHBOARD_REDESIGN_2026-10-24.md`
- 기존 MY 기록: `docs/MY_DASHBOARD_VISUAL_FINAL.md`, `docs/integrated-my-2026-10-09.md`, `docs/MY_STUDENT_360_CONTRACT.md`
