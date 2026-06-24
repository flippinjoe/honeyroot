---
name: page-content
description: Draft or refine on-brand site copy and structured content for Honey Root in /content. Use when writing page copy, drink-menu data, or service descriptions. Enforces the brand voice, frontmatter conventions, honest placeholders, and an ending CTA toward Book or Quote.
---

# Page Content Authoring

For copy and structured content in `/content`. (For visual/layout review use `brand-check`.)

## Voice
Warm, hospitable, confident — premium but not stiff. Short, mobile-readable sentences. Sell the
**experience and the booking**, not a checkout.

## Conventions
- Page files (`content/pages/*.md`) carry frontmatter: `page`, `route`, `status`
  (draft|review|final), `last_reviewed`, `primary_cta`.
- Structured data: drinks in `content/menus/drink-menu.json`, services in
  `content/services/services.json`. Keep page copy and these data files consistent.
- **Don't invent business facts** (prices, radius, team, sourcing, policies). Use `TODO(owner)`.
  Use `TODO(copy)` for writing still to be done.
- Every page ends pointing at **Book** (standard/small) or **Request a Quote** (large/custom).

## Checks before marking `status: final`
- [ ] Reads cleanly on a phone (short paragraphs, scannable headings)?
- [ ] One clear primary CTA, correct path for the page?
- [ ] No fabricated facts; placeholders resolved or clearly marked?
- [ ] Consistent with `docs/site-map.md` and `docs/service-to-page-mapping.md`?
- [ ] Run `brand-check` on the built page before publishing.
