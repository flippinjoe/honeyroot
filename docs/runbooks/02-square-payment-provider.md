# Runbook 02 — Connect Square as the Wix Payment Provider (+ Inventory Reconciliation)

**Audience:** owner / site admin. **Phase:** 0–2. **Goal:** every online payment on Wix settles
into the **existing Square account**, and the small online catalog stays reconciled with Square.

> This is the most important runbook for "keep money in Square." Do not connect a second processor.

## Part A — Connect Square as Wix's payment provider

1. In the Wix dashboard go to **Settings → Accept Payments** (a.k.a. *Payments*).
2. In the list of payment providers, find **Square** and click **Connect**.
3. You'll be redirected to **Square's login** — sign in to the **existing Square account**
   (`TODO(owner)` confirm which Square login). Authorize Wix to connect.
4. Back in Wix, confirm Square shows as **Connected** and set it as the **default** payment method
   for the site.
5. Disable/decline any other processors (e.g. Wix Payments, PayPal-as-primary) so all charges route
   to Square. Optional secondary methods are fine only if they also settle to the same Square account.
6. Set the **payout/currency** settings on the Square side as desired (`TODO(owner)`).

### Verify Part A
- Put the site in test/preview and run a small real or sandbox transaction.
- Confirm the payment appears in the **Square dashboard → Transactions**.
- Confirm Wix marks the order/booking as **Paid**.

## Part B — Where payments originate (all → Square)

| Source | Trigger | Settles in |
| --- | --- | --- |
| Wix Bookings (Path A) | Client books a package + pays deposit | Square |
| Wix Invoices (Path B) | Client pays an invoice/deposit you sent | Square |
| Wix Stores (Phase 3) | Client buys gift card / prepaid / merch | Square |
| Square POS | In-person sale at the event | Square |

One account, one reporting surface.

## Part C — Inventory reconciliation (Square = source of truth)

Wix and Square do **not** keep a live two-way inventory sync out of the box. Keep it simple and
deliberate:

1. **Square owns the catalog.** Maintain all items + counts in **Square → Items & Inventory**.
2. **Mirror only online-sellable items into Wix Stores.** That's gift cards, prepaid packages, and
   any merch — a short list. Do **not** mirror consumables (beans/syrups/cups/milk); those are not
   sold online.
3. **Reconcile on a schedule, not live:**
   - When you add/relist an online item in Square, manually create/update the matching Wix Stores
     product (same name, SKU, price). `TODO(owner)` decide cadence — weekly is usually enough given
     the tiny online catalog.
   - After events, reconcile any POS sales of online items (e.g. gift cards sold day-of) so Wix
     stock reflects reality.
4. **Gift cards:** prefer issuing/redeeming through **one** system to avoid double-counting. Decide:
   sell gift cards via Square only (link out) **or** via Wix mirrored to Square — pick one.
   `TODO(owner)`.
5. **Consumables** are handled separately in [runbook 05](05-inventory-approach.md) — they are an
   operations concern, not an online catalog concern.

### Verify Part C
- Online items in Wix exactly match the corresponding Square items (name/SKU/price).
- No consumable appears as a buyable product on the website.
- A test purchase decrements the right place and shows in Square.

## Honest limitation
This is a **manual/scheduled mirror**, not real-time sync. It's acceptable because the online
catalog is intentionally tiny. If online selling grows, evaluate a Wix↔Square sync app or a
dedicated inventory tool (see [runbook 05](05-inventory-approach.md)).
