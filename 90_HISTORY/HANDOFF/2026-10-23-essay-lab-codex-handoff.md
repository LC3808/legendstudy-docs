## 최신 보충 — 고려 대표 운영 E2E 완료

고려 Owner SQL 적용/전체사후검증 및 WEB 최초·무료재첨삭→Native History/결과/비교 PASS. 운영6문항, 공개건국2·423/89 유지. 고려 성공 run을 재호출하지 않는다. 다음은 표시메타데이터 잔여, 서강 calibration, 미검증 대학 근거연결/E2E. [실행증거 및 비용4회/USD0.292664](../REVIEWS/2026-10-23-korea-operating-owner-sql.md). 아래 기존 인수인계의 고려 미적용/E2E대기 상태는 이 보충으로 대체한다.

# 논술 LAB 첨삭 백엔드 Codex 인수인계 — 2026-10-23

## 0. 새 대화의 첫 판단

**작업 재시작 금지. 현재 전체 판정 PARTIAL.** 대화 모델 용량 오류 때문에 문맥을 이전한다. 새로운 기능/엔진 개발이 아니라 기존 11개 대학의 기본 프로필·문항 공식 근거·기존 Worker 연결을 마무리한다. 이 문서는 인수인계 작성 시점의 로컬 상태를 확인한 기록이다. Production은 아래 마지막 검증 시점의 상태이며 이번 문서 작성에서 재조회·변경하지 않았다.

- 기존 기본 진단체계 **28개** 검수 유지. 이것은 512문항의 정답 평가 준비 완료가 아니다.
- 과거 **387/512 상속·미상속125**를 보존하면서 **36개 추가 → 현재423/512 상속·미상속89**.
- 기존 운영 E2E **5문항**(건국 인문/수리2, 숙명2, 서강1) 보존. 일반 공개는 **건국2**만. 신규 숙명/서강3은 관리자 검수 범위다.
- 공식답안 품질 원장 **57회**, 사용량 추산 **US$4.691360**, 실청구액 미확인. 이번 후속 보완 구간16회·US$1.312576. 다른 과거 운영 호출까지 합친 프로젝트 총비용이 아니다.
- 고려 의미 과잉 해석/재작성 내용-표현 혼동: 실제 해설 전달 + 격리 v12로 두 실패 사례 평가·독립 검수 PASS. 운영 미적용.
- 서강2023모의 인문 공식5기준 신규 입력/격리 품질 PASS. 공식 예시답안 수준 calibration·운영 E2E는 별개다.
- 최근 보완에서 **Production 쓰기/배포/Credit 거래0**. 코드 변경은 격리 프롬프트 v12 파일 추가뿐, 운영 allowlist에 추가하지 않았다.
- 경희·동국 추가 자료 보강 HOLD. 결제·Credit·MY UI 파일은 결제 Codex 담당으로 수정 금지.

**지금 첫 실행:** 아래 경로/브랜치가 일치하는지 확인 → 미상속89 및 QUALITY/POLICY 실패 명세를 읽음 → 정상 문항의 공식 근거 연결/기존 조립기 검증을 계속한다. 이미 통과한 운영 E2E나 512문항 원본 조사를 처음부터 반복하지 않는다. 현재 Owner 입력/로그인 대기나 실행 중 Provider 프로세스는 없다.

## 1. 실제 작업 폴더·브랜치·HEAD

|용도|절대 경로|브랜치|확인한 HEAD|
|---|---|---|---|
|APP/평가 백엔드|`/Users/woojinchang/development/legendstudy-service-app-20261022`|`codex/material-service-app-20261022`|`f98372784ac40e271e81bd094f058ef0cceff209`|
|Unified Wiki|`/Users/woojinchang/development/legendstudy-service-docs-20261022`|`codex/material-service-docs-20261022`|문서 작성 직전 `f5bc42d00c2ee9bd20dc1ccd72c947997cf34f39`; 본 문서 추가 커밋은 이 후속|
|LAB WEB|`/Users/woojinchang/development/legendstudy-material-ui-release-20261022`|`codex/material-browse-release-20261022`|`ad6ffec28b7ae17d385f3917630cf4da420713a2`|

APP/Wiki 위 사전 HEAD는 직전 작업에서 Push·원격 SHA 일치 확인했다. 본 문서 커밋의 SHA는 문서 자체에 재귀적으로 고정하지 않으며 `git rev-parse HEAD` 및 `git ls-remote origin refs/heads/codex/material-service-docs-20261022`로 확인한다. main에 병합하지 않았다.

대화의 기본 cwd `/Users/woojinchang/.codex/worktrees/7fd0/레전드스터디 앱`는 활성 작업 checkout이 아니다. 명령마다 위 실제 workdir를 명시한다. checkout/reset/stash/clean으로 타 작업을 덮어쓰지 않는다.

## 2. 미커밋 변경사항과 동시 작업 경계

인수인계 시작 시 DOCS/LAB clean. APP 상태:

```text
 M .gitignore
?? .fvmrc
?? .wrangler/
?? supabase/.temp/
?? tool/__pycache__/
?? tool/cloudflare_essay/__pycache__/
?? tool/essay_lab/__pycache__/
```

`.gitignore` 차이는 기존 `# FVM Version Cache` / `.fvm/` 추가(마지막 newline 없음). 이번 평가 작업 이전부터 있던 변경이다. 나머지도 로컬 환경/캐시이며 소유권·필요성 확인 없이 커밋/삭제하지 않는다. `.wrangler`/Supabase 임시 폴더에는 인증 정보가 있을 수 있으므로 내용 일괄 출력 금지. 최신 프로필 JSON·원본·Provider 응답은 아래 비공개 자료 폴더에서 관리되므로 `git status`에 나오지 않는다.

확인된 다른 worktree(읽기 전용 목록만 확인; 수정 금지):

- `/Users/woojinchang/development/legendstudy-payment-recovery-20261023`, `codex/payment-credit-recovery-20261023`, 목록상 `c603059`.
- `/Users/woojinchang/development/legendstudy-iap-fix`, `codex/iap-credit-production-recovery-20261023`, 목록상 `1f65ca7`.
- 주 APP checkout은 Claude 브랜치. 그곳으로 이동해 작업하지 않는다.

충돌 가능: `.gitignore`/FVM, 빌드·서명·환경설정, 공통 Wiki current-status, Credit/Payment/IAP/MY 코드·SQL. 첨삭 담당은 `tool/essay_lab/`의 평가 프로필/입력/프롬프트와 해당 문서에 집중한다. 기존 재첨삭 snapshot 후보 SQL은 Credit 계약과 접점이 있으므로 적용 전 결제 담당 변경과 diff 대조가 필요하다. 실제 결제 재시도/가격·IAP·Ledger 구조 변경 금지. 비공개 결제키 파일이나 인증 원문을 열어 출력하지 않는다.

## 3. Authority와 읽기 순서

1. APP `AGENTS.md` → `wiki/index.md` → `wiki/current-status.md` → 작업별 Wiki → 실제 코드/Git/DB 상태.
2. Unified `00_PROJECT/AI_CONTEXT.md`, `CURRENT_STATUS.md`, `SOURCE_OF_TRUTH.md`, `LEGENDSTUDY_LAB_PRODUCT_NORTH_STAR.md`.
3. 이 문서 및 아래 최신 리뷰. Owner 최신 지시와 검증된 실제 상태가 오래된 기록보다 우선한다.

Unified 문서(이 문서 위치 기준 상대 링크):

- [최신 품질·423상속 후속 기록](../REVIEWS/2026-10-23-official-answer-quality.md#2026-10-23-후속-보완--현재-판정-partial)
- [기존 대표3 운영 E2E](../REVIEWS/2026-10-23-university-profile-production-e2e.md)
- [기본체계 PHASE2 이전 검수](../REVIEWS/2026-10-23-university-evaluation-profile-phase2.md)
- [3계층 평가 전략 및 확대 로드맵](../REVIEWS/2026-10-23-university-evaluation-profile-strategy.md)
- [PHASE1 기존 엔진 분석](../REVIEWS/2026-10-23-university-evaluation-profile-phase1.md)
- [기존 건국 인문·수리 운영 연결](../REVIEWS/2026-10-22-phase3-service-connection.md)

**알려진 문서 시차:** AI_CONTEXT의 상단에는 아직41회/v11실패 및387/125 과거 체크포인트가 남아 있다. CURRENT_STATUS 최신 절과 품질 리뷰 후속 절의 **57회·423/89·v12격리PASS**가 이를 갱신한다. SOURCE_OF_TRUTH의 옛 OFF/NOT_STARTED, Math JWT 10월16일 만료 등의 역사적 문구를 최신 운영 상태로 오인하지 않는다. 이번 인수인계는 문서1개만 추가하며 다른 Authority 문서를 일괄 재작성하지 않는다.

제품 원칙: 공통 UX·대학별 평가·문항별 근거. 문항 공식 기준 > 학년도/시험 공식 예외 > 대학 기본체계 > 공통 계약. 공식 기준과 내부 진단 가이드 분리. 대학별 엔진/UI/DB를 새로 만들지 않는다. 누적 확대11→22→30→35+는 현재11 검증 후 진행한다.

## 4. 11개 대학 현황

아래 ‘기본체계 검수’는 BASE_DIAGNOSTIC_FRAMEWORK 수준이다. 프로필 상속은 정답/해설 검수·Worker 조립·실제 서비스와 구분한다.

|대학|기본체계 수|문항|과거 상속|현재 상속|미상속|현재 확인된 완전 입력/운영 범위|
|---|---:|---:|---:|---:|---:|---|
|가천대|2|166|166|166|0|대표 운영 E2E 미완료; 특수유형 계약 확인 필요|
|건국대|3|58|29|41|17|기존 인문·수리2 운영 E2E/공개 보존|
|경희대|4|38|29|29|9|대표 운영 E2E 미완료|
|고려대|2|30|30|30|0|2025수시 인문2 로컬 공식 입력/품질 검증; 운영0|
|동국대|2|48|24|24|24|대표 운영 E2E 미완료|
|서강대|3|28|9|19|9|기존2026모의 경제경영1 운영, 신규2023모의 인문1 로컬|
|성균관대|2|27|15|15|12|대표 운영 E2E 미완료; PDF 공개 권리 HOLD 별도|
|숙명여대|2|22|22|22|0|기존 인문2 운영 E2E; 관리자 검수 범위|
|숭실대|3|42|40|40|2|대표 운영 E2E 미완료|
|서울여대|2|23|5|17|6|자연 과학/수리 구분 검수 필요|
|한국항공대|3|30|18|20|10|이학 혼합 유형 등 경로/범위 확인 필요|
|합계|28|512|387|423|89|운영5 + 추가 로컬 고려1/서강1을 구분|

문항별 공식자료의 부분 페이지 연결을 완전 근거 검수 수로 계산하지 않았다. 기존 `question-readiness-512.json`의 evidence_count/verified_criteria_count=0은 옛 DB snapshot 필드로 현재 완전 검수 수가 아니다. 문제 PDF 연결512도 정답·채점기준 검수512가 아니다. 현재 확인한 완전 입력 근거는 기존 운영5 + 로컬2이며 다른 문항의 미검증을 임의 PASS/자료없음으로 처리하지 않는다.

## 5. 28개 프로필·학년도/유형

비공개 `university-profiles-20261023/profiles/<university>/<type>/vN.json`의 최신 numeric version을 사용한다. 운영에 pin된 예전 버전은 덮어쓰지 않는다. 30후보 중 동국 humanities-II와 숙명 pharmacy는 기존 alias로 보존, canonical28이다.

다음 years는 프로필 요약이다. **실제 허용은 inheritance_scopes의 year+kind+track 및 문항별 scope**로 결정한다. 이 표의 연도만으로 모든 수시/모의/계열을 허용하지 않는다.

|대학|유형|최신 로컬 버전|표기 학년도|
|---|---|---:|---|
|dongguk|humanities-I|v5|2025, 2026, 2027|
|dongguk|math|v4|2025, 2026|
|gachon|language-short|v5|2024, 2025, 2026, 2027|
|gachon|math-short|v4|2024, 2025, 2026, 2027|
|kau|engineering|v6|2024, 2025, 2026|
|kau|science|v6|2024, 2025, 2026|
|kau|social|v6|2022, 2024, 2025, 2026|
|konkuk|business-integrated|v3|2024, 2025|
|konkuk|humanities|v7|2024, 2025, 2026|
|konkuk|math|v6|2024, 2025, 2026|
|korea|humanities|v5|2025, 2026|
|korea|math|v5|2025, 2026|
|kyunghee|humanities|v7|2026, 2027|
|kyunghee|math|v5|2026, 2027|
|kyunghee|medical|v3|2026, 2027|
|kyunghee|social|v4|2026|
|skku|language|v5|2026|
|skku|math|v3|2026|
|sogang|business|v4|2023, 2024, 2025, 2026|
|sogang|humanities|v6|2023, 2024, 2025, 2026, 2027|
|sogang|math|v4|2026|
|sookmyung|humanities|v6|2025, 2026, 2027|
|sookmyung|math|v4|2026, 2027|
|soongsil|business|v5|2024, 2025, 2026, 2027|
|soongsil|humanities|v6|2024, 2025, 2026, 2027|
|soongsil|math|v3|2024, 2025, 2026, 2027|
|swu|humanities|v6|2023, 2024, 2025, 2026|
|swu|natural|v5|2026|

이번 추가36의 공식 범위: 서울여대2023~2025수시 인문12; 서강2023~2025모의 인문5·경제경영5; 한국항공2022수시 사회2; 건국2024~2025모의 자연8·인문사회Ⅰ4. 원본 페이지를 대조했고 내용 고유 기준/점수 환산은 대학 공통 기준에 넣지 않았다. 서강 수리의 주제별 개념 설명만으로 범위를 확대하려던 임시 자체 후보는 철회했고 기존v4를 보존했다.

## 6. 387/125 → 423/89 및 비공개 자료 위치

비공개 루트:
`/Users/woojinchang/development/legendstudy-materials/essay-validation-2026-10/`

원본 루트:
`/Users/woojinchang/development/legendstudy-materials/essay-2026-10/`

파일명 다수가 Unicode NFD다. 임의로 정규화한 경로를 만들지 말고 기존 manifest의 경로를 사용한다. 동국대 학년도 분류는 Owner 지시상 파일명을 우선하되 모호한 자료는 별도 기록한다.

|위치(비공개 루트 기준)|용도|
|---|---|
|`university-profiles-20261023/question-readiness-512.json`|기존512 Registry·문항 ID·공식자료 후보 참조|
|`university-profiles-20261023/final-completion/base-inheritance-512.json`|과거387 기준, 덮어쓰기 금지|
|`university-profiles-20261023/final-completion/scope-failures-125.json/md`|과거125=참조누락78+범위47 보완 이력|
|`university-profiles-20261023/reference-recovery-20261023/base-inheritance-512.json`|현재423/89 전수 결과|
|동 폴더 `base-profile-final-catalog.json`, `base-profile-summary.json`|현재28버전/해시/대학별 집계|
|동 폴더 `recovered-question-references.json`, `recovered-sources.json`|과거125의 문제 파일 위치 복구·74개 기존 원본/파생파일 참조. 정답 검수와 다름|
|동 폴더 `remaining-89.md/json`|현재 미상속별 대학/연도/계열/qid/exam/source/원인/수정방법|
|동 폴더 `remaining-101.*`|직전 중간 체크포인트, 현재 잔여로 사용 금지|
|동 폴더 `production-question-identity.json`|읽기 전용 Production700개 identity 조회 중 기존512 대조 일치 근거; 답안 없음|
|동 폴더 `swu-humanities-additional-12.json`, `sogang-additional-10.json`, `kau-social-additional-2.json`, `konkuk-additional-12.json`|추가36 연결 근거|
|APP `wiki/profile-reference-recovery-20261023.json`|Git에 올린 비민감 profile digest/version + 추가36 question IDs|

현재89: 평가자료 경계/범위 미검수79, 한국항공 이학 혼합유형4, 서울여대 자연 과학/수리 경로6. 문제 파일 위치는125 모두 찾았지만 공식 해설·채점표의 정확한 위치/적용범위 확인은 별개다. 이미 정상인423을 다시 독립 프로필로 제작하지 않는다.

## 7. 기존 코드·입력 자동 조립

APP 기존 파일:
- `tool/essay_lab/university_profile.py`: validation/digest/profile selection/inheritance/composition.
- `tool/essay_lab/material_runtime.py`: 문항 검수 자료→기존 평가 입력.
- `tool/essay_lab/reviewed_runtime.py`: 승인된 runtime binding 선택.
- `tool/essay_lab/prompts/scaffolding-1.3-v7.txt`: 기존 운영 prompt 보존.
- `...v10.txt`: 기존 명시 runtime 지원 후보, 현재 운영으로 자동 전환된 것이 아님.
- `...v9.txt`, `...v11.txt`, `...v12.txt`: 격리 실험 기록. v12 운영 allowlist 미등록.

이번에 발견한 **INPUT-01**: material_runtime의 역할 매핑은 question/shared_passage/intent/criteria/scoring만 기존4개 근거 종류로 전달한다. private compiler가 넣은 `explanation`은 조용히 제외됐다. 최초 Korea evidence-v2 및 Sogang2023 초안의 해설 보완 효과를 주장하지 않는다.

정정: private Korea v3/Sogang2023 v2 compiler는 기존 intent 운반 경로에 ‘공식 문항 해설(별도 채점 항목 아님)’을 명시하고 실제 frozen 입력 포함/제외 역할0을 assert. 새 RPC/enum/Worker/평가요소를 만들지 않았다. 추후 새 입력도 파일 존재만으로 조립 PASS하지 말고 최종 전송 내용과 원본 해시/페이지를 대조한다. 이 수정은 기존 운영5의 입력을 변경하지 않았다.

비공개 품질 폴더의 실행/준비 스크립트:
- `compile_korea.py`, `prepare_korea_forwarded_fix.py` → `korea-evidence-v3-compiled.private.json`.
- `compile_sogang_2023_v2.py` → reference-recovery 폴더의 `sogang-2023-human-v2-compiled.private.json`.
- `extend_swu_humanities.py`, `extend_sogang_scopes.py`, `extend_konkuk_mock_scopes.py`, `audit_recovered_inheritance.py`.
- KAU추가2는 당시 inline검수 결과와 profile v6/추가2 manifest가 근거. 임의로 전체스크립트를 다시 돌려 덮어쓰지 않는다.
- `prepare_korea_forwarded_fix.py`의 마지막 출력 metadata에는 v2 문구가 남을 수 있다. 실제 JSON package는v3이며 콘솔표시만으로 버전판정 금지.

## 8. 공식 예시답안 품질 검증/비용

비공개 `official-answer-quality-20261023/`:
`provider-ledger.json`, `quality-checkpoint.json`, `quality-failure-spec.md/json`, 각 case `*-provider-input.json`, `*-evaluation-output.json`, `*-review-output.json`, `*-result.json`, 원본페이지PNG/text.

- 누적57=평가29+별도 독립 검수28. 미확정 호출0. 사용량 추산USD4.691360; cache-write 보수USD5.240475. 실청구 미확인.
- 이전41/3.378784에서16회/1.312576 추가. 과거 다른 Provider 원장과 합산·중복하지 않는다.
- gpt-5.6-sol, Standard, max_output_tokens12000, timeout75초, store=false, tools없음. 기록 당시 input4/output20 USD/1M. 실제 재개 전 가격/모델 확인 필요 시 공식 문서 사용.
- `run_cases.py`는 sys.argv case명, 완료 checkpoint재사용, flock `provider-run.lock`, 요청 전 원장예약, 오류 자동 무조건 재시도 금지. `--help`처럼 임의 인자를 실행하지 말고 코드를 읽는다.
- 키는 macOS Keychain service `legendstudy-openai-test`에서 기존 스크립트가 subprocess capture로 메모리에만 읽는다. `security ... -w`를 터미널에 직접 출력하는 명령 금지. 키/토큰/서명키를 채팅·Git·Wiki에 저장하지 않는다.
- 공식 예시답안은 블라인드 평가의 학생 입력으로 쓰고, 정답을 평가 근거에 함께 넣어 자기대조 점수를 유도하지 않았다. 실제 학생 개인정보/기존 학생답안 미사용.
- 독립 검수는 같은 모델의 별도 호출이다. 사람 검수/다른 모델 계열 검증이라고 보고하지 않는다.

### 고려대 P0

2025수시 인문2: exam `942c1c43-914f-5b99-9a30-e6474c363f6f`, question `c1f90870-3ad9-59f8-afe3-c26d665f292f`.
원본SHA `63618dd23541a0e13e6933e8757725339f6d461843a8d6d5f659f1a53b2a9dc4`; 물리94~103, 공식해설100, 예시102~103.

- 공식 반대 E의 ‘도덕적이지 못하다’를 학생이 도덕적으로 그르다고 주장한 것으로 과잉 해석했다. v9/v10 일시PASS 이후 v11재발.
- C 피드백 반영 합성 재작성 D: 원래 명제를 가능성으로 약화했는데 v10이 완전 충족으로 간주. v11은 그 내용 차이를 ‘입장 불명확’으로 잘못 진단하는 회귀.
- 실제 해설 전달 v3 + promptv12: 명시된 입장은 인정하고 명제 강도/범위 부족을 내용 문제로 설명. **`korea-D-evidence-v3-prompt12`와 `korea-E-evidence-v3-prompt12` 모두 계약+8검수 PASS**.
- 유료 품질 장기 안정성/운영 E2E PASS는 아님. v12 배포·정책연결·공개0. 정상 A/B/C 등 재호출하지 않는다.

### 서강대 P0

기존2026모의 경제경영: exam `1862463a-bf97-580a-ad33-694375db5d50`, question `496c3692-43cc-552a-887f-812ca5f17774`.
공식 A 내부 ordinal[4,3,4,2], 실제 피드백 반영 D[5,5,5,4]. 공식 intent가 요구하는 적극적 인과 적용과 예시 자체의 서술 간극이 지적됐다. evaluator/reviewer PASS만으로 calibration완료/공식만점이라고 하지 않는다. `sogang-official-page8.png` 및 A/D 응답 재사용.

신규2023모의 인문1: exam `409f730d-ea3d-5027-aeda-97ae48af3dc3`, question `b93c0489-fc01-5c8f-b80a-27bbc4acc883`.
원본SHA `412b3b522d460874cb42e88fb37a8f6e16df1124738104dcfdb1f11302168ade`, 물리3~5본문/6해설/7기준·예시. 최신humanitiesv6 + 공식5기준 분리 + 해설 실제전달. **`sogang-2023-human-official-v2` 계약·8검수PASS**, 내부ordinal[4,3,3,3,3]. 제시문 역할·인과 범위·인물태도/결과 구분 근거를 검토했다. 공식점수/합격판정 아님. 운영E2E0.

### 숙명여대 기존 품질

2025모의1-1 공식 A/B누락/C오류/E합성대안 v7PASS. 실제 C피드백 반영 D는 문장 관측 누락→v10에서 이전내용 문제2해결·실제 경미표현 문제1관측으로 PASS. 기존2026수시 성공 보존. 재실행하지 않는다.

## 9. 보존할 실제 운영 E2E

|대상|식별자·흐름|검증/공개|
|---|---|---|
|건국2026수시 인문2|exam `1033e20b-9a20-5622-a67b-c288ace2734f`, q `1f980d57-683e-5d49-b2ed-4bbb554b967b`|실제 최초/재첨삭/History/Credit1/0·WEB/APP, 일반공개|
|건국2026수시 자연1(17점)|기존 Math physical leaf/profile binding 사용; 정확ID는 기존 activation 기록에서 재사용, 신규생성금지|이미지판독·학생확인·평가·재첨삭·History·1/0·교차조회, 일반공개|
|숙명2025모의 인문1-1|exam `a6667288-75ad-50d4-b237-d2a08e2bff8b`, q `1dab31d8-ea73-513f-80c3-9f871f079e2b`; APP최초/재첨삭→WEB|초기 `c2c83ea6-6ca7-4131-98a8-a9e362b7bd52`, 재첨삭 `fc247e8f-664f-47dc-b50b-4cd051cd5087`|
|숙명2026수시 인문1|exam `62dab8a7-9fe6-5ab3-aaa1-7db5cfd870aa`, q `12fb6834-6aeb-5436-a96e-add996fc9140`; WEB→APP|초기 `51487646-b493-4796-8d74-c2133e2647d7`, 재첨삭 `7a61b8d8-14c8-4bbe-bec5-af6c847ce3ec`|
|서강2026모의 경제경영|exam/q 위 표 참조; WEB→APP|초기 `d94e4aa1-7ac9-4a96-94aa-6af9fb36f04c`, 재첨삭 `0cd2aef9-00dd-4f6e-a905-50c78a9dfc05`|

신규3운영은 관리자검수 계정·iOS Simulator 범위. 각최초1/재첨삭0, 실패3추가차감0, 마지막잔액97(현재잔액을 이번에 재조회한 것은 아님). 새 코드를 Android/iPhone에 설치한 검증은 별도 미완료. 한양2024수시 인문오후2 문항1의 2026-10-14 Production 성공은 기존 재사용 근거로 보존하며 위11대학5에 추가하지 않는다. iPhone12ProMax의 과거 자료/PDF OwnerPASS를 신규평가코드 실기기PASS로 확대하지 않는다.

## 10. Production·Worker·Registry·DB

- Supabase **`stlhijzpjfgwwdgunlsd`**만 LegendStudy. Muselry와 혼용 금지.
- WEB `https://lab.legendstudy.com`; LAB source `ad6ffec28b7ae17d385f3917630cf4da420713a2`.
- 마지막 검증 Pages deployment **`17244d3b-4be3-4eda-8814-432582c86e9e`**.
- Essay Worker `legendstudy-essay-reviewed`, version **`6b7593a4-5c0c-4b0f-9f37-f812f6a51a3d`**.
- Cloudflare account `b9d221b20fdf8b9a9a8df0971a6b2347`; 기존 배포stage `/private/tmp/legendstudy-profile-worker-20261023`. 임시폴더 존재/빌드내용을 확인하지 않고 재배포 금지.
- 기존 Registry79시험, runtime policy **`university-profile-reviewed-20261023-v1`**, 운영promptv7/gpt-5.6-sol. Registry79와 이번전체512문항목록은 서로다른범위.
- 공개Essay exam은 건국 인문 해당1개, Math는 해당leaf한정. 신규3검수문항을 일반공개로 간주하지 않는다.
- Migration71701 적용완료·재검증/재적용불필요. **71702 미적용, 이번에 포함하지 않는다.**
- Math dedicated roles `math_extraction_worker`, `math_evaluation_worker`; 기존서명키로갱신된 마지막보고 만료 **2026-10-30 00:30 KST**. 날짜경과/실인증실패 시 기존안전갱신절차확인. 키생성/회전/권한우회금지.
- 최근후속작업에서 Production identity700읽기중기존512일치확인. 프로필/PDF/시험문항/DB신규쓰기없음. 최근후속에서는 RLS전수재조회하지 않았고 기존검증을보존했다.
- 기존숙명해설2비공개원본보완, 검수package/policy, WorkerRegistry연결은 앞선운영E2E때완료한작업. 재업로드/재등록금지.

## 11. 실패 명세·복구

|코드|현재 상태|다음 최소 조치|
|---|---|---|
|QUALITY-01 숙명 문장관측|v10격리PASS, 운영v7보존|정상사례반복금지, 운영전환시영향회귀|
|QUALITY-02/04 고려|v12두사례격리PASS|실제운영전환과무료재첨삭보호확인전전체공개금지|
|QUALITY-03 서강 수준|PARTIAL|공식intent/예시/개별기준간간극확인; 점수임의상향금지|
|INPUT-01 해설미전달|privatecompiler두입력정정PASS|새입력의최종frozen근거존재검사|
|POLICY-01 정책전환|격리Postgres PASS, 운영미적용|부모snapshot·14일무료권리·폐기binding·소유권검증보존|
|미상속89|원본위치/수정방법기록|common범위와question근거분리해정상유형부터보완|

POLICY-01: Production submit은현재runtime_policy, reserve는부모snapshot을검사한다. 정책만교체하면 **FROZEN_QUESTION_SET**으로무료재첨삭거부위험. 기존 `supabase/candidates/essay_exam_unit/api.sql`에 현재package동일·부모binding여전히승인된경우만부모정책유지하는후보가있다. 격리Postgres소유권/폐기정책/package변경거부·무료0·continuous검증완료. **Production미적용**. 결제담당과공통transaction변경충돌확인전무조건적용금지.

복구자료:
- 비공개 `profile-service-20261023/policy-rollback.sql`, `sook2025-policy-rollback.sql`, `production-invariants.json`, `rewrite-failure-spec.md`.
- APP `supabase/candidates/math_konkuk_public_release/rollback.sql`는기존Math공개복구용이지이번프로필변경에일괄실행할파일이아니다.
- 최근후속에는운영변경없으므로운영rollback불필요. 로컬후보문제는운영pin을그대로두고기존버전참조; 새버전/실패증거삭제금지.
- 추후배포회귀시정확한직전Worker/Pages와문항한정policy만복구. 답안/결과/History/Ledger삭제금지. 같은시험다른문항검수기록덮어쓰기금지.
- 기존백업·격리restore결과재사용. Vault/cron최신복구범위는해당기록으로확인하고문서만으로전체복구PASS추정금지. 새schema/불필요Migration으로우회금지.

## 12. 남은 작업의 정확한 우선순위

1. **현재423/89와운영pin보존확인.** 이문서경로/HEAD대조,private결과존재확인. 이전387/125스크립트로현재출력덮어쓰기금지.
2. **문항공식근거연결의실행가능범위확대.** remaining-89의기존원본/경계후보를재사용하고동일대학/유형공통원인을우선처리. 이미상속된423도공식정답검수완료와구분. 학년도·수시/모의·계열정확일치만상속. 신규22대학/경희동국추가자료수집으로확대금지.
3. **서강예시수준 calibration 마무리.** 기존2026경제경영A/D와2023인문v2공식기준/응답재사용. 요구되지않은내용을강요하는지,공식답안의실제누락인지대조. 오류확인시해당profile/evidence만수정. 공식예시라는이유만으로만점강제금지.
4. **기존조립기전송검증.** 공식자료역할·페이지·criterion IDs·최종frozen입력검사. 같은입력은동일digest. 새로운Math문항은기존set/subquestion/profile물리연결필요;문항프로필상속만으로Math실행가능PASS금지.
5. **필요한대표품질검증만실행.** 고려E/D PASS/숙명정상사례무의미재호출금지. 새유형대표공식예시·부분/오답·실제피드백반영재작성. 호출/비용기록,불확실checkpoint먼저조회.
6. **운영연결전에POLICY-01검증후보와결제담당변경대조.** 기존최초결과·14일무료권리보존. 정확한변경/diff/복구경로기록. 기존통합Owner승인범위에서만진행하고키회전/결제시스템변경으로확대금지.
7. **검증된문항만실제WEB/APP평가·재첨삭·History·Credit1/0·교차조회.** 기존5성공은재사용. 운영E2E없이일반공개확대금지. Android/iPhone/Simulator결과를구분.
8. **11대학현황갱신·Wiki·Commit/Push/remote확인.** PROFILE_READY/MAPPED/QUESTION_EVIDENCE_READY/EVALUATION_READY/E2E_PASS/일반공개를분리. 전체검증전전체완료선언금지.

현재Owner조작/계정입력대기없음. 추가입력이정말필요할때만정확한화면·이유를요청한다. 새대화는과거Simulator붙여넣기질문을다시요청하지않는다.

## 13. 재현 명령·테스트

문서작성직전최종검사: 관련44 PASS, Wiki handoff PASS, current-status10619bytes. 기존전체Flutter/WEB빌드는영향없는범위에서반복하지않았다.

```bash
cd /Users/woojinchang/development/legendstudy-service-app-20261022
git status --short
git branch --show-current
git rev-parse HEAD
PYTHONPATH=tool:. python3 -m unittest tool.test_university_profile tool.test_material_runtime tool.test_essay_reviewed_runtime tool.test_material_worker_read
python3 tool/check_wiki_handoff.py
```

PDF검수용기존Python:
`/Users/woojinchang/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3`
(pypdfium2설치). 시스템python3에는pypdfium2없어초기audit실행실패했으며위runtime으로정상423/89검증했다.

현재profile감사는private `official-answer-quality-20261023/audit_recovered_inheritance.py`; 원본387출력대신reference-recovery출력사용. 변경이없으면재실행불필요. private스크립트실행전에파일내용/출력경로확인;과거전체처리스크립트는/tmp의존/옛결과덮어쓰기위험이있다.

## 14. 인수인계 작성 범위

이번요청에서는이문서만생성·Commit·Push한다. APP/LAB코드,DB,Provider,Worker,배포,비공개자료를수정하지않는다. 인수인계직전APP f983727/Wiki f5bc42d는이미Push완료. 후속문서커밋과원격SHA를확인하고Owner에게문서링크를전달한다.

새대화시작문구: “이인수인계서와현재Git상태를확인하고, 기존28프로필/423상속/운영5성공을보존한채 미완료공식근거·서강calibration·운영연결부터이어가라. 기존작업을처음부터반복하지말라.”
