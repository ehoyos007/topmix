# TopMix Concrete — Test Log

## 2026-03-09 — Initial Migration

### Build Verification
| Test | Result | Notes |
|------|--------|-------|
| `npx vite build` | ✅ PASS | Builds in ~2s, 644KB JS bundle (gzip: 190KB) |
| Dev server starts | ✅ PASS | HTTP 200, 6381 bytes served |
| All components render | ✅ PASS | No console errors in build |

### Supabase Integration
| Test | Result | Notes |
|------|--------|-------|
| Anon INSERT to topmix_leads | ✅ PASS | HTTP 201, row created correctly |
| Anon SELECT (should fail) | ✅ PASS | HTTP 401 — permission denied as expected |
| Service role INSERT | ✅ PASS | Full row returned with defaults |
| Service role SELECT | ✅ PASS | All rows returned |
| Service role DELETE | ✅ PASS | Test data cleaned up |
| Auto-generated UUID | ✅ PASS | gen_random_uuid() working |
| Default status='new' | ✅ PASS | Confirmed in response |
| Default source='website' | ✅ PASS | Confirmed in response |
| updated_at trigger | ⬜ NOT TESTED | Need to test via UPDATE |

### Vercel Deployment
| Test | Result | Notes |
|------|--------|-------|
| Production deploy | ✅ PASS | https://topmixconcrete.vercel.app |
| Build on Vercel servers | ✅ PASS | 14s total build time |
| Static assets served | ✅ PASS | Images, CSS, JS all load |

### Lighthouse (WordPress — Pre-Migration Baseline)
| Category | Mobile | Desktop |
|----------|--------|---------|
| Performance | 55 | 89 |
| SEO | 77 | 77 |
| Accessibility | 81 | 80 |
| Best Practices | 54 | 54 |

### Lighthouse (Vercel — Post-Migration)
| Category | Mobile | Desktop |
|----------|--------|---------|
| Performance | ⬜ TODO | ⬜ TODO |
| SEO | ⬜ TODO | ⬜ TODO |
| Accessibility | ⬜ TODO | ⬜ TODO |
| Best Practices | ⬜ TODO | ⬜ TODO |

### Known Issues
| Issue | Severity | Status |
|-------|----------|--------|
| JS bundle > 500KB warning | LOW | Can code-split with dynamic imports |
| Contact form untested end-to-end on live site | MEDIUM | Need to submit test form on Vercel |
| Post-migration Lighthouse not yet run | MEDIUM | Run after domain pointed |
| No automated tests | LOW | No test framework configured |

### Bugs
None reported yet.
