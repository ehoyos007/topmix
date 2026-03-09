# TopMix Concrete — Context

## Business Overview

**Company:** TopMix Concrete
**Owner:** Carlitos Cabrera (Enzo's uncle) — solo operator
**Founded:** 2013
**Location:** Miami, FL
**Service Area:** Miami-Dade & Broward Counties
**Phone:** (786) 543-7640
**Email:** CCabrera@Topmixconcrete.com
**Facebook:** https://www.facebook.com/topmixconcrete
**Instagram:** https://www.instagram.com/topmixconcrete/

## Services

| Service | Description |
|---------|-------------|
| **Delivery & Pumping** | Ready-mix concrete delivery and pumping for residential & commercial |
| **Decorative Concrete** | Stamped, polished, and stained concrete for patios, driveways, walkways |
| **Concrete Slabs** | Foundation work, driveways, patios, garage floors, basement slabs |
| **Concrete Forming** | Foundation walls, footings, retaining walls, structural columns |
| **Pool Construction** | Complete pool design, excavation, concrete shell, finishing |

## Differentiators

- **Full pipeline** — only competitor offering delivery through pool construction
- **Financing available** — only Deco Concrete also offers this
- **10+ years experience** — licensed & insured
- **Bilingual potential** — Miami is 70%+ Hispanic, no competitor serves Spanish digitally
- **Concrete calculator** — interactive tool no competitor has
- **Free estimates** — industry standard but table stakes

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 + TypeScript + Vite 5 |
| Styling | Tailwind CSS 3 + shadcn/ui (Radix) |
| Backend | Supabase (Satori project: `cbeurhcgvqptclggkbhb`) |
| Hosting | Vercel (free tier) |
| Analytics | Google Tag Manager (GTM-T734Z8W) |
| Forms | react-hook-form + zod validation |
| Database | PostgreSQL via Supabase |

## Key Tables (Supabase — Satori)

### `topmix_leads`
Contact form submissions and lead tracking.

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK, auto-generated |
| full_name | TEXT | Required |
| email | TEXT | Required |
| phone | TEXT | Auto-formatted (xxx) xxx-xxxx |
| service | TEXT | Dropdown selection |
| message | TEXT | Project description |
| status | TEXT | new → contacted → quoted → won / lost |
| source | TEXT | Default: 'website' |
| notes | TEXT | Carlitos's notes |
| created_at | TIMESTAMPTZ | Auto |
| updated_at | TIMESTAMPTZ | Auto via trigger |

**Permissions:** RLS disabled. anon=INSERT only, authenticated=SELECT+UPDATE, service_role=ALL.

## Competitive Landscape

| Competitor | Threat | Key Strength |
|-----------|--------|-------------|
| Deco Concrete Inc. | HIGH | 30yr, city-specific SEO pages, financing |
| Sam The Concrete Man | HIGH | National franchise, pro marketing team |
| Miami Concrete Artisans | HIGH (decorative) | Content marketing, service pages |
| Adonel Concrete | MEDIUM | 180-truck fleet, commercial focus |
| Concrete Ready Mix & Pumping | MEDIUM | 50+ years, established reputation |

## SEO Keywords (Priority)

**Core:** concrete contractor Miami, concrete driveway Miami, stamped concrete Miami, concrete delivery Miami-Dade, pool construction Miami, decorative concrete Miami

**Long-tail:** concrete driveway cost Miami, stamped concrete patio Miami-Dade, affordable concrete contractor Miami, concrete contractor near me free estimate

**Untapped:** All Spanish-language versions of the above

## Glossary

| Term | Definition |
|------|-----------|
| **Ready-mix** | Pre-mixed concrete delivered by truck, ready to pour |
| **Stamped concrete** | Decorative technique pressing patterns into wet concrete |
| **RLS** | Row Level Security — Supabase/Postgres access control |
| **GTM** | Google Tag Manager — analytics/tracking container |
| **LCP** | Largest Contentful Paint — Core Web Vital metric |
| **TTFB** | Time to First Byte — server response time |
| **CPC** | Cost Per Click — Google Ads pricing metric |
| **LSA** | Local Services Ads — Google pay-per-lead ad format |
