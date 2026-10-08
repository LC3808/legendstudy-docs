<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH (asset package only; Tistory not modified by Claude)
CREATED: 2026-10-08
PRODUCTION_CHANGED: NO
-->

# LegendStudy.com — Web Favicon (full-orange brand)

Brings the new **full-orange App Icon** (orange background + white notebook/pencil
symbol) to the legendstudy.com Tistory favicon. Built from the same canonical
source as the App Icon — **not a new design**. Owner applies; Claude does not touch
the Tistory site.

## Source / authority

- **App Icon authority:** `legendstudy-app` `claude/final-store-release-2026-10-08` @ `8cb7b24`.
- **Source artwork:** `assets/brand/source/legendstudy_app_iocon_1024.png`
  (sha256 `7f37ed2c…`) — **untouched**. Favicons are a faithful figure/ground
  colour-swap (orange bg + white symbol), identical method to the App Icon.
- **Orange:** `#FFA300` (= `AppTokens.primary`, matches the App Icon).
- **Favicon-only optical adjustment:** symbol at **86%** (vs the App Icon's 78%)
  because the web favicon has no mask safe-zone and reads better slightly larger at
  16–48px. **No geometry/redesign** — allowed by the addendum.
- **Reproduce:** `python export_favicon.py --source <app>/assets/brand/source/legendstudy_app_iocon_1024.png --write` (Pillow; asserts the source sha256).

## Exports (`assets/`)

| File | Size | Use |
|---|---|---|
| `favicon.ico` | 16+32+48 (multi) | the classic favicon (matches the skin's existing reference) |
| `favicon-16x16.png` | 16 | modern tab icon |
| `favicon-32x32.png` | 32 | retina tab icon |
| `favicon-48x48.png` | 48 | high-dpi / shortcut |
| `apple-touch-icon.png` | 180 | iOS "add to home screen" |
| `favicon-192x192.png` | 192 | Android / PWA |
| `favicon-512x512.png` | 512 | PWA / large |

All PNGs are opaque RGB; `favicon.ico` carries 16/32/48 frames.

**Legibility:** 32/48/180 are crisp; at 16px the fine notebook lines merge into an
orange tile with a white document mark (inherent to a detailed logo at 16px —
brand-recognizable). Modern browsers favour the 32px icon.

## Current Tistory reference (TISTORY_CURRENT_REFERENCE)

The skin's `<head>` has exactly one icon line:
```html
<link rel="shortcut icon" href="[##_blog_link_##]favicon.ico">
```
→ it serves `favicon.ico` from the blog root. No apple-touch-icon / PNG / manifest
is referenced today.

## Owner apply (OWNER_APPLY)

**Minimal (recommended) — no HTML change:**
1. Back up the current favicon first (see `rollback/README.md`).
2. In Tistory admin, replace the blog favicon with `assets/favicon.ico`:
   관리 → 꾸미기 → 스킨 편집 → HTML 편집 → 파일 업로드, upload `favicon.ico`; or
   블로그 설정의 파비콘(favicon) 항목에 `favicon.ico` 업로드. The existing
   `shortcut icon` line then serves the new icon. Hard-refresh (favicons cache
   aggressively; append `?v=2` while testing if needed).

**Optional enhancement (crisp PNG + Apple touch icon):**
3. Upload the PNG assets as skin images, then paste `head-snippet.html` into
   skin.html `<head>` right after the existing shortcut-icon line, replacing
   `{SKIN_IMG}` with your uploaded skin-image base URL. Marker-wrapped
   (`LEGENDSTUDY FAVICON START/END`) for easy removal.

## Rollback

See `rollback/README.md` — restore the previous favicon.ico. (The live favicon
could not be captured automatically from this environment, so **back it up before
replacing.**)

## Verify after apply
- Browser tab shows the orange icon with the white document mark.
- iOS "add to home screen" shows the orange icon (if the enhancement snippet was added).
- No console 404 for the icon URLs.
