<!--
DOCUMENT_STATUS: HISTORY / BACKLOG
SCOPE: LAB / MY page + Admin Console (P1 follow-ups)
COMPILED: 2026-10-24
SOURCES: 90_HISTORY/2026-10-24-my-dashboard-redesign.md, 90_HISTORY/2026-10-23-admin-console-redesign-phase123.md
-->

# MY·관리자 콘솔 P1 후속 작업 백로그

작성: Claude(통합 백로그) · 작성일: 2026-10-24 · Repo: [`LC3808/legendstudy-lab`](https://github.com/LC3808/legendstudy-lab)

> 공개 저장소 규칙: 시크릿·토큰·개인정보·학생 답안 원문·민감 운영 데이터 비포함(commit ID·링크만).
> 기존 문서를 삭제·덮어쓰지 않는다. **실제 구현하지 않은 기능은 PASS로 적지 않는다.**
> 두 PR 모두 **Open 유지**, main 병합·Production 배포 금지(Owner 승인 전).

## 연결 (기존 기록)
- MY 재설계: [`90_HISTORY/2026-10-24-my-dashboard-redesign.md`](2026-10-24-my-dashboard-redesign.md) · PR [`legendstudy-lab#3`](https://github.com/LC3808/legendstudy-lab/pull/3) (commit `1bae540`)
- 관리자 콘솔 PHASE 1~3: [`90_HISTORY/2026-10-23-admin-console-redesign-phase123.md`](2026-10-23-admin-console-redesign-phase123.md) · PR [`legendstudy-lab#2`](https://github.com/LC3808/legendstudy-lab/pull/2)
- 각 GAP 상세는 위 두 문서 참조 — 본 백로그는 **중복 생성하지 않고** P1 후속으로 연결·명세한다.

---

## 1. MY 페이지 — 완료 (P1 아님, 참고용)
P1로 중복 등록하지 않는다. (출처: MY 재설계 문서 / PR #3)
- **A 닉네임 WEB·APP 연동** — 완료. 공유 backend `profiles.display_name` 표시(없으면 이메일만), 편집은 기존 APP.
- **B 나의 논술 성장 카드** — 완료. 배포된 `my_essay_summary` RPC만 사용, 상태별 UI.
- **C 최초·재첨삭 성장 비교** — 완료. 향상/동일/하락 **개수**를 실제대로 표시(하락·동일 포함).
- **H 학습시간 데이터 연결** — 완료(기존 `my_study_summary` 유지, 변경 없음).

## 2. MY 페이지 — P1 미완료
각 항목: 1 기능명 · 2 현재 상태 · 3 미완료 사유 · 4 필요 데이터·API · 5 수정 대상 화면·파일 · 6 담당 · 7 선행 조건 · 8 완료 판정.

### D. 평가요소별 개선 "이름" 표시
1. 개선된 평가요소 이름 최대 2개 표시
2. 향상/동일/하락 **개수는 완료**, 항목 **이름은 미표시**
3. WEB·APP 공통 계약 추가 (`my_essay_summary`에 criterion 라벨 부재)
4. `my_essay_summary` 반환에 dimension별 criterion 라벨 추가(또는 성장 카드에서 `readEssayDetail` 병합)
5. `src/components/my/essay-growth.tsx`, `src/lib/my/essay-growth.ts`, `src/lib/my/essay-summary.ts`
6. Codex(RPC 라벨) + Claude(UI)
7. 요약 RPC 스키마에 라벨 추가·배포
8. 향상한 평가요소 실제 이름이 최대 2개(라벨 있는 실데이터만) 노출

### E. 대학별 평균 논술 작성 횟수
1. 대학별 1인 평균 작성 횟수(나 vs 같은 대학 평균)
2. 미구현(운영 미노출, Mock 금지)
3. DB·RPC 변경 필요 + 운영 데이터 부족 + 개인정보·권한 검토
4. 신규 교차 학생 집계 RPC(유효작성=실패·중복 제외, 최초/재첨삭 구분, 1인평균=총유효÷유효학생, 30명↑ 게이트, 지원 미확인 시 '지원자' 표현 금지, RLS 유지)
5. 신규 컴포넌트(미생성) + `src/components/my/essay-growth.tsx`(또는 별도 섹션)
6. Codex(집계 RPC) + Owner(승인) + Claude(UI)
7. Codex 집계 RPC 완료 + Owner 승인 + 표본 30명 확보
8. 유효학생 30명↑일 때만 집계값(순위·백분위 없음) 표시, 표본 부족 시 비표시

### F. 다른 학생 학습량 비교 그래프 ("함께 준비하는 학생들")
1. 같은 대학 평균 대비 내 작성 횟수 가로 막대 비교
2. 미구현
3. DB·RPC 변경 필요 + 개인정보·권한 검토
4. E의 집계 RPC(집계만: 나/평균 2값), 비난·합격가능성 해석 문구 금지
5. 신규 컴포넌트 + 성장 섹션
6. Codex + Owner + Claude
7. E 선행(집계 RPC·표본 30명·Owner 승인)
8. 개별 학생 비노출·집계만, 30명↑, 순위/백분위/합격해석 없음

### G. 대학별 재첨삭 이용 통계
1. 대학별 재첨삭 이용·개선 통계
2. 미구현
3. DB·RPC 변경 필요 + 운영 데이터 부족
4. 신규 집계 RPC(대학별 최초/재첨삭/재첨삭률, 무료 재첨삭도 실제 완료면 포함, 동일 답안 중복 제외)
5. 신규 컴포넌트 + 통계 섹션
6. Codex + Owner + Claude
7. Codex 집계 RPC + Owner 승인
8. 대학별 재첨삭 집계가 실데이터로(개인 식별 없음, 집계만) 표시

### I. WEB·APP 공통 데이터 검증
1. WEB·APP 동일값 검증(Credit·학습시간·논술 요약)
2. WEB 측 계약 보존은 tsc·eslint·vitest(947)·boundaries·build로 확인(완료), 실제 APP 런타임 대조는 미수행
3. 운영 데이터 부족(APP 런타임·공용 테스트 계정 자격 없음)
4. 동일 사용자의 APP·WEB 동시 조회 세션 또는 공유 RPC 응답 스냅샷 대조
5. 검증 작업(코드 변경 아님) — `src/lib/my/*`, `src/components/credit-balance.tsx`
6. Owner/QA(공용 계정 자격) + Claude/Codex
7. APP·WEB 공용 테스트 계정 접근
8. 동일 사용자에 대해 WEB·APP이 Credit·학습시간·논술 요약을 동일 값으로 표시함을 대조 확인

### J. 나의 목표 — 대학 추가 PC 전용 모달/팝오버
1. PC에서 대학/학과 추가를 모달 또는 팝오버로
2. 인라인 패널(검색창+결과 한 영역, 기능 동일)로 구현됨, PC 전용 모달/팝오버 형태는 미적용
3. 기타(기술적 가능하나 기존 goals/dashboard 테스트 회귀 위험으로 보류)
4. 추가 데이터 불필요(UI 패턴만)
5. `src/components/my/dashboard.tsx`(GoalsEditor), `src/app/globals.css`
6. Claude
7. 없음(디자인 결정)
8. PC에서 모달/팝오버로 대학 검색·선택, 모바일 반응형 유지, 기존 테스트 green

## 3. 관리자 콘솔 — P1 미완료 (GAP)
상세·근거는 [`2026-10-23-admin-console-redesign-phase123.md`](2026-10-23-admin-console-redesign-phase123.md) §3 참조(중복 생성 안 함). 모두 신규 **읽기 전용** 집계/해석 RPC가 필요하며, 임의 구현하지 않음.

| # | 기능 | 현재 | 사유 | 필요 API | 수정 화면 | 담당 | 선행 | 완료 판정 |
|---|---|---|---|---|---|---|---|---|
| 1 | 기간 집계(이번 달/직접 선택) | 집계 불가 | 기존 RPC에 기간 파라미터 없음 | 기간 기준 신규가입·첨삭·Credit·결제 집계 RPC | 대시보드 | Codex+Claude | 집계 RPC 배포 | 임의 기간 선택 시 실집계 표시 |
| 2 | 결제 매출 집계 | 집계 불가 | DB·RPC 변경 필요 | 상품별 판매·매출, 성공/실패/환불, 순매출, 일·주·월 추이 RPC | 결제·대시보드 | Codex+Owner | 집계 RPC·Owner 승인 | 상품 필터·매출·추이 그래프 실데이터 |
| 3 | Credit 세부 집계 | 집계 불가 | DB·RPC 변경 필요 | 출처별 누적 지급, 최초/무료재/유료재, 재첨삭률, 만료, 환불·조정, 대학별·회원별 평균 | Credit·대시보드 | Codex+Owner | 집계 RPC 배포 | 세부 통계 실데이터 표시 |
| 4 | 운영 레지스트리 집계 | 집계 불가 | DB·RPC 변경 필요 | 활성 대학/시험/문항, 평가 프로필·공식 근거 연결, 일반 공개, 대학별 비교 RPC | 논술·수리 운영 | Codex+Owner | Registry 집계 RPC | 레지스트리·대학별 지표 실데이터 |
| 5 | §6·§7 식별자 해석 | 조회 오류 규명(UI 구분 표시) | 배포 RPC의 계정/조인 키 해석(DB측) | `admin_member_credit` 계정 해석, essay-history 조인 키 수정 | 회원 상세·Credit | Codex(DB) | RPC 수정·배포 | 실계정에서 Credit·논술 기록 정상 표시 |
| 6 | Worker 장애 신호 | 집계 불가(muted) | 신호가 조회 계약에 없음 | Worker 상태 신호 RPC/엔드포인트 | 대시보드 조치 밴드 | Codex | 상태 신호 제공 | 조치 밴드에 실제 Worker 상태 |
| 7 | §12 품질 검수 데이터 계약 | 미구현(기존 `/ql` 보존) | WEB·APP 공통 계약 추가 | 대학별 성공률·유형별 오류·근거/감점/대안·수리 계산·재첨삭 개선 계약 | `/ql` 품질 콘솔 | Codex+Owner | 품질 데이터 계약 확장 | 품질 지표 실데이터 검수 |

## 4. 공통 의존성 (참고)
- MY **E/F/G**(대학별·학생 집계)와 관리자 **#3/#4**(Credit 세부·운영 레지스트리 대학별)는 **대학 단위 논술 집계**라는 공통 백엔드 의존성을 공유한다. 하나의 안전한 집계 RPC 설계로 양쪽을 함께 충족할 수 있으므로, Codex 백엔드 설계 시 통합 고려 권장.
- 공통 집계 규칙: 실패·중복 제외, 최초/재첨삭 구분(무료 재첨삭도 실제 작성 완료면 포함), 동일 답안 중복 저장 제외, 개인정보·답안 비노출·집계만, 표본 30명↑ 게이트, 순위/백분위/합격가능성 해석 금지, 기존 RLS 유지.

## 5. 상태
- MY PR [#3](https://github.com/LC3808/legendstudy-lab/pull/3) · 관리자 PR [#2](https://github.com/LC3808/legendstudy-lab/pull/2) — **둘 다 Open 유지.**
- main 병합 ✗ · Production 배포 ✗ · Production DB/Credit/Ledger 변경 ✗ · Codex 백엔드 파일 변경 ✗.
- 위 P1 항목은 Codex 백엔드 완료 + Owner 승인 후 착수.
