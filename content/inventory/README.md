# Consumables Par Sheet (interim inventory approximation)

This operationalizes [`docs/runbooks/05-inventory-approach.md`](../../docs/runbooks/05-inventory-approach.md).
It is **not** a real-time inventory system — neither Wix nor Square does par-level consumable
tracking, and we don't pretend otherwise. This is a deliberate, low-tech approximation the owner can
run in Notion or a spreadsheet today, and replace with a dedicated tool later without touching the
website.

## Files
- [`par-sheet.csv`](par-sheet.csv) — importable template (Notion DB or Google Sheet). Rows are
  **EXAMPLES**; replace values with real ones (`TODO(owner)`).

## How to use it
1. Import `par-sheet.csv` into a **Notion database** (the project's Notion is in `.mcp.json`) or a sheet.
2. Maintain, per consumable: `unit`, `par_level`, `on_hand`, `reorder_point`, `supplier`,
   `per_drink_usage`.
3. Restock when `on_hand` ≤ `reorder_point`. Update `on_hand` after each event.

## Per-event prep formula
```
estimated_drinks = guests × drinks_per_guest
required(item)   = estimated_drinks × per_drink_usage(item)
to_pack(item)    = max(0, required − on_hand_reserved_for_event)
```
- `drinks_per_guest`: planning assumption — `TODO(owner)` (a common starting point is ~1.5–2 over a
  2–3 hour service; tune from real events).
- Generate a **pack list** per event from `required(item)`; reconcile `on_hand` afterward.

## Where a dedicated tool slots in later
When volume justifies it, a purpose-built F&B/inventory app becomes the **consumables source of
truth** and feeds the prep list. Wix stays the storefront, Square stays payments + POS, and this par
sheet is the seam you replace. Until then, this is the honest, working approximation.
