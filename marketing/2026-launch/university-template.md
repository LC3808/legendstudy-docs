<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH
CREATED: 2026-10-08
-->

# UNIVERSITY BANNER MASTER TEMPLATE

The highest-intent acquisition surface: LegendStudy Tistory per-university 기출 posts. One master, variable-driven, so an operator never needs a designer for a new university.

Assets: `assets/marketing/2026-launch/university-template/` (wide + mobile) and `compact-cta/`.

## 1. Variables

| Variable | Example | Notes |
|---|---|---|
| `university_name` | 한양대학교 | full name |
| `university_short` | 한양대 | short name for compact CTA |
| `exam_year` | 2027학년도 | admissions year, operator-set |
| `exam_type` | 논술 | fixed "논술" for launch |
| `headline` | from messaging.md | default per CTA A/B |
| `description` | from messaging.md | default per CTA A/B |
| `cta_label` | 이 문제로 첨삭 시작하기 | from messaging.md |
| `destination` | live LAB route | confirmed per gate (§5) |
| `campaign_id` | see analytics-handoff.md | tracking |

**No `ranking`/`score`/`등수` variable exists** — the catalog stores none, and copy must never rank universities. Ordering is an internal launch-priority decision only.

## 2. Outputs (one source → four forms)

### C · Wide PC banner (1200×360)
Left: eyebrow `{{university_name}} · {{exam_year}} {{exam_type}}` → headline → description. Right: CTA button (accent) in the reserved variable zone. University logo zone **off by default** (rights gate).

### D · Mobile banner (720×600)
Stacked: eyebrow → headline → description → single CTA. Short Korean lines (messaging §8).

### E · Compact article CTA (960×220)
A single inline card: `{{university_short}} 논술 LAB` title + one sub line + CTA. For mid/end-of-article placement.

### F · Text-only CTA (fallback — no image)
Must work when images are blocked or an ad-like image is unwelcome:

```
▸ {{university_name}} 논술 준비 중인가요?
  대학별 평가·채점 기준에 맞춰 내 답안을 점검하고 다시 써보세요.
  → {{university_short}} 논술 LAB에서 시작하기: {{destination}}
  (신규 가입 시 첨삭권 3회 제공)
```

HTML text CTA (no image dependency):
```html
<a href="{{destination}}" data-campaign="{{campaign_id}}"
   style="display:inline-block;font-weight:700;color:#1a1a1a;
          border-bottom:2px solid #ffac14;text-decoration:none;">
  {{university_short}} 논술 LAB에서 내 답안 점검하기 →
</a>
```

## 3. Placement in the article (section 11)

- **CTA A (top):** awareness only, small, must not block reading the free resource. Default copy = messaging.md §5 CTA A.
- **CTA B (after download/view):** the key conversion point. Default copy = messaging.md §5 CTA B (includes the 3-Credits chip + "이 문제로 첨삭 시작하기").

## 4. Copyright / rights boundary (section 32)

- Do not paste 기출 원문 in bulk into the banner.
- Do not replicate the university's official design/crest; no "official" look; no affiliation wording.
- University **name** is used for service navigation/description only.
- Logos stay optional until a rights review clears them (Owner decision).

## 5. Per-university activation gate (section 31 — all must pass before LIVE)

A university banner may be **built** anytime; it goes **LIVE** only when **all** hold:
1. `destination` route exists and resolves.
2. University ↔ destination mapping is correct.
3. The real essay service is usable for that university.
4. Its evaluation context (문항/평가기준) readiness is confirmed (DD-5).
5. The action the CTA promises is actually possible (write → 첨삭 → rewrite).
6. The route works on mobile.
7. The login flow works.

If any fails → asset built, **LIVE = HOLD**. Track the first-wave activation list in `owner-decisions.md` (Owner-chosen).

## 6. Operator runbook (per university)

1. Copy the master SVG (wide + mobile) + compact + text CTA.
2. Replace the 7 variables (§1). Do not touch layout/color.
3. Confirm the gate (§5). If not all pass → do not publish the CTA; use nothing (not a broken link).
4. Append `campaign_id` to the destination per `analytics-handoff.md`.
5. Place CTA A (top) + CTA B (after resource). Prefer the text CTA where images are unwelcome.
