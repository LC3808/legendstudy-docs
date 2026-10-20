# 2026-10-20 — 논술 LAB 품질 고도화 착수 / READ-ONLY Gap Audit

STATUS: OWNER DIRECTED · AUDIT REQUEST PREPARED · IMPLEMENTATION NOT AUTHORIZED BY THIS DOCUMENT
SCOPE: Essay question coverage & verification, Math Essay evaluation, LAB Web UX, Flutter APP UX
SECURITY: Public Wiki; no secrets, personal student answers, private provider payloads.

## Authority / existing policy
- Start: `00_PROJECT/AI_CONTEXT.md`, `00_PROJECT/CURRENT_STATUS.md`, `00_PROJECT/SOURCE_OF_TRUTH.md`.
- UX: `00_PROJECT/ESSAY_FIRST_UX_OWNER_POLICY_2026-10-11.md` (Essay-first, not admissions information portal).
- Implementation authority: APP `LC3808/legendstudy-app` (canonical DB migrations, shared backend, Math/Essay, Flutter); LAB `LC3808/legendstudy-lab` (Next.js WEB).
- Historical snapshots may be stale. Verify active branch, merged commits, release candidate and Production deployment separately; commit != deployed.
- Preserve existing 42 universities/49 tracks, Owner priority 22, prepared 30, university-specific rubrics, official sources; do not invent coverage, ranking or metrics.
- APP Native Flutter; no WebView substitution; APP and WEB share identity, backend, questions, evaluation and history.
- General-user AI evaluation HOLD; preserve authorization, Payment/Toss/IAP, Credit Ledger, JWT/signing and known-good gates. No new financial transaction or DB change.

## Audit workstreams (parallel READ-ONLY)
### A. Question materials & official-source QA — P0
1. Locate canonical essay university/exam/year/track/question/source/rubric schema and verified materials ledger.
2. Compare current active/published vs prepared/quarantined/draft/unsupported, with real counts and evidence; do not infer from catalog size.
3. Identify missing questions, duplicate versions, invalid mappings, incorrect year/track/number, official admissions URL status, PDF/image/math-expression omissions and rights boundaries.
4. Reuse prior QA execution plan; do not repeat passed checks without evidence of regression.
5. Produce university/year/track/question gap table with severity, evidence pointer, proposed smallest fix, and verification plan. No material import yet.

### B. Math Essay quality — P0
1. Trace image upload → storage → extraction → mathematical notation → step-by-step reasoning → rubric mapping → feedback → rewrite/re-evaluation → growth/history across WEB/APP/shared backend.
2. Distinguish verified real-provider E2E from mock/unit tests and gated states. Inspect uncertainty/illegible image handling, partial credit, wrong final answer with sound steps, right final answer with unsound steps.
3. Respect math voice OUT OF SCOPE for first release; do not add TTS or new grading dimensions.
4. Produce concrete failures/gaps and candidate regression cases with existing canonical data only. No provider calls, credit debits or evaluation runs during audit.

### C. WEB Essay-first UX — P1
1. Audit university → year → track → question → answer → submit → result → rewrite → history.
2. Preserve approved desktop 42% question / 58% answer, mobile switch, drafts and existing result design.
3. Check official link, disclosure of unavailable questions, price/credit before debit, accessibility, 360px/200% layouts, excessive information and repeated taps.
4. Provide screenshot/route/component-based issues, prioritized minimal patches. No deployment.

### D. APP native Essay UX — P1
1. Audit native Flutter parity for WEB actions, shared attempt/evaluation/history and error states.
2. Verify real release candidate and store-submitted builds vs main branch; never infer deployed behavior from unmerged branches.
3. Check upload/preview/retry, safe purchase disclosure, navigation and small screen.
4. Produce minimal patch plan; no store rebuild during audit.

## Required report
- One executive summary (max 1 page) and a matrix: `ID | stream | observed state | evidence (branch/SHA/path/URL) | PASS/PARTIAL/FAIL/NOT_ASSESSABLE | severity | recommended minimal action | dependency | Owner GO required`.
- Separate `already complete`, `verified gap`, `unknown/not assessable`; distinguish CODE / DB / PRODUCTION / DEVICE.
- Proposed sequencing: A+B audit parallel; C+D audit parallel; Owner approval of small batches; isolated implementation and tests; staging; production verification; only then closure.
- Note release blockers separately: Android 3/5/10 Credit displayed ₩12,000/₩18,000/₩30,000 vs policy ₩11,900/₩17,900/₩29,900; store review HOLD; not authorization to change IAP.
- Do not request reapproval for previously closed tasks. Do not alter data or release flags. No code/DB/deploy during this audit.

Owner request: start next phase with materials verification, Math Essay reinforcement, LAB WEB UX and APP native UX. This file records audit scope only, not implementation results.
