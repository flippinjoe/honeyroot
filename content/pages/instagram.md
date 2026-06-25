---
page: Instagram
route: /instagram
status: review
last_reviewed: 2026-06-25
primary_cta: [quote, book]
---

# Instagram

> Voice: light, social, current. The feed does the talking. Mobile-first; ends on a CTA.

## Intro
See Honey Root in the wild — bars styled for the moment, drinks in hand, and the events we've been
part of. Follow along at **[@honeyrootcoffeeco](https://www.instagram.com/honeyrootcoffeeco/)**.

## Live feed
Embed the **@honeyrootcoffeeco** Instagram feed (see
[runbook 07](../../docs/runbooks/07-instagram-feed.md) and [runbook 10](../../docs/runbooks/10-content-pages.md)).
- 6–12 recent posts in a clean grid.
- A clear **Follow** button to the profile.
- Lazy-load below the fold so it doesn't slow the page on mobile.

## Fallback
`TODO(owner)`: if the live feed fails to load, fall back to a curated static grid from
[`assets/manifest.json`](../../assets/manifest.json) → `social.fallback_grid` so the page never looks broken.

## CTA
Like what you see? **`Request a quote`** or **`Book an event`** and let's create yours.
