# 11개 대학 학생용 문제 PDF — Production 연결 결과

# 학생용 PDF Production 반영 결과

승인 범위 PASS / 전체 PARTIAL(성균관대 권리 HOLD 및 Owner 최종 검수 대기).

|대학|시험|문항|운영 PDF 확인|공개 HOLD|
|---|---:|---:|---:|---:|
|가천대|17|166|166|0|
|건국대|21|58|58|0|
|경희대|10|38|38|0|
|고려대|10|30|30|0|
|동국대|16|48|48|0|
|서강대|10|14|14|0|
|성균관대|9|27|0|27|
|숙명여대|8|22|22|0|
|숭실대|16|42|42|0|
|서울여대|2|5|5|0|
|한국항공대|9|18|18|0|

- 전체128시험468문항 / 로컬133PDF691페이지 / 운영441문항124PDF / 권리HOLD27문항9PDF.
- Storage 신규73개31,764,197bytes, 기존51개재사용.124개다운로드 SHA-256·크기 일치. 기존257파일 중 승인124개만 새정책대상.
- 운영 일반테스트계정 역할: operator=false, 승인124개+기존한양대예외1개 조회; 비허용0/anon0. 기존208시험656문항ID지문 동일.
- 정책: student_problem_verified_20261022_read, authenticated exact-file SELECT + account_service_allowed. 기존정책보존.
- WEB f1478612b09f91978be089d5f48954f843c9208e / deployment a3d5a58e-3de1-433e-90bb-486f6590808e.
- Node22 관련19tests+auth3tests, Typecheck·변경Lint·Build·Boundary·GitHubReady PASS.
- 최초배포 aef05193: 공개빌드환경변수누락 회귀 발견, 88a4c6b로복구·새정책제거·비공개파일보존. 운영공개변수주입후 재빌드·정책재적용·배포. Cloudflare전후설정동일.
- 초기운영렌더12초초과3건은 재검증PASS. 원인미확정(네트워크/렌더 지연 가능성은 추정). first-pass.json/retest.json과개별스크린샷보존.
- 모든문항별 선택·PDF열기·시작페이지검증. 파일별스크린샷보존, 모든페이지의 운영스크롤 시각 재검사는 아님; 로컬691페이지 및 기존원본/경계시각검수 재사용.
- AI HOLD 유지. 답안입력/제출·Provider·Credit·APP·71702 작업없음.
- Owner 최종11대학검수 전 APP/AI 시작금지.

## 검증 범위와 증거

운영 브라우저 검증은 기존 로그인 세션에서 일반 사용자 화면을 사용했다. 별도 일반 사용자 역할 SQL 검사에서 operator=false, 승인 파일 124개와 기존 한양대 예외 1개만 조회됨을 확인했다. 신규 학생 계정 생성이나 실제 제출은 하지 않았다. 모바일 360px 전수 문항 열기 및 대표 데스크톱 PDF 팝업 확인. 기존 소스·절단 경계 시각 검증을 재사용하며, 모든 운영 페이지의 수동 시각 검토를 새로 완료했다고 주장하지 않는다.

비공개 증거 위치: `~/development/legendstudy-materials/essay-validation-2026-10/student-pdf-20261022/`. `production-final-report.md`, `production-web/question-checks.json`(441), `production-web/skku-hold.json`(27), `storage-transfer-results.json`(124), `browser-qa/all-page-checks.json`(691), `failures/`, `incomplete-questions.csv`(27). 원본·PDF·스크린샷·운영 설정은 GitHub에 업로드하지 않았다.

현재 남은 실패/검수 대상은 성균관대 권리 HOLD 27문항. 초기 렌더 시간 초과 3건은 1회 재검증으로 해소했으며 원인 미확정 기록을 보존한다. Owner WEB 확인 전 APP 및 AI 단계는 진행하지 않는다.

## 이전 단계 기록 — 아래 상태는 당시 기준

# 11개 대학 학생용 문제 PDF — 로컬 검증 결과

최종: PARTIAL. Production DB·Storage·권한·WEB 배포 변경 없음. APP·AI 작업 없음. AI HOLD 유지.

- 대상: 128개 문항 보유 시험 / 468문항 (DB 시험 행 142개 중 14개는 문항 0개).
- 준비: 456문항 / 129 PDF. 원본 전체 재사용 66개, 문제 페이지·영역 분리 63개.
- 로컬 기존 WEB 뷰어 로딩: 456문항 PASS. 실제 Production 신규 PDF 렌더 PASS: 0.
- 실제 로컬 브라우저: 고유 PDF 129개 첫 화면 시각 확인 PASS. 전체 페이지 브라우저 검증과는 구분.
- 공통 시험 PDF는 현재 첫 페이지로 열림. 선택 문항으로 바로 이동하는 페이지 매핑은 미완료.
- 원본/절단 경계 시각 검수와 파일 로딩을 수행했으나, 모든 PDF의 모든 페이지에 대한 브라우저 픽셀 검증은 미완료. 따라서 전체 WEB 렌더 PASS 아님.
- 원본 미확인: 4시험 / 12문항. Owner 원본 경로 확인 필요.

| 대학 | 문항 보유 시험 | 문항 | 로컬 PDF 준비·로딩 | 원본 미확인 | Production 렌더 |
|---|---:|---:|---:|---:|---|
| 가천대 | 17 | 166 | 166 | 0 | 미배포 |
| 건국대 | 21 | 58 | 58 | 0 | 미배포 |
| 경희대 | 10 | 38 | 31 | 7 | 미배포 |
| 고려대 | 10 | 30 | 30 | 0 | 미배포 |
| 동국대 | 16 | 48 | 48 | 0 | 미배포 |
| 서강대 | 10 | 14 | 14 | 0 | 미배포 |
| 성균관대 | 9 | 27 | 24 | 3 | 미배포 |
| 숙명여대 | 8 | 22 | 22 | 0 | 미배포 |
| 숭실대 | 16 | 42 | 40 | 2 | 미배포 |
| 서울여대 | 2 | 5 | 5 | 0 | 미배포 |
| 한국항공대 | 9 | 18 | 18 | 0 | 미배포 |

## 실패 및 보완

- FAIL-01: 12문항 — 경희대 2021 모의 사회 3 / 2022 모의 자연 4, 성균관대 2023 모의 자연 3, 숭실대 2022 수시 인문 2.
- 원본·해설 영역 중첩: 원본을 직접 확인하고 59개 페이지 경계를 raster crop으로 분리. 보이지 않는 해설 텍스트도 산출 PDF에서 제거.
- 공통 제시문·다음 페이지 누락: 전체 문제 전용 PDF 또는 보완된 페이지 집합으로 수정. separation-plan.json additionalPagesByQuestion 및 시각 증거 참고.
- 건국대 문제 파일 4개: 전체 페이지 수가 검토 범위와 달라 전체 재사용 중단. 확인된 문제 페이지만 추출.
- 로컬 검증 번들 renderer 누락: 430건 초기 실패 기록 보존. PDF.js 두 파일 복사 복원 후 456건 로딩 재검증 PASS.
- 동국대 2025 수시 자연 2번: 공식 오류·전원 정답 처리 주석 보존. 내용 임의 수정 없음, AI HOLD.
- 성균관대 공개 권리 HOLD 유지. 한컴 변환본은 기존 검증 결과 재사용이며 이번에 HWP Native 전체 대조를 새로 PASS 처리하지 않음.

## 남은 순서

1. 아래 원본 미확인 12문항의 기존 보관 경로 확인.
2. 456문항 PDF의 전체 페이지 브라우저 시각 검증 및 대학 선택부터 문제 보기까지 통합 검증.
3. 이용 근거가 확인된 파일만 Production Storage/읽기 권한/WEB 배포 별도 승인 요청.
4. 승인 후 Production 실제 렌더 및 Owner 검수. APP·AI 단계는 그 이후.

상세: failures/*.md, incomplete-questions.csv, prepared-pdfs.json, browser-qa/load-results-456.json.
## 구현 및 테스트

기존 MaterialPdfViewer와 studentPdf DTO를 재사용. 기존 시험 UUID+문항 UUID가 정확히 일치하고 콘텐츠 VERIFIED·학생 표시 APPROVED·Storage 읽기 APPROVED가 모두 충족된 후보만 연결한다. 현재 456개 후보는 VISUAL_REVIEWED/PENDING/PENDING이며 운영에서 노출되지 않는다. 기존 한양대 승인 예외와 답안 UI를 보존했다. 새 서버·스키마·평가 엔진은 만들지 않았다.

관련 18개 테스트(4파일), Node22 Typecheck·Lint·Build(135개 정적 페이지)·Boundary·GitHub Ready PASS. 이는 로컬 계약 검증이며 Production 사용자 E2E가 아니다. 별도 localhost 검증 화면에서 실제 기존 뷰어에 456개 문항을 순차 로딩했다. 공통 시험 PDF는 현재 첫 페이지로 열리며 정확한 문항 시작 페이지 점프는 미완료다.

## 보존과 승인 경계

Production 소스88a4c6b / deployment643fc68f-823a-4dfd-a440-dca8ca43e93e 보존. DB·Storage·RLS·배포·Provider·Credit·APP 변경 없음. 71702 미적용. AI HOLD 유지. 이 기록은 배포 승인을 요청하거나 실행한 기록이 아니다.

준비 자산129개 중 기존 Storage에 동일 파일58개, 신규 파일 후보71개/31,945,326bytes. 기존 원본66개 전체 재사용, 분리본63개. Storage에 신규로 필요한 기존 로컬 원본도 있으므로 이 두 집계는 다른 기준이다. 실제 업로드·읽기 권한·WEB 배포는 파일별 공개 근거 및 Owner 별도 승인 후 진행한다. 성균관대 공개 이용 조건 HOLD는 로컬 작업 중단 사유로 삼지 않았다.

## 비공개 검수 산출물

로컬 폴더: `/Users/woojinchang/development/legendstudy-materials/essay-validation-2026-10/student-pdf-20261022`

- SUMMARY.md: 11대학 전체 집계
- failures/*.md: 대학별 상세 실패·문항 ID·원본 경로·증거·권장 조치
- incomplete-questions.csv: 미완료 문항 목록
- prepared-pdfs.json / separation-plan.json: 456문항 연결 및 문제 범위
- browser-qa/verification-summary.json / load-results-456.json / screens-index.json: 실제 로컬 검증 범위
- browser-qa/screens/ 및 contact-1.jpg~contact-9.jpg: 129 PDF 첫 화면 증거
- production-candidate-scope.json: 미승인 반영 후보 목록

원본 PDF, 파생 PDF, 화면 이미지, 원본 본문, 개인 답안, 인증정보는 Wiki/GitHub에 올리지 않는다.

## 다음 우선순위

1. 원본 미확인12문항의 기존 보관 경로 확인(Owner 질문 대기). 없는 파일을 임의 생성하지 않음.
2. 전체 페이지 브라우저 시각 검증, 정확한 문항 시작 페이지, 대학 선택부터 문제 보기까지 통합 흐름.
3. 이용 근거가 확인된 범위의 Production 파일·권한·배포 승인 요청.
4. 승인 후 운영 검증 및 Owner 직접 검수. 그 전 APP·AI 단계 금지.

## 코드 보존 지점

LAB `b71f5f1c22177b983d46414cd9a08eb2f6eff375`, `codex/material-browse-release-20261022` Push 및 원격 SHA 일치 확인. 후보 manifest에는 문항/시험 ID·파일 해시·페이지 수·승인 상태만 포함하며 원문 파일이나 로컬 경로는 포함하지 않는다. staged GitHub Ready 검사791files/금지경로0/의심secret0 PASS.


## 추가 원본 4개 확인 — 누락 12문항 해결

Owner가 essay-2026-10 대학별 폴더에 추가한 경희대2021모의사회·2022모의자연, 성균관대2023모의자연, 숭실대2022수시인문 원본 모두 기존 Source Registry SHA-256과 정확히 일치. 기존12문항 ID 보존, DB 재등록 없음. 문제 전용3파일 원본 재사용, 숭실대는 문제·제시문3~6페이지를 분리하여 해설7~14페이지 제외. 원본 전체 페이지/문제 영역 시각 확인 및 기존 로컬 뷰어12문항 로딩·17페이지 이동 확인.

현재468/468문항·133PDF 준비(원본69·분리64), 원본 미확인0. 기존456문항 증거 재사용. 관련 영향8tests PASS. 전체 브라우저 페이지의 전체 영역/서비스 통합 검증 완료는 아니며 Production 신규 PDF 렌더0, 전체PARTIAL 유지. 기존 공통 시험 PDF의 정확한 문항 시작 페이지도 후속 작업이다.

실패 명세서의 원본 미확인12건은 해결 상태로 갱신. 공개 승인·Storage·배포 대기 항목은 유지. 신규 파일 후보75개/38,407,365bytes, 기존 Storage 동일58개. 공개 허용을 의미하지 않음. 성균관대 권리 HOLD 및 전체AI HOLD 유지. Production/APP/Provider/Credit 변경0.

비공개 증거: 기존 검수 폴더 added-originals-exact.json, added-prepared.json, added-review/, browser-qa/load-results-added-12.json, browser-qa/added-page-navigation.json. 원본/파생PDF/스크린샷 GitHub 제외.
