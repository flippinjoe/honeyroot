# Launch Checklist (Phase 4)

Final pre-launch QA. Run [`brand-check`](../.claude/skills/brand-check/SKILL.md) on every page first.
`✅ pass · ⬜ todo · 👤 owner`

## Content
- [ ] All `content/pages/*` finalized (`status: final`); no leftover `TODO(owner)`/`TODO(copy)` on live pages
- [ ] Menus reflect real offerings; signature/seasonal confirmed
- [ ] Legal pages present: Privacy, Terms, Accessibility statement

## Mobile-first & cleanliness
- [ ] Every page designed + verified on **mobile** first, then desktop
- [ ] ≤ 2 fonts, ≤ ~4 colors; consistent photography; generous whitespace
- [ ] Header shows one clear **Book ▸** action; no template clutter
- [ ] Each page ends in a CTA (no dead ends)

## Booking paths (end-to-end)
- [ ] Path A: a standard package can be booked on mobile; guest-count helper routes oversized → /quote
- [ ] Path B: quote form validates, stores in `QuoteRequests`, and emails the owner
- [ ] Both confirmation/thank-you states display correctly

## Payments (Square — single processor)
- [ ] Square connected as Wix payment provider; a test deposit lands in **Square**
- [ ] Automated receipt emailed; branded invoice template renders cleanly
- [ ] No second processor enabled anywhere

## SEO & analytics
- [ ] Per-page titles/meta set from [`content/seo.md`](../content/seo.md); slugs clean
- [ ] Image alt text; OG image set
- [ ] Sitemap submitted to Google Search Console; analytics connected

## Performance & accessibility
- [ ] Images sized/compressed; Instagram feed lazy-loaded below the fold
- [ ] Reasonable mobile load time; no layout shift on hero
- [ ] Color contrast + tap targets pass; keyboard/sceen-reader sanity check

## Infrastructure
- [ ] Custom domain connected + HTTPS active; branded email working
- [ ] 404 page styled; forms deliver to the right inbox
- [ ] 👤 Owner has dashboard access + knows how to read bookings/quotes

## Go-live
- [ ] Final `brand-check` pass on all pages
- [ ] Announce (Instagram @honeyrootcoffeeco, existing clients)
- [ ] Monitor first real bookings/quotes + payments in Square
