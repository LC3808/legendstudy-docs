<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH
CREATED: 2026-10-08
-->

# ROLLBACK — LegendStudy.com Tistory Marketing Layer

Two levels: **instant disable** (no code change) and **full restore**.

## Level 0 — Instant disable (fastest, keep code in place)

Set every flag in `CONFIG` to `false`:
```
APP_BANNER_ENABLED: false,
ESSAY_SLIDE_ENABLED: false,
ARTICLE_ESSAY_CTA_ENABLED: false,
SHOW_SIGNUP_BONUS: false,
```
Apply. All marketing slides/CTAs disappear immediately; the rest of the site is unaffected. No markup removal needed.

## Level 1 — Partial removal (remove marketing code only)

In the Tistory HTML editor, delete everything between each marker pair:
- `<!-- LEGENDSTUDY MARKETING START : 메인 슬라이드 -->` … `<!-- LEGENDSTUDY MARKETING END : 메인 슬라이드 -->`
- `<!-- LEGENDSTUDY MARKETING START : script -->` … `<!-- LEGENDSTUDY MARKETING END : script -->`

In the CSS editor, delete between:
- `/* LEGENDSTUDY MARKETING START */` … `/* LEGENDSTUDY MARKETING END */`

Nothing else was changed, so the skin returns to its original behavior. Apply.

## Level 2 — Full restore (original skin)

Replace the entire HTML and CSS with the byte-exact originals in this package:
- `original/skin.html` (sha256 `4a452414cf151919f391ecf4c246abd2b34ce4a546ddc49cd463c4c2af4f80fb`)
- `original/style.css` (sha256 `e12c4ce05757be639ff173023332e67423e9ee01471b2eb6838b179c66e97bd0`)

Paste each into its editor, Apply. This is identical to the pre-deployment state.

## Verify after rollback
- Home slider shows only the original site slides, correct dot count.
- 논술 posts show no injected CTA.
- AdSense / GA / Naver / search / sidebar all normal.

## Notes
- Marketing changes are purely additive (0 original lines removed — see `patches/`), so Level 1 fully reverses them.
- If you applied via separate files (Option B), also remove the `<link>`/`<script>` tags you added and (optionally) the uploaded skin files.
