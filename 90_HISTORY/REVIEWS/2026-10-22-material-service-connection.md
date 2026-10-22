# 2026-10-22 자료 사용자 조회 연결 — PARTIAL

## 실제 확인 / 공통 원인

Production read-only SQL: 전체 208시험/656문항. essay_browse_catalog(text) 미존재. 656문항 모두 is_published=false. anon 역할 트랜잭션 조회는 21시험/0문항. Source Registry 공개 API는 기존 77시험/237문항이며 운영 DB 전체를 대체하지 않는다. 관리자 검수 권한을 일반 사용자 권한으로 간주하지 않는다.

기존 71701 메타데이터 전용 함수가 미적용이고 APP은 기존 Registry만 읽었다. 기존 함수 계약을 재사용하는 APP 선택 연결과 WEB의 기존 검증 콘텐츠 보존 병합을 로컬 구현했다. 대학별 중복 수정 없음. 정확히 같은 시험/문항 UUID 집합에 한해서 기존 승인 콘텐츠를 보존하고, 신규 메타데이터는 검수 중/AI HOLD로 표시한다. 비공개 PDF·해설·평가기준을 학생 콘텐츠로 투영하지 않는다.

## 11개 대학 실측

DB 수치는 기존+신규 누적이며 최초 97/382 등록 배치와 다르다. WEB은 실제 비로그인 Production 대학 상세 화면의 관찰이다. 전부 신규 등록 자료 전체 연결은 FAIL, 기존 일부 표시만 PARTIAL이다. 로그인 일반 계정/APP 전체 대학 실측은 아직 NOT_ASSESSABLE이다.

| 대학 | DB 시험/문항 | 실제 비로그인 WEB 표시 | 전체 연결 |
|---|---:|---|---|
| 가천 |17/166|로그인 안내, 신규 학년도 선택 없음|FAIL|
| 건국 |21/58|2026 모의만|PARTIAL|
| 경희 |18/38|2022·2021만|PARTIAL|
| 고려 |10/30|로그인 안내, 신규 학년도 선택 없음|FAIL|
| 동국 |16/48|2024·2023·2022만|PARTIAL|
| 서강 |10/14|2024 모의만|PARTIAL|
| 성균관 |15/27|2025·2023만|PARTIAL|
| 숙명 |8/22|2025 모의 인문만|PARTIAL|
| 숭실 |16/42|2022 수시 인문만|PARTIAL|
| 서울여 |2/5|기출 준비 중|FAIL|
| 한국항공 |9/18|기출 준비 중|FAIL|

위 화면은 https://lab.legendstudy.com/essay-lab/universities/{slug}/ 에서 확인했다. 등록 메타데이터 조회와 공개 승인 문제 본문 제공은 별도다. 공개 PDF·본문 전체 제공, 실제 첨삭/History는 미검증/HOLD이며 PASS가 아니다.

## 과거 대량 자료 대조 (예비 조사)

기존 Downloads의 `3.논술 자료.zip` 보존 확인. __MACOSX/디렉터리 제외 5,664 archive entries: PDF 4,572, HWP 689, JPG 213, ZIP 108, PNG 68, 기타 14. 중복 포함 파일 항목 수이며 고유 원본·시험·문항 수로 해석하지 않는다. 원본 내용 전수 재검수/업로드하지 않았다.

기존 `legendstudy-essay-lab-inventory.csv` 134개 게시글 조사 행 재발견. Production essay_exam_resources 134연결/21시험/44 resource ID/활성134 확인. CSV 134게시글과 DB 134연결은 다른 단위이며 1:1로 확인되지 않았다. 전체 archive→분류→시험 UUID 대응은 미완료. 따라서 미등록/중복/HOLD 총수를 추정하지 않는다. 이번 신규 등록/재등록 0, 운영 신규 연결 0. PHASE 1 승인 대기 중 독립적인 예비 목록 대조만 실시, PHASE 3 완료 아님.

## 숙명/한양: 기존 조사 재사용

- 숙명 DB: 2027 모의 3시험/8문항, 2026 수시 4/10, 2025 모의 1/4. CSV 2019~2026 8게시글, 2024·2025 수시/모의 및 우수답안 언급. 원본을 다시 요청하기 전에 이 자료와 UUID 대응 필요. 2026 수시는 이미 있으므로 누락으로 단정하지 않는다.
- 한양 DB: 2024 수시 1/1, 2024 모의 2/4, 2025 모의 1/0. CSV 2019~2025 8게시글. 2025 모의 DB 시험에 문항 없음 확인. 2025 수시/2026 자료는 이 CSV에 없음; 전체 보관 원본 검사가 끝나지 않아 미보유로 단정하지 않는다.
- 기존 한양 2026-10-14 Production 인문 최초1/재첨삭0 Credit E2E, 숙명 로컬 이미지 품질, 건국 Provider 25회 기록 재사용. 재호출 없음. Math/History/Credit 재개발 없음.

## 로컬 변경 및 안전

APP: source_catalog.dart, source_catalog_page.dart 및 테스트. 대학 선택 시 동일 Supabase essay_browse_catalog 호출, ID 검증/허용 필드 투영/조회 실패 안내/REVIEW_REQUIRED 작성 차단.
LAB: registered-material-catalog.ts, source-exam-selection.tsx 및 테스트. DB ID가 정확히 일치하는 기존 Source Registry 콘텐츠만 보존.
42 Catalog, 후순위16 HOLD, Claude UX, 기존 인증·이미지6장·History 경로 보존. 서버/평가 엔진/결제/인증 설정 변경 없음.

검증: WEB 관련13테스트, typecheck/lint/build/Boundary PASS. APP 관련12테스트(360dp/200% 기존 회귀 포함), 변경 영역 analyze PASS, Android debug APK PASS. iOS Simulator debug build PASS. 실제 Native 화면 제어 도구가 Simulator 앱을 연결하지 못해 APP 화면 실측은 NOT_ASSESSABLE. Production 설정을 사용하는 실행 준비와 실제 사용자 화면 검증은 구분한다. Mock/Widget PASS를 운영 APP PASS로 기록하지 않는다.

## 승인 대상 / 복구

1. 기존 APP migration `20261021071701_essay_browse_metadata.sql` 하나의 적용 여부 결정. 함수 1개 및 실행권한만, 신규 테이블/정책/ID 변경 없음. 71702는 자료 조회에 불필요하므로 제외. 기존 백업/Vault 복구 미해결 조건을 해소하기 전 실행 금지. 승인만으로 복구 조건을 PASS로 바꾸지 않는다.
2. 적용 후 anon/auth 역할로 대학별 메타데이터/권한 확인, private Storage/evidence 차단 검증. 실패 시 후속 배포 중단. 신규 함수만 존재했던 경우 해당 함수 제거로 복구; 기존 함수가 생겼다면 적용 직전 정의/ACL 백업 복원. 기존 데이터 수정 없음.
3. WEB 변경은 배포 후보 전체와 실제 Production SHA를 대조한 최소 변경 패키지 확정 후 별도 배포 승인. 현재 신규 브랜치 전체 배포 승인을 요청하지 않는다. APP는 검증용 빌드만, 스토어 제출 없음.
4. 공개 문제 본문이 없는 자료는 권리/본문 승인 후 연결 필요. 비공개 자료를 공개해서 해결하지 않는다.

Production DB/Storage 쓰기·Migration·WEB 배포·APP 업로드·Provider·Credit 모두 0. 기존 데이터 변경 없음. 실제 Production SHA는 이번 조회에서 검증하지 못했으므로 과거 known-good SHA를 현재 SHA로 단정하지 않는다. 일반 사용자 AI HOLD 유지.

## 다음 단계

STEP 1 진단 완료, STEP 2 로컬 연결 준비, STEP 3 운영 전체 조회 BLOCKED. 이후 전체 자료 UUID 대조/숙명·한양 보완 확정/평가 연결/100초 대기 UX는 아직 미완료이며 이번 단계 완료로 보고하지 않는다. 최종 서비스 준비 PARTIAL/HOLD.

## Git handoff

- LAB `codex/material-service-lab-20261022`: 0d633ff (origin Push 및 일치 확인).
- APP `codex/material-service-app-20261022`: 415e4aff28ba97236c809bedb173247909f82a63 (origin 일치 확인).
- Wiki `codex/material-service-docs-20261022`: 이 보고서 포함, Push 후 원격 확인.
- 71701만의 조건부 적용 승인을 Owner에게 요청했다. 복구 게이트 미충족이면 실행하지 않음.
