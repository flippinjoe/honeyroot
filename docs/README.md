# Docs Index

Platform setup runbooks, information architecture, and design decisions for the Honey Root
Coffee Co. site. Config-and-runbooks live here; custom code lives in [`/velo`](../velo).

## Design & architecture

| Doc | What it covers |
| --- | --- |
| [`site-map.md`](site-map.md) | Navigation, full page list, and what lives on each page. |
| [`service-to-page-mapping.md`](service-to-page-mapping.md) | Each of the 9 services → its page/section + how it's expressed. |
| [`booking-paths.md`](booking-paths.md) | The two booking paths (self-serve vs. quote) and the data each captures. |
| [`architecture.md`](architecture.md) | The Wix ⇄ Square stack: money flow, data flow, what syncs where. |

## Runbooks (`runbooks/`)

Step-by-step, dashboard-oriented guides written for the owner.

| Runbook | Phase |
| --- | --- |
| [`01-wix-initial-setup.md`](runbooks/01-wix-initial-setup.md) | 0 |
| [`02-square-payment-provider.md`](runbooks/02-square-payment-provider.md) | 0–2 |
| [`03-wix-bookings-setup.md`](runbooks/03-wix-bookings-setup.md) | 2 |
| [`04-invoices-and-receipts.md`](runbooks/04-invoices-and-receipts.md) | 2 |
| [`05-inventory-approach.md`](runbooks/05-inventory-approach.md) | 3 |
| [`06-blog-setup.md`](runbooks/06-blog-setup.md) | 3 |
| [`07-instagram-feed.md`](runbooks/07-instagram-feed.md) | 3 |
| [`08-quote-form.md`](runbooks/08-quote-form.md) | 1 |

> Runbooks contain `TODO(owner)` markers wherever a real business fact (price, radius, account
> ID, package detail) is required. Fill those in during setup — don't guess them.
