<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH
CREATED: 2026-10-08
-->

# Favicon rollback

The current live favicon **could not be captured automatically** from this
environment (the fetch to `https://legendstudy.com/favicon.ico` was blocked /
returned nothing — Tistory may serve it from blog settings or a CDN path). So the
rollback is a **manual backup you take before applying the new one**.

## Before applying (do this first)
1. Download your current favicon and save it in this folder as `favicon.ico`:
   - open `https://legendstudy.com/favicon.ico` in a browser and save it, or
   - Tistory 관리 → 블로그 설정 → 파비콘(favicon): download the currently-uploaded file, or
   - check the skin files for the previously uploaded `favicon.ico`.
2. Keep that file here (`favicon/rollback/favicon.ico`) as the restore point.

## To roll back
Re-upload the backed-up `favicon.ico` the same way the new one was applied
(blog favicon setting / skin file upload), and remove the optional
`LEGENDSTUDY FAVICON START…END` block from skin.html `<head>` if it was added.
Hard-refresh (favicons cache aggressively).

> No live favicon bytes are committed here because they could not be retrieved
> safely; this is intentional, not an omission.
