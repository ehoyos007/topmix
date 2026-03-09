# TopMix Concrete — Project Instructions

## Project Overview

Website for TopMix Concrete, a concrete services company in Miami-Dade & Broward Counties owned by Carlitos Cabrera (Enzo's uncle). Solo operator who needs an SEO-optimized website with automated lead capture.

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite 5 + Tailwind CSS 3 + shadcn/ui
- **Backend:** Supabase (Satori project `cbeurhcgvqptclggkbhb`)
- **Hosting:** Vercel (topmixconcrete.vercel.app)
- **Analytics:** Google Tag Manager (GTM-T734Z8W)

## Key Commands

```bash
npm install          # Install dependencies
npx vite dev         # Dev server (port 5173)
npx vite build       # Production build → dist/
npx vite preview     # Preview production build
```

## Supabase

- **Project:** Satori (`cbeurhcgvqptclggkbhb`)
- **Table:** `topmix_leads` — contact form submissions
- **Permissions:** RLS disabled, GRANT-based (anon=INSERT, authenticated=SELECT+UPDATE, service_role=ALL)
- **Migrations:** `supabase/migrations/` — push with `supabase db push`
- **Client:** `src/integrations/supabase/client.ts`

## Project Structure

```
src/
  components/
    Header.tsx          # Nav with services dropdown, estimate buttons
    Hero.tsx            # Hero banner with CTA
    WhyChooseUs.tsx     # 4 benefits cards
    ServicesOverview.tsx # 5 service cards
    DeliveryPumping.tsx # Service detail section
    DecorativeConcrete.tsx
    ConcreteSlabs.tsx
    ConcreteForming.tsx
    PoolConstruction.tsx
    ConcreteCalculator.tsx  # Interactive volume calculator
    Gallery.tsx         # Tabbed gallery (5 categories, 37 images)
    Testimonials.tsx    # 6 reviews with JSON-LD schema
    FAQ.tsx             # 8 Q&As with JSON-LD FAQPage schema
    ContactForm.tsx     # Form → Supabase insert + business info
    Footer.tsx          # 4-column footer with service areas
    LazyImage.tsx       # Image optimization component
    ui/                 # shadcn/ui components
  pages/
    Index.tsx           # Main page composing all sections
  integrations/
    supabase/           # Client + types
public/
  gallery/              # 37 images organized by service category
  logos/                # SVG logos (orange + light)
```

## SEO Notes

- JSON-LD schemas: ConcreteContractor (index.html), FAQPage (FAQ.tsx), AggregateRating (Testimonials.tsx)
- All gallery images have SEO-optimized alt text with location keywords
- Meta description includes phone number for click-to-call in SERPs
- Canonical URL: https://topmixconcrete.com/

## Business Info

- **Phone:** (786) 543-7640
- **Email:** CCabrera@Topmixconcrete.com
- **Hours:** Mon-Fri 7AM-5PM, Sat 8AM-3PM
- **Social:** facebook.com/topmixconcrete, instagram.com/topmixconcrete

## Conventions

- Use `scrollToSection(id)` pattern for internal navigation
- All section components use `id` attribute for smooth scroll targeting
- Primary color is orange (HSL 25 100% 50%) via `bg-primary`
- Use LazyImage component for all gallery/service images
- Spanish language support is a priority — Miami market is 70%+ Hispanic
