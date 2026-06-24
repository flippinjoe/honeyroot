# Runbook 05 — Inventory Approach (the honest one)

**Audience:** owner / ops. **Phase:** 3. **Goal:** track what's sold online accurately, approximate
consumable tracking deliberately, and be upfront about the gap.

## The core truth

> **Neither Wix nor Square is purpose-built for par-level consumable tracking** (e.g. "we need 6
> gallons of oat milk and 2,000 cups for Saturday's 150-guest wedding"). We do **not** pretend
> otherwise. Below is the chosen approximation and exactly where a dedicated tool would slot in.

## Three inventory "kinds" — handled differently

### 1. Online-sellable items → **Wix Stores, mirrored from Square**
Gift cards, prepaid packages, merch. Small list. Square is source of truth; Wix mirrors. Cadence +
reconciliation: [runbook 02 Part C](02-square-payment-provider.md). This is the only inventory the
website touches.

### 2. Day-of POS items → **Square**
Anything sold in person at the bar. Square POS + Square inventory counts. Source of truth.

### 3. Consumables (beans, syrups, cups, milk/alt-milk) → **approximation**
Not sold online, not really retail SKUs. This is the part neither tool does well.

**Chosen approximation (interim):**
- Represent consumables as **non-sold items in Square** with quantities + **low-stock alerts**, OR
  keep them out of Square entirely and use a **Notion "Par Sheet" database** (recommended interim —
  it's flexible and the owner already has Notion in the stack).
- The **Notion Par Sheet** tracks, per consumable: unit, par level, on-hand, reorder point,
  supplier, and a per-event burn estimate (cups/drinks → units). Restock decisions are made from
  this sheet, not from Wix.
- Before each event, generate a **prep list** from guest count × drinks-per-guest assumptions
  (`TODO(owner)` set the ratios). After the event, update on-hand.

**Why not fully automate it now:** the volume doesn't yet justify a dedicated F&B inventory system,
and forcing consumables into Wix/Square would create misleading "stock" numbers and double-entry.

## Where a dedicated tool slots in later

If event volume grows, introduce a purpose-built inventory/F&B tool (e.g. a hospitality inventory
app) as the **consumables source of truth**, feeding prep lists. Wix stays the storefront; Square
stays payments + POS; the new tool owns par levels. The Notion Par Sheet is the seam — replace it
without touching the website.

## ✅ Verify it worked
- Online items reconcile cleanly with Square (no consumables listed as buyable).
- A Notion Par Sheet exists with par/on-hand/reorder for each consumable (`TODO(owner)` populate).
- A repeatable per-event prep-list method is written down.
- The README/architecture docs state the limitation honestly (they do — keep it that way).
