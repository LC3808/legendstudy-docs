<!--
DOCUMENT_STATUS: HISTORY / INVENTORY (READ-ONLY)
SCOPE: 논술 첨삭 서비스 가능 목록 (운영 DB 조회 기준)
COMPILED: 2026-10-24
DB_PROJECT: stlhijzpjfgwwdgunlsd (LegendStudy, production) — READ-ONLY SELECT, metadata only
-->

# 논술 첨삭 서비스 가능 목록 — 2026-10-24 (READ-ONLY 조사)

작성: Claude · 작성일: 2026-10-24

> **조사 방법·경계**: 운영 Supabase `stlhijzpjfgwwdgunlsd`에 **READ-ONLY SELECT**로 카탈로그·
> 정책 메타데이터만 조회했다(대학/시험/문항/자원/활성 플래그). **학생 답안 원문·개인정보·평가 본문·
> Secret은 조회하지 않았고**, Production DB·Credit·Ledger·History **변경 없음**. 일반 공개 판정의
> 최종 게이트인 `ESSAY_PUBLIC_EXAMS`는 **Cloudflare Pages 환경변수**(Owner 전용, 조회 안 함)이며,
> 공개 목록·E2E 결과는 **Codex 최종 인수인계서**(`essay-lab-claude-handoff-20261024.md`)를 1차 근거로
> 한다. 공개 Wiki 규칙(Secret·PII·답안 원문 금지) 준수.

## A. 요약 (DB 확인)
- 대상 11개 대학: **171 시험 / 512 문항** (DB 집계로 handoff와 일치).
- 전체 Registry: 237 시험 / 700 문항(중앙·연세·이화 등 비대상 포함) — 512와 혼동 금지.
- **일반 공개(첨삭 가능) 12문항** = Essay 11(시험단위, 9개 시험) + 건국 Math 1 (handoff). 정확한 공개
  exam UUID 목록은 Cloudflare `ESSAY_PUBLIC_EXAMS`에 있음(≤42, Owner env). **E2E 성공(9) ≠ 일반 공개(12).**
- 이 프로젝트 public 테이블의 `essay_evaluations`/`essay_attempts`/`essay_drafts` = **0행**. 즉 실측 E2E
  기록은 이 프로젝트 공개 테이블에 없음(handoff 기록/비공개 스키마/운영 Worker store에 존재) → §E·§G.

## B. 일반 공개 / E2E 목록 (handoff 1차 근거)
E2E 9 (최초/무료 재첨삭 결과 포함). Owner 요청 필드(1 대학·2 학년도·3 시험·4 계열/유형·5 문항·
6 PDF 열람·7 첨삭 가능·8 최초 E2E·9 무료 재첨삭 E2E·10 운영/Worker):

| 대학 | 학년도 | 시험 | 계열/유형 | 문항 | PDF열람 | 첨삭가능 | 최초 E2E | 무료 재첨삭 E2E |
|---|---|---|---|---|---|---|---|---|
| 건국대 | 2026 | admission | 인문 | 대표 | — | 공개 | 성공 | — |
| 건국대 | 2026 | — | 수리(Math leaf) | 1 | — | 공개 | 성공 | — |
| 숙명여대 | 2025 | mock | — | 대표 | 일부(DB 4문항 자원) | 공개 | 성공 | 성공 |
| 숙명여대 | 2026 | admission(수시) | — | 대표 | 일부 | 공개 | 성공 | 성공 |
| 서강대 | 2026 | mock | — | 대표 | — | 공개 | 성공 | — |
| 고려대 | 2025 | admission | 인문2 | 대표 | — | 공개 | 성공 | 성공 |
| 성균관대 | 2026 | admission | 언어(1교시) | Q1 | 있음(DB 자원) | 공개 | 성공 | 성공 |
| 서울여대 | 2026 | — | — | Q1 | — | 공개 | 성공 | 성공 |
| 숭실대 | 2026 | — | — | Q1 | — | 공개 | 성공 | 성공 |

- 서울여대 2026 **Q2**: 최초 평가만 성공, **무료 재첨삭 실패**(자료해석 비율 오독 미검출 → 독립 검수
  grounding fail로 게시 차단). 공개/E2E 완료로 보지 않음.
- 위 학년도/계열은 handoff 서술 기준의 요약이며, exam별 정확한 라벨은 DB `essay_exams.exam_name`
  로 확인 가능(원문 미복제). 공개 여부의 최종 확정은 Cloudflare allowlist 대조 필요(§G).

## C. 문제 PDF/자료 열람 가능 (DB `essay_exam_resources`, role='question' active)
| 대학 | 문제자원 보유 시험 | 문항 연결 | 내부 예시답안 자원(사용자 비노출) |
|---|---:|---:|---:|
| 성균관대 | 7 | 3 | 6 |
| 숙명여대 | 1 | 4 | 1 |
| 경희대 | 8 | 0(문항행 없음) | 8 |
| 그 외 8개 대학 | 0 | 0 | 0 |

- `example_answer`/`high_scoring_answer` 자원은 **대학 예시답안**으로, Owner 정책상 **사용자 화면에
  노출 금지**(내부 평가 근거로만). 위 "내부 예시답안 자원" 수치는 참고용이며 사용자에게 제공하지 않음.

## D. 512문항 상태 분류 (대학별, DB 기준)
분류: **첨삭 가능**(Cloudflare 공개 allowlist) / **문제 열람만**(활성 문제 자원 보유, 비공개) /
**자료 준비 중**(그 외, 489 NEEDS_REVIEW 포함).

| 대학 | 등록 문항 | 첨삭 가능(공개) | 문제 열람만(자원) | 자료 준비 중 |
|---|---:|---:|---:|---:|
| 가천대 | 166 | 0 | 0 | 166 |
| 건국대 | 58 | 공개분(인문 대표+Math 1) | 0 | 나머지 |
| 경희대 | 38 | 0 | (8시험 문제자원, 문항행 0) | 38 |
| 고려대 | 30 | 공개분(2025 인문 대표) | 0 | 나머지 |
| 동국대 | 48 | 0 | 0 | 48 |
| 서강대 | 28 | 공개분(2026 모의 대표) | 0 | 나머지 |
| 서울여대 | 23 | 공개분(2026 Q1) | 0 | 나머지(Q2 포함) |
| 성균관대 | 27 | 공개분(2026 언어 Q1) | 3 | 나머지 |
| 숙명여대 | 22 | 공개분(2025 모의·2026 수시 대표) | 4 | 나머지 |
| 숭실대 | 42 | 공개분(2026 Q1) | 0 | 나머지 |
| 한국항공대 | 30 | 0 | 0 | 30 |
| **합계** | **512** | **공개 12(essay 11+math 1)** | 성균3·숙명4(+경희 8시험) | 약 489 (NEEDS_REVIEW) |

- "공개분"의 **정확한 문항 단위 수**는 Cloudflare allowlist(exam 단위) ∩ 각 exam의 공개 문항으로
  확정된다. handoff 기준 총 12문항. 문항별 정확 목록은 allowlist 확인 후 확정(§G).

## E. 운영 정책 · Worker (handoff + DB)
- 공개 판정: `functions/api/essay/exam.ts`가 **env `ESSAY_PUBLIC_EXAMS`**(쉼표구분 exam UUID, ≤42)에
  `examId` 포함 여부로 `publicRelease` 결정(DB 플래그 아님). 프런트는 이 공개 API 판정을 따르며
  상태를 하드코딩하지 않는다.
- DB `essay_questions.is_published`는 전 문항 **false**, `essay_exams.is_active`는 공개와 불일치(한양·
  연세 등 비대상도 active) → 공개 게이트는 env allowlist가 유일 기준.
- Essay Worker `legendstudy-essay-reviewed`: version `c3fb54be…`, deployment 100% (handoff; Git SHA와
  별개 식별자). Worker/Registry/프로필 **변경 없음**.

## F. WEB 대학 카드·문항 선택 반영 규칙
- **공개(allowlist) 문항** → `[첨삭 시작하기]` 활성, 해당 대학/시험 **상단** 배치, 대학별 활성 문항 수 표시.
- **비공개 문항** → `[첨삭 서비스 준비 중]` 비활성, **하단** 배치.
- **문제 자원(PDF/문항) 보유** 시 → 문제 **열람 기능 유지**(비공개여도).
- 활성 상태는 **공개 API/allowlist 판정 결과**로 렌더(프런트 하드코딩 금지). 내부 예시답안·공식
  평가자료는 사용자에게 노출하지 않음.

## G. 한계 / 확인 필요 (GAP)
1. **정확한 공개 allowlist**: `ESSAY_PUBLIC_EXAMS`(Cloudflare 운영 env, Owner 전용) 미조회 → 공개 12의
   exam UUID·문항 단위 정확 목록은 Owner가 env 값으로 대조 확정 필요.
2. **E2E 실측**: 이 프로젝트 public 테이블 평가/시도 0행 → 최초·무료 재첨삭 실측 기록은 handoff
   서술/비공개 스키마(`essay_exam_private.runs` 등)/운영 Worker store 기준. 실측 재확인은 Owner/Codex.
3. 문항 단위 전수(512) 개별 행 목록은 본 문서에서 상태별 집계로 요약(실데이터만, 추정 수치 없음).

## 연결
- 1차 근거: Codex 최종 인수인계 `essay-lab-claude-handoff-20261024.md`(별도 저장소, 원문 미복제).
- [`90_HISTORY/REVIEWS/2026-10-24-essay-lab-development-retrospective.md`](REVIEWS/2026-10-24-essay-lab-development-retrospective.md)
- [`90_HISTORY/2026-10-23-my-admin-p1-backlog.md`](2026-10-23-my-admin-p1-backlog.md) · [`00_PROJECT/CURRENT_STATUS.md`](../00_PROJECT/CURRENT_STATUS.md)
