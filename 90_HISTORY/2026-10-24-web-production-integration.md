<!--
DOCUMENT_STATUS: HISTORY
SCOPE: Production WEB 통합 (admin PR#2 + MY PR#3 선별 반영 + 사용자 용어·대학 상태)
DATE: 2026-10-24
PR_STATE: OPEN (not merged) — PR #5, base=codex/material-browse-release-20261022
PRODUCTION: NOT_DEPLOYED
-->

# Production WEB 통합 — admin/MY UI 선별 반영 + 용어 정책(§3)·대학 상태(§4) 기록

작성: Claude(Production 통합) · 작성일: 2026-10-24
Repo: [`LC3808/legendstudy-lab`](https://github.com/LC3808/legendstudy-lab) · Branch: `claude/web-production-integration-20261024-fa40d8`

> 이 문서는 **링크·요약 기록**이다(공개 저장소 규칙: 코드·시크릿·학생 PII·답안 원문 비포함, commit ID·링크만).
> 정규 상세는 lab 저장소 문서 `docs/PRODUCTION_INTEGRATION_2026-10-24.md`에 있다.
> 통합 PR은 **Open 유지**, main 병합·Production 배포·Secret/환경변수/DB/RPC/Worker/Ledger/History/평가 변경은 **하지 않았다**.

## 0. 한 줄 요약
실제 Production 코드(`codex/material-browse-release-20261022` @ `f1a9e27`)를 최상위 기준으로,
Claude의 관리자 콘솔(PR #2)·MY(PR #3) UI 개선을 **선별 통합**하고 사용자 노출 용어 정책과 정직한 대학별 상태를 반영했다.

## 1. 기준·산출물
- **Production 기준**: `codex/material-browse-release-20261022` @ `f1a9e27` (= main `8991b51` + Codex 릴리스 체인). 착수 시 재확인 — 변경 없음.
- **통합 브랜치/커밋**: `claude/web-production-integration-20261024-fa40d8` @ `2587491`.
- **통합 PR**: [#5](https://github.com/LC3808/legendstudy-lab/pull/5) (OPEN, ready, **base = codex/material-browse-release-20261022**, main 아님).
- 현행 Cloudflare 배포 `e67a0d37`, 직전 정상 `40c5085a` — 롤백 경로로 보존.

## 2. 반영·충돌
- 반영: 관리자 콘솔 PR #2(`claude/admin-console-redesign-1a594d` @ `d3140df`), MY PR #3(`claude/web-my-redesign-20261023-00d88e` @ `1bae540`). **전체 merge 아님 — 선별 적용.**
- 논술 WEB UI(PR #4)는 **미통합**(세션 실패·미준비, Owner 추가 지시 대기).
- 충돌은 Codex 변경 파일 3개뿐: `admin-ql.css`·`globals.css`(양쪽 append 보존), `lab-cards.tsx`(**Production 라벨 `수능 LAB` 보존** + PR #3 시각 클래스). 충돌 시 Production 보존 원칙.

## 3. §3 사용자 용어 (표시 문구만, 계약·enum·운영자 콘솔 불변)
사용자 화면 "AI" 및 "대학 공식 예시답안" 노출 제거(6개소: 카탈로그 상태·출처 라벨·재첨삭 설명·예시 답안·수리 참고 풀이) + 동반 테스트 5건.
enum/provenance/서버 프롬프트/내부 전용 문자열·운영자 콘솔(`/ql`·quality·materials·admin)은 불변. 사용자 화면 "AI" 잔존 0.

## 4. §4 대학별 상태 (하드코딩 없음)
Production 네이티브로 이미 구현(`catalog-policy`의 launch-hold 목록 + `evaluationReady`/`verification`/`is_published`):
첨삭 가능 `첨삭 시작하기`(상단) / 준비 중 `서비스 준비중`(하단), 문제 PDF는 준비 중도 열람 유지.
**일반 공개 문항 = 12** (Essay 11 + 건국 Math 1) — [공개 서비스 인벤토리](2026-10-24-essay-public-service-inventory.md)와 일치.
최종 공개 판정은 `ESSAY_PUBLIC_EXAMS`(Cloudflare env, Owner 전용) ∩ DB 정책 → 프런트 하드코딩 금지, **DB 기준 재확인은 Owner GAP**.

## 5. 검증
- `tsc`·`eslint`: 실패 건 전부 **선존재/env**(미변경 `materials`/pdfjs-dist, `essay-history`/`exam-history`) — 통합 유발 0.
- `vitest`: 1209 passed, 6 failed — 6건 모두 `essay-runtime` 데이터 스냅샷, **pristine `f1a9e27`에서 동일 실패 확인(회귀 0)**.
- `verify-boundaries`: **PASS** (service-key 위반 0).
- `next build`: 이 워크트리 **환경 제약**(pnpm 관리 의존성 + pnpm/corepack 사용 불가 + Turbopack cross-root 심링크 거부)으로 실행 불가 → 실제 Cloudflare Pages CI에서 수행, **Owner/CI 확인 대기**.

## 6. 상태·GAP
- 통합 코드 회귀 0, UI-only, 서버/DB/평가/Credit/History/Worker 불변.
- GAP: (a) WEB production 빌드 CI 환경 확인, (b) DB 기준 공개 문항 수(12) Owner 재확인.
- **배포·main 머지 안 함** — 검증 PASS 상태로 Owner 승인 대기.

## 7. 연결 문서
- 관리자 콘솔 PR #2: [2026-10-23 admin-console-redesign-phase123](2026-10-23-admin-console-redesign-phase123.md)
- MY PR #3: [2026-10-24 my-dashboard-redesign](2026-10-24-my-dashboard-redesign.md)
- 논술 WEB UI PR #4: [2026-10-24 essay-lab-ui-redesign](2026-10-24-essay-lab-ui-redesign.md)
- 공개 서비스 인벤토리: [2026-10-24 essay-public-service-inventory](2026-10-24-essay-public-service-inventory.md)
- P1 백로그: [2026-10-23 my-admin-p1-backlog](2026-10-23-my-admin-p1-backlog.md)
