<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH
CREATED: 2026-10-08
-->

# CAMPAIGN / ANALYTICS HANDOFF

**Growth does not create a new tracking schema or analytics DB.** The existing Analytics authority wins (APP `analytics-p0-launch-contract.md`; Postgres/Supabase is SoT, GA4 is not the SoT). This document only states the **dimensions marketing needs** and a **proposed naming**, to be reconciled with that contract (DD-7).

## 1. Dimensions marketing needs

| Dimension | Example | Source |
|---|---|---|
| `channel` | tistory / app / web | placement context |
| `placement` | article_top / article_after / slider / app_home | where the CTA sits |
| `source_article` | post slug/id | the originating 기출 post |
| `university` | hanyang (slug) | catalog `slug`, never a rank |
| `exam_year` | 2027 | operator-set |
| `creative` | master_wide / compact / text | which asset |
| `device` | pc / mobile | responsive variant |
| `destination` | lab_home / essay_entry / store | resolved route |
| `campaign_id` | composed (see §2) | tracking key |

## 2. Proposed campaign_id naming (pending contract reconciliation)

```
ls2026_{channel}_{placement}_{university|na}_{creative}_{device}
# e.g. ls2026_tistory_articleafter_hanyang_master_pc
```

Attach as a query param **only to the destination URL**, never containing PII, and only on routes that resolve. If the existing contract defines its own param/UTM scheme, that scheme wins and this one is dropped.

## 3. Funnel events (map to the existing contract — do not invent new tables)

Marketing cares about these transitions; the actual event/metric names come from the Analytics authority:

**Web/essay funnel:** article_view → cta_click → lab_arrival → signup → first_essay → evaluation_complete → rewrite → credit_used → purchase.

**APP funnel:** banner_view → store_click → install → signup → first_meaningful_action → D1 → D7.

## 4. KPI targets owner
KPIs (strategy-final §7) are read from the existing analytics surface. Growth reports against them; it does not build the pipeline.

## 5. Handoff asks (DD-7)
1. Confirm the existing UTM/param convention (or confirm `campaign_id` above is acceptable).
2. Confirm event names for the 9 web-funnel + 7 app-funnel transitions.
3. Confirm the Postgres↔GA4 role split so marketing dimensions attach to the SoT, not a parallel store.
