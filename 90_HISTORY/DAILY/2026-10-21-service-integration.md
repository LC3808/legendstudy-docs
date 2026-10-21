# Integrated service readiness — 2026-10-21

Scope: local WEB only; no Production writes/deployments, Provider or Credit calls. APP unchanged.

## Confirmed authority
LAB baseline54f40e18 includes Codex d20ccd9 and Claude54f40e18; no duplicate integration.
Wiki baseline dc38864ae951774a299f65dc29b8360cc9fb10e1.
APP baaf2bc8969bf14598fac62e831476d8085d7f19 remote matched; main d07671e985929ad1aa4ba2c811919cc592a37b34. Not modified.
Cloudflare latest deployment labelled Production:433141d6-b33b-4473-993c-7069697f3b75, reported source8518db6 (local object8518db67e80973b96e0bd5abaa738460bbc2d7a6). Deployment metadata is not an attestation of uploaded working-tree contents. Custom domain byte equality not tested. Claude54f40e18 inclusion in hosted artifact NOT_ASSESSABLE.

## DB selector — PARTIAL
Production read-only verification: Gachon17/166, Korea10/30, Kookmin0/0; published questions0 for all three. Existing RLS requires active+verified exams and published questions. No RLS changes.
The current essay_registered_questions RPC enumerates an old fixed question-ID set; it does not represent the97 newly registered exams. Static Source Registry must not be called DB truth.
Local patch reuses existing operator-authorized essay_material_list/detail RPCs, maps only canonical IDs and labels into existing SourceExamSelection, does not expose paths/evidence/review bodies in selector DTO. Full originals remain in existing admin UI. New selection does not invoke admission/Provider, permits browser-only draft and remains HOLD.
Ordinary users cannot browse unpublished materials under existing RLS. Enabling that requires separate narrowly scoped metadata-read approval; do not publish question content or enable AI to solve a metadata problem.
Existing published DB path and saved draft/submit bridge preserved. New operator-only path tested locally; no hosted claim.

## Image adapter blocker — PARTIAL
Verified Production math_attempts.leaf_id FK points to math_subproblems, not essay_questions. Math has1 problem set/1 leaf, with0 matching essay question IDs. Exam-level relation exists in math_problem_sets; it does not establish a unique question/leaf relation.
Current essay_exam submission accepts text/revision only and retains strict unknown-field rejection. Existing Math read_input has student ownership, selected confirmed extraction, ordered artifact metadata and confirmed regions. Converting a client-provided confirmed_run_id to arbitrary essay text would erase provenance and cannot safely bind question identity, replay and frozen History.
Minimum change proposal (NOT EXECUTED): reviewed canonical essay_question→Math leaf mapping with unique/FK constraints in APP migration authority; extend existing exam reservation/snapshot RPC to resolve and freeze owned confirmed input atomically, check exact question/leaf/attempt/selected extraction and all PRESENT artifacts1..6 in order, retain existing idempotency/Credit transaction and same question-set14-day rewrite contract. Worker adapter consumes frozen confirmed content through existing evaluator. No new Storage, evaluator or ledger. Exact SQL requires canonical mapping design approval first. No fabricated mapping or migrated data.
Until mapping/snapshot support is approved, do not remove image rejection or launch Provider E2E.

## Preserved pending review
Existing97exams382questions150PDF2484evidence links untouched.
Existing material review states:97 NEEDS_REVIEW,1 VERIFIED (whole review table count, not newly approved AI).
Reused11college phase1 summary/error inventories; not another canonical duplicate. Existing admin materials screen remains source for item-level review.
Pending WEB: Sookmyung6exams16questions17PDF; Soongsil11/30/13; KAU5/10/5. Total22/56/35. No browser retry/re-registration; API results do not imply PDF renderPASS.

## Approval sequence
1. Review local selector patch; separate Production deployment approval.
2. Approve minimal DB metadata projection and Math identity/frozen-input migration design if student browsing/image integration is required.
3. Only after local adapter, permission and replay tests pass: separately approve scoped synthetic Provider testing. Public release remains HOLD.

## Verification result
Node22 + pnpm11.24 used. Typecheck/Lint/Build/Boundary PASS. Related46test files348tests PASS (mock/isolated tests only). Includes exam admission/HOLD, reservation identity/ambiguous retry, image rejection,6-image ordering/input and existing Math ownership/retry/History tests. New8regressions cover projection privacy/integrity/operator access and selector/local draft/HOLD/logout/empty Kookmin.
Browser: local exported Gachon page actually opened in IAB; header,official admission-page link,login link,empty selectors and error handling visible. Static server has no Pages Functions; catalog failure explicitly shown. Authenticated local browser E2E and Production E2E NOT_ASSESSABLE, not a service PASS. Existing360px/200% results preserved, not reattested for new authenticated metadata flow.
Final overall PARTIAL. Production deployment not requested until mapping/rights/readiness blockers are resolved.

LAB implementation commit4a886065777e7b4a965db95ae36085783829a8db pushed to codex/gachon-official-page-20261020; remote SHA matched. No main merge. Tests/source changes only; no raw documents, secrets or student data included.


## Owner GO: service DB/Backend contracts (local implementation)

Two canonical APP migrations prepared on `codex/essay-service-contracts-20261021`.
1. `essay_browse_catalog(text)`: explicit42Catalog metadata-only anonymous/authenticated
   projection, fixed IDs, no private PDF/evidence/body or evaluation readiness. Existing
   base grants/RLS unchanged. LAB existing selection merges published and review-pending
   exams; published draft behavior preserved; pending submission stays disabled.
2. Nullable unique `math_subproblems.essay_question_id` FK + same-exam/used-identity
   guard. No mapping backfill. Existing submit/cycle resolves owned completed confirmed
   input, latest candidate,1–6PRESENT ordered images, freezes body+provenance into existing
   journal. Raw URLs/client body override rejected. Existing reservation/finish logic
   untouched; replay/History retained. No new evaluator/storage/table.

Local PG17:19 checks PASS, including role privacy, ownership,6/7image bounds, incomplete
upload, immutable mapping, HOLD, retry-after-OCR, one reservation, one synthetic local
consumption, History and guarded rollback. Synthetic package/model fixtures only.
Existing Math upload/confirmation UI reused; typed confirmed-reference handoff prepared,
but no manufactured mapping or unreviewed image activation. Actual mapping/content
approval, final input-flow handoff and live E2E are NOT claimed complete.

Separate Owner approvals: Production migrations, WEB deployment, reviewed mapping and
runtime activation, scoped Provider E2E, public release. None executed.97/382/150/2484
registration preserved; existing WEB render backlog22/56/35 remains unchanged.


Final local verification: Typecheck/Lint/Build/Boundary PASS;36related test files,
235tests PASS;19isolated PG17 checks PASS. Sandbox build stalled; identical build
outside sandbox completed135static pages. Production browser/Provider E2E not run.

Pushed and remote SHA matched:
- APP `codex/essay-service-contracts-20261021`:81104927833bec9644daf07db672be87f5ada488
- LAB `codex/gachon-official-page-20261020`:29a8b2d35d48956f091f59166d1a7dd854afbe1e

Local contract verification PASS; overall operating service remains PARTIAL. Production
migration/deployment need separate approval; existing image input handoff and reviewed
canonical mapping/readiness must be verified before any live E2E or activation.
No secrets, private PDFs or student data committed. No main merge or release build change.
