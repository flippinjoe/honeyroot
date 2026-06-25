# Runbook 10 — Add the About, Instagram, and Reviews Pages

**Audience:** owner / site admin. **Phase:** 1–3. **Goal:** add three pages to the live Wix site:
**About**, **Instagram**, and **Reviews**.

> **No Shop page.** Native Wix Stores checkout requires a Premium plan, which we're not adopting. If
> you want to sell gift cards/merch, the free option is a **"Shop on Square" link in the footer** to
> your Square Online store (keeps every sale in Square) — see §4.

> **Why a runbook:** pages, their layout, and their place in the site menu are built in the **Wix
> Editor** — the API can't create editor pages. Each page's copy lives in `content/pages/` (the
> source of truth); this runbook is how you put it on the site. Keep it clean and mobile-first, and
> make sure every page ends in a **Book** or **Request a Quote** CTA.

## 0. Add the pages and menu (do once)
1. In the **Wix Editor**, open the **Pages** panel (**Menus & Pages**).
2. Add three blank pages: **About**, **Instagram**, **Reviews**.
3. Keep the top nav to ~5 items (cleanliness): **Home · Services · Menus · Gallery · About**.
   Put **Reviews** and **Instagram** in the **header overflow ("More")** or the **footer**
   so the bar stays uncluttered (matches [`docs/site-map.md`](../site-map.md)).

---

## 1. About  →  copy in [`content/pages/about.md`](../../content/pages/about.md)
1. Build sections: **Our story**, **The baristas**, **What "elevated guest experience" means**,
   **Sourcing & values**, then a **Request a Quote** CTA.
2. `TODO(owner)`: fill the real story, team names/photos, and sourcing notes — don't ship the
   placeholders. This page is about trust, so real faces matter.

## 2. Instagram  →  copy in [`content/pages/instagram.md`](../../content/pages/instagram.md)
1. Add Wix's **Instagram Feed** element (App Market → "Instagram Feed") and connect
   **@honeyrootcoffeeco** (see [runbook 07](07-instagram-feed.md)).
2. Show 6–12 recent posts in a clean grid + a **Follow** button.
3. Lazy-load below the fold; add a static fallback grid in case the feed fails.

## 3. Reviews  →  copy in [`content/pages/reviews.md`](../../content/pages/reviews.md)
Free, no app: a **`Reviews` CMS collection** + a repeater. Schema is in
[`velo/README.md`](../../velo/README.md).
1. **Create the collection** (one-time). In **Content Manager → Create Collection**, name it
   **Reviews**, set permissions to **public read / admin write**, and add the fields from the schema:
   `reviewerName` (Text), `rating` (Number), `quote` (Text), `eventType` (Text), `eventDate` (Date),
   `location` (Text), `photo` (Image), `source` (Text), `featured` (Boolean), `displayOrder` (Number).
   *(This can also be created via the Wix Data API — ask and I'll run it once the Wix connection is
   approved.)*
2. **Add the page UI:** drop a **Repeater** on the Reviews page and connect it to the Reviews
   collection via a **Dataset**. Bind: stars←`rating`, text←`quote`, name←`reviewerName`,
   tag←`eventType`, image←`photo`. Sort by `displayOrder` (and/or filter `featured` for a top slot).
3. `TODO(owner)`: add 6–12 **real** reviews as collection items (clients, Google, DMs). Never use
   invented testimonials.
4. Optionally add a Wix **Form** that writes to the collection so clients can submit a review.

## 4. Purchases (optional, free — no Shop page)
There's intentionally no Shop page (a native cart needs Premium). If you want to sell gift
cards/merch at no cost, link out to your existing **Square Online** store:
1. In the **footer** (or About page), add a small text link/button **"Gift cards / Shop on Square"**.
2. Link it to your **Square Online store URL** (`TODO(owner)`: Square Dashboard → Online → your site),
   set to **open in a new tab**.
3. That's it — all sales, receipts, and inventory stay in Square; no Wix plan upgrade.

> If you ever adopt a Premium plan and want a native on-site cart, that's a **Wix Stores** project
> (still paid via Square as the Wix payment provider) — say the word and we'll scope it.

---

## ✅ Verify it worked (on a phone)
- [ ] All three pages exist and are reachable (nav for About; overflow/footer for Reviews + Instagram).
- [ ] **About** has the real story/team (no placeholder text).
- [ ] **Instagram** shows the live @honeyrootcoffeeco feed with a Follow button + fallback.
- [ ] **Reviews** shows real reviews from the `Reviews` collection; no invented quotes.
- [ ] (Optional) a free **"Shop on Square"** footer link opens the Square store in a new tab.
- [ ] Every page ends in a **Book** or **Request a Quote** CTA.
