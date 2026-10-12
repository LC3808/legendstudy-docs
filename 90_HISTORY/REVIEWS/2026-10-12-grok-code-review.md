<!--
DOCUMENT_STATUS: HISTORICAL
SCOPE: PROJECT
LAST_VERIFIED: 2026-10-12
VERIFICATION_BASIS: Grok code review — legendstudy-lab issue #1 (reviewed codex/essay-full-service-implementation @ ad4ea678538009c698a39041b8be0d9d5c2348af) and legendstudy-app issue #9 (reviewed codex/essay-full-service-implementation @ 631eb65efe8a24f971aee3890226c6c26dd185d8); remote ref state re-verified read-only 2026-10-12
SUPERSEDES: —
SUPERSEDED_BY: —
-->

# Grok Code Review — LAB #1 / APP #9 (2026-10-12)

> **문서 성격:** 외부 코드 리뷰(Grok) 결과의 **기록**이다. 아래 "수정 필요" 항목은 **리뷰 제안**이며 **구현/검증 완료가 아니다.** 어떤 항목도 "현재 main에서 수정·검증 완료"로 읽어서는 안 된다.
> **이번 작업:** 위키 기록만. 코드 수정·배포·DB·Provider 활성화·결제·일반 공개 없음.

## 리뷰 대상 및 현재 Remote 상태 (2026-10-12 재확인)

| 대상 | 리뷰 이슈 | 리뷰 대상 브랜치 | 리뷰 SHA | 현재 `main` (remote, 2026-10-12 확인) | 통합 여부 |
|---|---|---|---|---|---|
| LAB (Next.js) | [legendstudy-lab #1](https://github.com/LC3808/legendstudy-lab/issues/1) | `codex/essay-full-service-implementation` | `ad4ea678538009c698a39041b8be0d9d5c2348af` | `8991b510d2c9702ecfb05315fe21363ab6df7012` | **미병합** — main이 리뷰 브랜치보다 뒤처짐 |
| APP (Flutter) | [legendstudy-app #9](https://github.com/LC3808/legendstudy-app/issues/9) | `codex/essay-full-service-implementation` | `631eb65efe8a24f971aee3890226c6c26dd185d8` | `d07671e985929ad1aa4ba2c811919cc592a37b34` | **미병합** — Essay 구현 코드가 APP main에 없음 |

- 리뷰 당시 LAB `main`은 `8991b510`로 리뷰 대상 브랜치보다 뒤처져 있었고, **2026-10-12 현재에도 `refs/heads/main`은 여전히 `8991b510`** 이다 (`git ls-remote` read-only 확인). 리뷰 대상 브랜치 tip은 리뷰 SHA `ad4ea67`와 동일하다.
- APP도 동일하게 Essay 구현 브랜치 tip이 리뷰 SHA `631eb65`와 일치하며, `main`은 `d07671e`로 **Essay 구현을 포함하지 않는다.**
- **따라서 문서/위키 PR을 병합해도 앱·웹 코드가 통합되지 않는다.** 스토어 빌드/배포 전에 "실제 통합 대상 브랜치와 그 브랜치에 포함된 코드"를 반드시 확인해야 한다.

---

## 1. LAB 리뷰 (issue #1)

### 유지할 설계 (리뷰가 긍정 평가 — 변경하지 말 것)
- Essay Worker는 Provider 미연결 시 **fail-closed** 동작을 유지한다.
- Credit 잔액은 클라이언트가 결정하지 않고 **서버 응답**을 기준으로 한다.
- 검증되지 않은 **2027 지원자 수·경쟁률**은 사용자 화면에 노출하지 않는다.
- **캠퍼스별 수치를 임의로 합산하지 않는다.**
- 일반 사용자 AI 첨삭 공개는 **HOLD** 유지.

### 수정이 필요한 항목 (리뷰 제안 — 미구현/미검증)
1. **정렬 기준 불일치** — 데이터 projection 스크립트는 **경쟁률** 기준 정렬, 실제 대학 정렬 로직·UI 문구는 **지원자 수** 기준. 정렬 기준·투영 데이터·버튼 문구를 일치시켜야 한다. **최종 기준 지표는 Owner 승인 사항** → 아래 [Owner 확인 필요 #1](#owner-확인-필요-항목).
2. **Owner Priority 22 중복 정의** — `catalog-policy.ts`와 `university-discovery.tsx`에 우선순위 목록이 각각 존재하며 **강남대 포함 여부가 서로 다름.** 단일 소스로 관리 필요. **대학 순서·강남대 결정은 Owner 확정 사항** → 아래 [Owner 확인 필요 #2](#owner-확인-필요-항목).
3. **Admission Context 전달 누락** — `admission.ts`가 `callEssayGateway` 호출 시 `ctx`를 전달하지 않음. `evaluate.ts`와 `gateway.ts`의 Context 처리 방식 차이 존재. Worker 환경에 따라 Provider 바인딩 확인 결과가 달라질 수 있어 **실제 코드 확인 + 회귀 테스트 필요** (엔지니어링 후속, 정책 아님).
4. **준비 중 대학 정렬 정책** — 기존 정렬 로직은 준비 중 대학을 **별도 후순위 그룹**으로 분리. **Owner 최신 결정 = 준비 중 대학도 동일 목록에 유지하고 해당 대학의 이용 동작만 비활성화.** 최신 Owner 결정 우선 — 과거 후순위-분리 로직이 코드에 남아 있으면 **충돌로 기록·수정 대상**. (이 Owner 결정은 이미 기존 위키·Daily의 "서비스 준비 중" 비활성 버튼 유지 패턴과 일치.)
5. **HTTP 오류 코드 매핑** — Worker `evaluate.ts`의 **402/422 응답 매핑 누락 가능성.** 실제 Provider 연결 전에 오류 계약·테스트 확인 필요 (엔지니어링 후속).

---

## 2. APP 리뷰 (issue #9)

### 유지할 설계 (리뷰가 긍정 평가 — 변경하지 말 것)
- `EssayLiveGateway`는 LAB의 **task ID를 재사용**한다.
- Credit 잔액은 **서버 응답** 기준.
- Provider 미연결 / 전형 미공개 / 충돌 / Credit 부족 / 잘못된 입력의 **응답 코드를 앱에서 구분**한다.
- 리뷰 대상 코드에서 **`service-role` 키가 확인되지 않음** (리뷰 결과 기록). *단, 이는 전체 코드베이스의 부재 증명이 아니라 해당 리뷰 SHA 범위의 관찰이다.*

### 수정 및 검증이 필요한 항목 (리뷰 제안 — 미구현/미검증)
1. **브랜치 분기** — 앱 `main`·스토어 릴리스 작업과 Essay 구현 브랜치가 분리됨(위 Remote 상태 표 참조). **문서 PR 병합만으로 앱 코드는 통합되지 않는다.** 스토어 빌드 전 통합 대상 브랜치·실제 포함 코드 확인 필수.
2. **LAB↔APP 카탈로그 정책 일치** — Owner Priority 22와 정렬 기준이 앱/웹에서 다르게 적용되지 않도록 **동일 정책 데이터 또는 동등한 검증된 정책 계약**을 사용해야 함 (LAB #1-1/#1-2와 연결).
3. **네이티브 첨삭 흐름** — 리뷰 대상 브랜치만으로 실제 네이티브 첨삭 UI가 **완성되었다고 간주하지 않는다.** `EssayLiveGateway`와 화면의 **실제 연결 상태를 구분**해 기록. 서비스 준비 중 대학은 **목록 유지 + 해당 액션만 비활성화.** **가짜 평가 결과 표시 금지.**
4. **보안 및 테스트** — `main`의 보안 관련 변경이 **통합 브랜치·스토어 빌드에 반영되었는지 확인** 필요. **실제 Flutter 테스트 결과가 없으면 통과로 기록하지 않는다.** 문서상 테스트와 해당 SHA에서 실제 수행한 테스트를 구분.

---

## Owner 확인 필요 항목

기존 위키 기록만으로 해결할 수 없어 **임의 결정하지 않고** Owner 확인을 요청하는 항목:

1. **대학 목록 최종 정렬 지표** — "경쟁률" vs "지원자 수" 중 사용자 화면·정렬 로직·projection·버튼 문구에 공통 적용할 **단일 기준.** (현 위키에 승인된 정렬 지표 결정 기록 없음 → 신규 Owner 결정 필요. 결정 전까지 LAB/APP 양쪽을 하나로 맞추는 코드 수정은 보류.)
2. **Owner Priority 22 단일 소스 + 강남대 포함 여부** — `catalog-policy.ts`와 `university-discovery.tsx`의 목록을 하나로 통합할 때 **강남대 포함/제외**가 어느 쪽이 Owner 확정인지 확인 필요. (양쪽 목록이 상이하므로 코드가 임의로 한쪽을 선택하지 않도록 함.)

## 서로 구분해서 다룰 개념 (하나의 정렬 규칙으로 뭉뚱그리지 말 것)
- 대학 목록의 **기본 노출 순서**
- **지원자 수 / 경쟁률** 기준 정렬 지표
- 준비 중 대학의 **목록 내 위치** (→ Owner 결정: 동일 목록 유지)
- 준비 중 대학의 **비활성화 상태** (→ 액션만 비활성)
- 실제 이용 가능한 **첨삭 기능 상태** (→ GATED / HOLD, 가짜 결과 금지)

## 연결 문서
- 제품 원칙: [`00_PROJECT/ESSAY_FIRST_UX_OWNER_POLICY_2026-10-11.md`](../../00_PROJECT/ESSAY_FIRST_UX_OWNER_POLICY_2026-10-11.md)
- 현재 상태 요약: [`00_PROJECT/CURRENT_STATUS.md`](../../00_PROJECT/CURRENT_STATUS.md)
- 당일 로그: [`90_HISTORY/DAILY/2026-10-12.md`](../DAILY/2026-10-12.md)
