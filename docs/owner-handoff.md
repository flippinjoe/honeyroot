# Owner Handoff — Start Here

You're looking at the project repository for the Honey Root Coffee Co. website. An agent has
scaffolded the structure, written the plan, drafted the copy, and built the custom code that Wix
can't do on its own. **This page is your order of operations** — what to do, in what order, to get
the site live. You don't need to be an engineer; the runbooks are written for you.

> Living status lives in [`plan/checklist.md`](../plan/checklist.md). The full roadmap is
> [`plan/phased-plan.md`](../plan/phased-plan.md).

## What's already done (in this repo)
- The **site structure** (pages + navigation): [`docs/site-map.md`](site-map.md)
- **Draft copy** for every page: [`content/pages/`](../content/pages/) (marked `status: review`)
- The **two booking paths** + the exact form fields: [`docs/booking-paths.md`](booking-paths.md)
- The **custom code** for the quote form + booking helper: [`velo/`](../velo/) (ready to paste in)
- **Runbooks** for every dashboard task: [`docs/runbooks/`](runbooks/)
- **SEO text**, a **launch checklist**, and an **inventory par sheet** template

## Step 0 — Gather these facts first
The copy has clearly-marked blanks (`TODO(owner)`) only where a real business fact is needed.
Collect these and we (or you) can finalize everything:

| Fact | Why it's needed |
| --- | --- |
| Service area / travel radius | Home, Services, Contact copy + SEO |
| Booking lead time (min. notice) | Contact + Bookings |
| Deposit & cancellation policy | Contact FAQ + invoices |
| Quote reply time (e.g. 24 business hrs) | Quote page + confirmation |
| Contact email & phone | Contact + the owner-notification email |
| Package prices & deposits | [`content/packages/packages.json`](../content/packages/packages.json) → Wix Bookings |
| Signature/seasonal drinks + full alt-milk list | Menus |
| Story, baristas, sourcing | About |
| Testimonials + event photos | Home, Gallery |
| Brand palette & fonts | [`assets/manifest.json`](../assets/manifest.json) + Wix theme |

## Order of operations (follow the runbooks in order)

**Phase 1 — get a credible site live that captures leads**
1. [Runbook 01](runbooks/01-wix-initial-setup.md) — set up Wix (plan, domain, brand kit, page skeleton).
2. [Runbook 02](runbooks/02-square-payment-provider.md) — connect **Square** as the payment provider.
3. Build the pages in the Wix editor using the drafted copy in [`content/pages/`](../content/pages/).
4. [Runbook 08](runbooks/08-quote-form.md) — create the `QuoteRequests` collection, paste the Velo
   code, wire the quote form, and turn on the owner-notification email.

**Phase 2 — take bookings & payments**
5. [Runbook 03](runbooks/03-wix-bookings-setup.md) — create the Bookings packages (from
   `packages.json`) + the "which package?" helper; deposits via Square.
6. [Runbook 04](runbooks/04-invoices-and-receipts.md) — automated receipts + branded invoices;
   the quote → invoice → deposit flow.

**Phase 3 — content & commerce**
7. [Runbook 05](runbooks/05-inventory-approach.md) — set up the consumables par sheet (Notion);
   mirror only online items (gift cards/merch) to Wix Stores.
8. [Runbook 06](runbooks/06-blog-setup.md) — launch the blog.
9. [Runbook 07](runbooks/07-instagram-feed.md) — embed the Instagram feed.

**Phase 4 — polish & launch**
10. Work through [`docs/launch-checklist.md`](launch-checklist.md) (mobile, cleanliness, SEO from
    [`content/seo.md`](../content/seo.md), performance, accessibility, go-live).

## The rules that keep this on-brand (don't break these)
- **All money goes into the one Square account** — never add a second processor.
- **Two clearly-labeled booking doors** — "Book" (standard) and "Request a quote" (custom). Never merge.
- **Clean and mobile-first** — few fonts, lots of whitespace, design for phones first.
- **Be honest about inventory** — the par sheet is an approximation, not real-time tracking.

## Working with an AI agent on this repo later
The project ships with an agent guide ([`CLAUDE.md`](../CLAUDE.md)) and skills in
[`.claude/skills/`](../.claude/skills/), plus connectors for **Wix, Canva, and Notion** in
[`.mcp.json`](../.mcp.json) (you'll authenticate each on first use). Just open the repo in Claude
Code and ask — it will follow the rules above.
