# WEB release execution — Codex, 2026-10-24

Owner latest authority: Codex alone integrates/deploys WEB; preserve Claude work. APP edits wait for Owner WEB acceptance. Store submission requires later final Owner approval. No new engine/profile/Provider quality work; no Production SQL, DB writes, Worker/Registry/Secret/Ledger changes.

- Latest inspected DOCS main: `82419b5`, superseding earlier `cdf31bc` snapshot.
- WEB PR #5 now includes selective PR #2/#3 and PR #4 report styling on actual Production lineage. Candidate `625a739`; release branch `codex/web-app-release-20261024`.
- Canonical implementation/report: [WEB release record](https://github.com/LC3808/legendstudy-lab/blob/codex/web-app-release-20261024/docs/WEB_RELEASE_2026-10-24.md).
- Actual Production metadata rechecked: successful `e67a0d37-0d1f-4042-b480-7ffd7ba18b5b`, source `f1a9e27a7d1e8d9882339398b4c0cbc86aa43616`; Pages label main does not make Git main the deployment source.
- Preview [2a09bfef](https://2a09bfef.legendstudy-lab.pages.dev) deployed; university cards/source/schedule placement visually verified. Production remains unchanged.
- Typecheck, Lint, Boundary, Production build PASS; related tests116 PASS/2 skipped; full1213 PASS/6 pre-existing failures/4 skipped plus prior empty suite. No new failing assertion. Lockfile unchanged.
- Full Preview authenticated acceptance BLOCKED: current browser Auth explicitly rejects Production Supabase on preview origins, and Preview lacks essay runtime bindings. Security boundary and Secrets preserved. Owner choice requested: approved connected Preview, or explicitly allow Production with the documented Preview limitation and immediate postflight/rollback.
- Readiness is now a fail-closed projection of existing Worker admission + Math availability + canonical university IDs. Old UI card-count assertions are not public-question-count evidence. Historical public12 has NOT been re-certified from current DB in this run.
- Draft keys, report data/provenance, existing submission/payment/ledger behavior preserved. No Provider, purchase or financial write. Existing Android/iOS payment success is Owner-reported; no repeat purchase.
- APP unchanged; Android/iOS build/device/store work NOT_STARTED pending WEB acceptance.
- Rollback target is the existing `e67a0d37` deployment, not older pre-pending-key-fix deployment by default.

This record supersedes the initial PR #5 build-environment limitation and the claim that catalog cards prove general-public question availability. [Initial integration history](2026-10-24-web-production-integration.md) remains dated evidence.
