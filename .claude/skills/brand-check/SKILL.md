---
name: brand-check
description: Review a page, section, or proposed change against Honey Root's brand and platform principles before it ships. Use whenever building or editing a Wix page/section, drafting copy, or reviewing a design — checks visual cleanliness, mobile-first, single clear CTA, the two-booking-paths model, and the single-processor (Square) rule.
---

# Brand Check

Run this checklist against any page/section/copy/design for Honey Root Coffee Co. Flag every
miss with a concrete fix. This is a hospitality brand on Wix — clutter is the enemy.

## Visual cleanliness
- [ ] ≤ 2 fonts, ≤ ~4 colors (matches `assets/manifest.json` + Wix theme)?
- [ ] Generous whitespace; sections breathe; no wall-of-elements?
- [ ] Consistent photography style (not a mix of stock + snapshots)?
- [ ] No leftover template clutter (stray widgets, demo text, default Wix styling)?

## Mobile-first
- [ ] Designed/verified on mobile **before** desktop?
- [ ] Primary CTA visible without excessive scrolling?
- [ ] Tap targets large enough; text readable without zoom?

## Conversion
- [ ] Exactly one clear primary action per screen (Book **or** Quote)?
- [ ] The page ends in a CTA — no dead ends?
- [ ] Standard/small events → **Book**; large/custom → **Quote**, never merged or ambiguous?

## Platform principles
- [ ] Payments route to **Square only** — no second processor introduced?
- [ ] Anything doable in the Wix editor is a **runbook**, not Velo code?
- [ ] No business facts invented — placeholders are `TODO(owner)`?
- [ ] Inventory claims are honest (no implied par-level tracking)?

## Output
List issues as `severity · location · fix`. If clean, say so plainly. Cross-reference
`docs/site-map.md`, `docs/booking-paths.md`, and `CLAUDE.md` when relevant.
