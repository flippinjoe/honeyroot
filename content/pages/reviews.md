---
page: Reviews
route: /reviews
status: review
last_reviewed: 2026-06-25
primary_cta: [quote, book]
---

# Reviews

> Voice: warm, confident, grateful. Let the clients' words carry it. Mobile-first; ends on a CTA.
> **Do not invent reviews.** All testimonials are real and owner-supplied or collected via Wix Reviews.

## Intro
Don't take our word for it. Here's what hosts, couples, and planners say about having Honey Root at
their event.

## Reviews display
Driven by a **`Reviews` CMS collection** + a repeater (free — no paid app). Schema in
[`velo/README.md`](../../velo/README.md); build steps in [runbook 10](../../docs/runbooks/10-content-pages.md).
- Show a grid/carousel of individual reviews, optionally a featured quote up top.
- Each card: stars (`rating`), `quote`, reviewer name (first + last initial), and (optional) `eventType`.
- Keep it to a clean grid; quality over volume.

`TODO(owner)`: add your real reviews (Google, past clients, social DMs) as items in the `Reviews`
collection. Aim for 6–12 strong ones to launch.

## Featured quote (optional)
`TODO(owner)`: pull one standout line to feature large at the top (real quote only).

## Leave a review
An optional on-page form lets happy clients submit a review (name, rating, quote). It's powered by
Velo (`velo/pages/reviews.page.js` → `velo/backend/reviews.jsw`) and is **moderated**: submissions
save with `approved: false` and stay hidden until you approve them in the Content Manager. Build the
form fields + paste the Velo per [runbook 10](../../docs/runbooks/10-content-pages.md).

## CTA
Ready for your own five-star moment? **`Request a quote`** or **`Book an event`**.
