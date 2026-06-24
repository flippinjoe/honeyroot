# Booking Paths — Design & Data Capture

Honey Root needs **two distinct booking paths** because it serves two different buyers. Do not
merge them into one form — they have different intents, different effort levels, and different
back-office handling.

```
                         ┌─────────────────────────────────────────────┐
   Visitor lands ───────▶│  "Book ▸"  →  choose your path               │
                         └───────────────┬─────────────────┬───────────┘
                                         │                 │
                  Standard / small event │                 │ Large / variable / custom
                                         ▼                 ▼
                              PATH A: Instant Booking   PATH B: Custom Quote
                              (Wix Bookings)            (Lead form → Velo → owner)
                                         │                 │
                              deposit via Square          manual quote → Wix Invoice
                                         │                 │  → deposit via Square
                                         ▼                 ▼
                              auto receipt + confirm     quote accepted → invoice + receipt
```

---

## Path A — Instant self-serve booking (Wix Bookings)

**For:** small/standard gigs that fit a predefined package (e.g. a 2–4 hour bar, guest count
under a set threshold, within the standard service radius).

**Why self-serve:** these are predictable and don't need a human to price. Let the client book and
pay a deposit in one sitting.

**Mechanism:** Wix Bookings service per package + **deposit/payment via Square** (see
[runbook 02](runbooks/02-square-payment-provider.md) and [runbook 03](runbooks/03-wix-bookings-setup.md)).

### Data captured (Path A)

| Field | Type | Notes |
| --- | --- | --- |
| Package / service | select | The Wix Bookings service (e.g. "3-hr Mobile Bar — up to 75 guests"). `TODO(owner)` for the real packages. |
| Event date & start time | datetime | Subject to availability + lead-time buffer. |
| Duration | derived/select | Usually fixed by the package. |
| Estimated guest count | number/tier | Validated against the package's cap. |
| Event location (address + ZIP) | text | Used to confirm it's inside the standard service radius. |
| Indoor/outdoor + power/water available | yes/no | Operational must-knows for setup. |
| Contact: name, email, phone | text | |
| Add-ons | multi-select | e.g. extra hour, alt-milk pack, basic branding. |
| Notes | textarea | |
| **Deposit payment** | payment | Processed via **Square** as the Wix payment provider. |

**On submit:** booking is created in Wix Bookings → deposit charged via Square → **automated
confirmation + receipt** emailed → owner notified → event appears on the Wix booking calendar.

**Escape hatch:** if the visitor's needs exceed the package caps (guest count, travel, custom
menu/branding), the UI nudges them to **Path B** instead.

---

## Path B — Custom quote / inquiry (lead form → Velo)

**For:** large or variable events — weddings, big corporate activations, multi-bar setups, heavy
customization, out-of-radius travel, custom menus or branding.

**Why a quote:** price depends on too many variables to self-serve. Capture rich detail, let the
owner price it, then send a real invoice.

**Mechanism:** a structured **lead form**. Custom validation/routing/notification logic lives in
[`/velo`](../velo) (quote-form handler). Output → owner builds a quote → **Wix Invoice** with the
**deposit routed to Square** (see [runbook 04](runbooks/04-invoices-and-receipts.md)).

### Data captured (Path B)

| Field | Type | Notes |
| --- | --- | --- |
| Event type | select | Wedding · corporate · private party · brand activation · other. |
| Event date(s) | date(s) | Allow date ranges / multi-day. |
| Flexible on date? | yes/no | Helps with availability negotiation. |
| Venue / location (city + ZIP, venue name) | text | Drives travel/logistics pricing. |
| Estimated guest count | number | Primary cost driver. |
| Desired duration / service window | text | |
| Drink preferences | multi-select | Hot, iced, espresso classics, signature drinks. *(services 3,4)* |
| Milk / alt-milk needs | multi-select | Whole, oat, almond, lactose-free, etc. *(service 5)* |
| **Custom drink menu** request | textarea | "Describe the menu you imagine." *(service 6)* |
| **Personalized branding** | multi-select + notes | Branded cups, signage, branded bar, color theme. *(service 9)* |
| Setup constraints | text | Indoor/outdoor, power, water, load-in access. *(service 7)* |
| Budget range | select | Optional but qualifies the lead. |
| How did you hear about us? | select | Attribution (Instagram, referral, search, …). |
| Contact: name, email, phone, company | text | |
| Consent to be contacted | checkbox | |

**On submit (Velo logic):** validate → store in a Wix collection (`QuoteRequests`) → email/notify
the owner (and optionally create a Notion record / calendar hold) → show the visitor a clear
"thanks, we'll reply within X business hours" confirmation. **No payment is taken at this step** —
the deposit is collected later via the Wix Invoice → Square.

---

## Why two paths (summary)

| | Path A — Book | Path B — Quote |
| --- | --- | --- |
| Buyer | Knows what they want, standard gig | Big/complex, needs guidance |
| Pricing | Fixed package | Custom |
| Payment timing | Deposit at booking | Deposit after quote accepted (invoice) |
| Effort for client | Low (minutes) | Medium (richer form) |
| Back office | Automated | Owner-priced |
| Tooling | Wix Bookings + Square | Velo form + Wix Invoices + Square |

Both deposits and payments **settle into the existing Square account** — see
[architecture.md](architecture.md).
