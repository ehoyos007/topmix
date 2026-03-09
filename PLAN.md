# TopMix Concrete — Plan

## Current Phase: Post-Migration Optimization

### Phase 1: Foundation Fixes (COMPLETED)
- [x] Migrate WordPress → React/Vite
- [x] Download all WP assets (37 images, logos, hero)
- [x] Build working contact form with Supabase backend
- [x] Add GTM tracking from WordPress
- [x] Fix social media links
- [x] Add Footer with real contact info
- [x] Add Testimonials with JSON-LD schema
- [x] Add FAQ with JSON-LD schema
- [x] Rebuild Gallery with category tabs
- [x] Deploy to Vercel

### Phase 2: SEO & Discoverability (NEXT)
- [ ] Create 10+ location-specific pages (Doral, Hialeah, Kendall, Homestead, Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, Miami Beach, Coral Gables)
- [ ] Add blog infrastructure with first 3 posts:
  - "How Much Does a Concrete Driveway Cost in Miami?"
  - "Stamped Concrete vs Pavers: Which Is Right for Your Miami Home?"
  - "The Complete Guide to Pool Construction in South Florida"
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile with Vercel URL
- [ ] Add review schema markup
- [ ] Point topmixconcrete.com domain to Vercel

### Phase 3: Automation for Solo Operator
- [ ] Email notification on new lead (Supabase webhook → SendGrid/Resend)
- [ ] Auto-reply email: "Thanks, we'll call within 24 hours"
- [ ] Simple CRM dashboard (lead list + status updates)
- [ ] Invoice email templates
- [ ] Google Calendar booking integration
- [ ] WhatsApp Business chat widget
- [ ] Post-project review request automation

### Phase 4: Paid Advertising
- [ ] Google Local Services Ads ($500/mo)
- [ ] Google Search Ads — core keywords ($500/mo)
- [ ] Spanish-language ad campaigns ($300/mo)
- [ ] Facebook/Instagram Ads — before/after photos ($200/mo)
- [ ] Remarketing display ads ($200/mo)
- [ ] Conversion tracking setup (form + phone clicks)

### Phase 5: Spanish Language
- [ ] Translate all service sections
- [ ] Create Spanish-language contact form
- [ ] Spanish meta tags and OG data
- [ ] hreflang tags for en/es
- [ ] Spanish-language blog posts

## Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| React SPA over WordPress | WordPress scored 55/100 mobile perf with 4.25s TTFB. Static Vite build on Vercel CDN = sub-100ms TTFB |
| Satori Supabase over dedicated | Shared project reduces management overhead for a solo operator. Table-level GRANT isolation is sufficient |
| RLS disabled, GRANT-based perms | PostgREST cache issues with RLS policies. GRANT INSERT to anon is simpler and equally secure for a contact form |
| Single-page app (for now) | Brochure site fits SPA pattern. Will add React Router pages for blog/location pages in Phase 2 |
| No Edge Function for form | Direct Supabase client insert is simpler. Edge Function only needed if we add email notifications |
