# Runbook 07 — Instagram Feed Embed

**Audience:** owner / site admin. **Phase:** 3. **Goal:** show the live Instagram
(@honeyrootcoffeeco) on the site to provide fresh social proof — without clutter.

## 1. Choose the surface
- A **Home** "follow along" strip (latest few posts), and/or
- A section on **/gallery**.
Keep it to a tidy grid; don't let it dominate the page.

## 2. Connect the feed
1. Add Wix's **Instagram Feed** element/app (Wix App Market → "Instagram Feed").
2. Connect the **@honeyrootcoffeeco** account (`TODO(owner)` authenticate the IG/Facebook account).
3. Configure: number of posts (e.g. 6–8), grid layout, spacing, and "Follow" link.

## 3. Brand & performance
1. Match spacing/margins to the rest of the site (cleanliness).
2. Lazy-load / place below the fold so it doesn't slow first paint on mobile.
3. Add a clear **@honeyrootcoffeeco** handle + Follow button.

## 4. Fallback
- If the feed widget fails to load (API hiccups happen), ensure the section degrades gracefully to
  a static curated grid from [`/assets`](../../assets) so the page never looks broken.

## ✅ Verify it worked
- The feed renders on mobile + desktop, loads recent posts, and links to the IG profile.
- It matches the site's spacing/colors and doesn't hurt mobile load.
- A static fallback exists.
