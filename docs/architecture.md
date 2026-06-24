# Architecture — Wix ⇄ Square

How the two platforms divide responsibility, where money flows, and what data syncs where.

## Responsibility split

| Capability | Owner | Notes |
| --- | --- | --- |
| Website / pages / SEO | **Wix** | |
| Event booking (self-serve) | **Wix Bookings** | Path A. |
| Quote/inquiry intake | **Wix + Velo** | Path B custom form + logic. |
| Invoices & receipts | **Wix Invoices** | Automated receipts, manual/recurring invoices. |
| Blog | **Wix Blog** | |
| Instagram feed | **Wix** (embed) | |
| **Payment processing** | **Square** | Wix uses Square as its **payment provider**. |
| **In-field POS** (day-of sales at events) | **Square** | Square terminal/app at the bar. |
| **Event / consumable inventory (source of truth)** | **Square** | Plus the approximation in [runbook 05](runbooks/05-inventory-approach.md). |
| Online-sellable items (gift cards, prepaid packages, merch) | **Wix Stores**, mirroring Square | Phase 3, optional. |

## Money flow (single processor)

```
Online deposit / booking payment (Wix Bookings, Wix Invoices)
        │
        ▼
   Square (payment provider connected to Wix)
        ▲
        │
In-person sales at the event (Square POS / terminal)
```

**Everything settles into the one existing Square account.** We do **not** add a second processor.
This keeps payouts, fees, refunds, and reporting unified in Square. Setup: [runbook 02](runbooks/02-square-payment-provider.md).

## Data flow & sync

```
┌────────────────────┐        payment provider         ┌────────────────────┐
│        WIX         │ ──────── (deposits, invoices) ──▶ │       SQUARE        │
│                    │                                   │  (payments + POS +  │
│  Bookings          │                                   │   inventory truth)  │
│  Invoices          │ ◀── catalog mirror (manual/      │                     │
│  Stores (mirror)   │      scheduled) for online items │  Catalog / Items    │
│  Blog / Pages      │                                   │  Inventory counts   │
│  Velo collections  │                                   │                     │
└────────────────────┘                                   └────────────────────┘
        │                                                          ▲
        │  QuoteRequests, Bookings stored in Wix collections       │
        ▼                                                          │
   Owner workflow / Notion tracker  ───────── reconcile ───────────┘
```

### Sync rules

1. **Payments are real-time** via the Square payment-provider connection (no custom code).
2. **Catalog/inventory is *not* automatically two-way.** Square is the source of truth. Wix Stores
   should mirror **only the small set of online-sellable items** (gift cards, prepaid packages,
   merch). Mirroring is **manual or scheduled**, not live — keep the online list short so it's easy
   to reconcile. Detail + cadence: [runbook 05](runbooks/05-inventory-approach.md).
3. **Consumables (beans, syrups, cups, milk/alt-milk) are not retail SKUs.** They are tracked for
   *operations*, not sold online. Square inventory + low-stock alerts is the baseline; a Notion par
   sheet is the interim approximation. **Neither tool is purpose-built for par-level consumable
   tracking** — this is documented honestly, with a slot for a dedicated tool later.

## Where custom code (Velo) is justified

- Quote-form validation, storage (`QuoteRequests` collection), and owner notification (Path B).
- Any glue between Wix events and external services (e.g. push a quote/booking into Notion).
- Conditional logic the editor can't express (e.g. routing by guest-count threshold).

Everything else (payment connection, Bookings services, Invoice templates, Blog, Instagram embed)
is **configuration** — see the runbooks.

## Known limitation (state it plainly)

Par-level consumable inventory is **not solved** by Wix or Square out of the box. We choose an
approximation (Square items + alerts, mirrored to a Notion par sheet) and flag exactly where a
dedicated F&B/inventory tool would slot in if/when volume justifies it.
