<!--
DOCUMENT_STATUS: HISTORY
SCOPE: LAB / Admin Console
DATE: 2026-10-23
PR_STATE: OPEN (not merged)
PRODUCTION: NOT_DEPLOYED
-->

# 관리자 콘솔 UI/UX 개선 — PHASE 1~3 기록

작성: Claude(관리자 콘솔 UI/UX) · 작성일: 2026-10-23
Repo: [`LC3808/legendstudy-lab`](https://github.com/LC3808/legendstudy-lab) · Branch: `claude/admin-console-redesign-1a594d`

> 이 문서는 **링크·요약 기록**이다(공개 저장소 규칙: 코드·시크릿·학생 PII 비포함, commit ID만).
> 정규 상세는 lab 저장소 문서에 있다. 관리자 UI PR은 **Open 유지**, main 병합·Production 배포·
> DB·Credit·Ledger 변경은 하지 않았다.

## 0. 한 줄 요약
기존 운영자 게이트 관리자 콘솔(대시보드·회원·Credit·결제·논술/수리 운영·1:1 문의·`/ql`)을
**재사용**하여 사용성·디자인·통계를 개선. 조회 계약으로 불가능한 지표는 가짜로 만들지 않고
**집계 불가/GAP**으로 명시. Codex 백엔드(Worker·Registry·평가 프로필·DB·Ledger) 무수정.

## 1. 관리자 콘솔 개선 범위
- 공통 디자인 시스템(카드·그림자·테두리·필터/선택 강조·반응형)
- 대시보드: 조치 필요 밴드 + 기간 필터 + 누적/기간 지표 구분 + AI 성공률
- 회원 관리: 10/페이지·페이지 번호, 인라인 상세(행 바로 아래, 1개씩), 미설정 숨김, 구분선
- Credit/결제/운영/문의: 기존 데이터 기반 통계·레이아웃 개선, 불가 항목은 GAP 표기
- §6 회원 Credit 조회 오류 / §7 회원 논술 기록 조회 오류: READ-ONLY 원인 규명

## 2. 구현 완료 기능 (PASS)
- 디자인 시스템(§3) · 회원 관리(§5: 10/페이지·인라인 상세·미설정 숨김·구분선) · 1:1 문의(§11, 기존 답변 기능 재사용)
- 대시보드 조치 밴드·기간 필터·AI 성공률/실패율(파생) / 운영 성공률·실패율·처리시간 중앙값·유형별(파생) / 결제 5건/페이지
- §6: ledger 페이지 합계로 "실제 무계정 vs 조회 미해석"을 구분 표시 + 조회 계정 ID 노출(클라이언트, READ-ONLY)
- §7: 상세에 조회 계정 ID 노출 → member-detail↔Student360 교차 대조 가능(클라이언트, READ-ONLY)

## 3. 미완료 GAP (신규 읽기 전용 집계/해석 RPC 필요 — 임의 구현 안 함)
1. 기간(이번 달/직접 선택) 집계 RPC
2. 결제 매출 집계 RPC(상품별 판매·매출, 성공/실패/환불, 순매출, 일·주·월 추이)
3. Credit 세부 집계 RPC(출처별 누적 지급, 최초/무료재/유료재, 재첨삭률, 만료, 환불·조정, 대학별·회원별 평균)
4. 운영 레지스트리 집계 RPC(활성 대학/시험/문항, 평가 프로필·공식 근거 연결 문항, 일반 공개 문항, 대학별 비교)
5. §6·§7 식별자 해석 수정(`admin_member_credit` 계정 해석, essay-history 조인 키) — **DB측, 무수정**
6. Worker 장애 상태 신호
7. §12 품질 검수 데이터 계약(대학별 성공률·유형별 오류·근거/감점/대안·수리 계산·재첨삭 개선)

## 4. PR #2 정보
- PR: [LC3808/legendstudy-lab#2](https://github.com/LC3808/legendstudy-lab/pull/2) — "Redesign admin console UX and add data-honest operations statistics"
- Base: `main` ← `claude/admin-console-redesign-1a594d` · 상태: **Open** (ready, draft 아님) · auto-merge OFF

## 5. 변경 파일 및 Commit
- 코드 Commit: `27a33f6cdda659b58d6ad3d1922faeaa935260ec` / PR tip: `d3140dfcd957f9b5222af255d93bc3541245ecd1`(보고서 SHA 기입)
- 변경 파일 11개(admin UI·CSS·docs에 한정):
  - `src/components/admin/` — `admin-dashboard-view.tsx`, `admin-members-view.tsx`, `admin-member-credit-panel.tsx`, `admin-operations-view.tsx`, `admin-payment-view.tsx`, `admin-credit-view.tsx`, `admin-console.test.tsx`, `admin-operations.test.tsx`
  - `src/app/admin-ql.css`
  - `docs/ADMIN_CONSOLE_REDESIGN_PHASE1.md`, `docs/ADMIN_CONSOLE_REDESIGN_PHASE2_REPORT.md`
- **무변경**: `src/lib/admin/*`(계약·클라이언트), 평가 엔진/Worker/Registry/DB/Ledger, `/ql` 소스·권한
- 정규 상세(lab 저장소):
  [PHASE1 분석](https://github.com/LC3808/legendstudy-lab/blob/27a33f6cdda659b58d6ad3d1922faeaa935260ec/docs/ADMIN_CONSOLE_REDESIGN_PHASE1.md) ·
  [PHASE2·3 완료 보고](https://github.com/LC3808/legendstudy-lab/blob/27a33f6cdda659b58d6ad3d1922faeaa935260ec/docs/ADMIN_CONSOLE_REDESIGN_PHASE2_REPORT.md)

## 6. 테스트·빌드 결과
- Typecheck `tsc --noEmit` **PASS** · Lint `eslint` **PASS** · Test `vitest run` **PASS (94 파일 / 938)**
- Boundary `verify-boundaries.mjs` **PASS**(blocked_runtime_dependencies=0) · Build `next build`(정적 export, admin 6개 라우트) **PASS**
- CI(PR #2): Cloudflare Pages Preview 빌드 2개(`legendstudy-lab`, `legendstudy-lab-math-test`) 모두 **pass**

## 7. Production 미배포 상태
- Production WEB(lab.legendstudy.com) 배포 **안 함**. Cloudflare는 PR **Preview**만 자동 생성(브랜치 전용, Production 아님).
- Production DB / Credit Ledger / 결제 로직 / Codex 첨삭 백엔드 파일 **변경 없음**.

## 8. 향후 병합·배포 조건
- Codex의 **11개 대학 논술 첨삭 백엔드 연결 완료**까지 PR **Open 유지**.
- 이후 **Owner 승인** 시에만 main 병합 → Production 배포 진행.
- GAP 항목(신규 읽기 전용 집계/해석 RPC)은 Codex 완료 + Owner 승인 후 별도 설계·검증.

## 연결 (기존 관리자 콘솔 관련 문서)
- [`90_HISTORY/OWNER_DIRECTIVES/2026-10-08-admin-members-essay-foundation.md`](OWNER_DIRECTIVES/2026-10-08-admin-members-essay-foundation.md) — 관리자·회원·Student360 기반 Owner 지시
- [`90_HISTORY/EVIDENCE/2026-10-09-admin-grant-golive.json`](EVIDENCE/2026-10-09-admin-grant-golive.json) — 수동 Credit 지급 go-live evidence
- [`00_PROJECT/SOURCE_OF_TRUTH.md`](../00_PROJECT/SOURCE_OF_TRUTH.md) — capability 레지스트리(#16 Quality Console: lab future)
