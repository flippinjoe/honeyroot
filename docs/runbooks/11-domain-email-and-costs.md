# Runbook 11 — Domain, Branded Email & Keeping Costs Down

**Audience:** owner. **Phase:** 0–1 (pre-launch setup). **Goal:** get a custom domain + a branded
email address live for the lowest sensible cost, without locking everything into one vendor.

> **Money principle for this site:** the domain is the one asset to keep portable; payments stay in
> **Square** (your single processor — see [runbook 02](02-square-payment-provider.md)); the Wix plan
> is the main recurring cost, so size it to what you actually use.
>
> ⚠️ **Prices below are approximate and change.** Confirm the live numbers in your **Wix dashboard**
> and at **dash.cloudflare.com** before committing. Values marked `TODO(owner)` come from your own
> dashboards.

---

## 1. Pick the cheapest Wix plan that fits (biggest cost lever)

The plan cost is driven by **two needs only**: connecting a custom domain, and taking payments on
the website. Map your situation:

| Plan (approx, billed annually) | Custom domain | Removes Wix ads | On-site payments / Bookings-with-payment |
| --- | --- | --- | --- |
| **Light** — ~$17/mo (~$200/yr) | ✅ | ✅ | ❌ |
| **Core** — ~$29/mo (~$350/yr) | ✅ | ✅ | ✅ |
| **Business** — ~$36/mo (~$430/yr) | ✅ | ✅ | ✅ + more |

- **Choose Light** if you stay **quote-first** and collect deposits via **Square invoices/links**
  (see §4). This site is already built that way: two event bars are quote-only, and the bookable
  latte is **no-fee**. Light is the cheapest option that still gives a custom domain + no ads.
- **Choose Core** only when you specifically want guests to **pay/deposit on the website itself**.
- A promo (e.g. **$240/yr**) is usually a **first-year** rate — it renews higher. `TODO(owner)`:
  in **Wix dashboard → Subscriptions / Premium Plans**, confirm which tier your promo is and whether
  it lists "Accept payments." If it's Core and you don't need on-site payment yet, **downgrade to
  Light** to save.

---

## 2. Register the domain at Cloudflare (portable + cheap)

Buying at Cloudflare keeps the domain decoupled from Wix (no lock-in, at-cost renewals) and enables
free branded-email forwarding in §3.

1. At **dash.cloudflare.com → Domain Registration → Register Domains**, search and buy your domain
   (`TODO(owner)`: e.g. `honeyrootcoffeeco.com`). Cloudflare sells at cost, no renewal markup.
2. Cloudflare automatically manages the domain's **DNS** (this is what makes §3 work). Leave the
   nameservers on Cloudflare.

> Prefer one dashboard and zero DNS fiddling? You can instead buy the domain **through Wix** (often
> free year one, pricier renewal, more coupled). If you do, skip §2–§3's Cloudflare specifics and let
> Wix auto-configure email via Google Workspace.

---

## 3. Connect the domain to Wix — use the **pointing** method

To keep DNS (and the free email routing) at Cloudflare, connect via A/CNAME records, **not** by
moving nameservers to Wix.

1. In **Wix dashboard → Settings → Domains → Connect a domain you already own → Connect via
   pointing** (A record / CNAME), for `TODO(owner): yourdomain.com`.
2. Wix shows the exact records to add — typically an **A record** for the root (`@`) to a Wix IP and
   a **CNAME** for `www`. `TODO(owner)`: copy the exact values Wix displays (don't hardcode — they
   change).
3. In **Cloudflare → DNS → Records**, add those A/CNAME records. Set the Cloudflare proxy to
   **"DNS only"** (grey cloud) for the Wix records unless Wix says otherwise.
4. Wait for verification + SSL to provision (can take a few hours).

> If the pointing method misbehaves (apex/SSL quirks happen with Wix), the fallback is to use **Wix
> nameservers**. You keep Cloudflare *registration* (still portable, still cheap) but lose Cloudflare
> DNS/email-routing — in that case set up email via Google Workspace/Zoho (§3 alt) instead.

---

## 3b. Branded email — `hello@yourdomain.com`

Wix does **not** host mailboxes. Pick one route:

### Cheapest: Cloudflare Email Routing (free forwarding) — needs DNS at Cloudflare (§2–3)
1. **Cloudflare → your domain → Email → Email Routing → Enable.** Cloudflare auto-adds the required
   **MX** + **SPF** records.
2. Add a route: `hello@yourdomain.com` → your real inbox (`TODO(owner)`, e.g.
   `honeyrootcoffeeco@gmail.com`). Add others as needed (`bookings@`, `events@`).
3. To **send as** the branded address, add it in Gmail → **Settings → Accounts → "Send mail as."**
4. Add **DKIM** + a **DMARC** TXT record for deliverability (see below).

### Full mailbox: Google Workspace, Microsoft 365, or Zoho
- Buy the mailbox (Zoho has a free small tier; Google Workspace ~$6/user/mo), then add **its** MX +
  SPF + DKIM + DMARC records in Cloudflare DNS. Only **one** provider's MX can be active at a time.
- If you bought the domain through Wix instead, Wix can provision **Google Workspace** and set the
  records for you.

### Deliverability (do this regardless — your quotes/confirmations depend on it)
Add in DNS: **SPF** (TXT), **DKIM** (from the mail provider), **DMARC** (TXT, e.g.
`v=DMARC1; p=none; rua=mailto:hello@yourdomain.com`). Without these, event quotes may land in spam.

---

## 4. Collect deposits with Square invoices (lets you stay on Light)

So you don't need a commerce-tier Wix plan just to take money:
1. After a quote, in **Square dashboard → Invoices → Create invoice**, add the deposit line item and
   send it to the client (or use a **Square payment link**).
2. Payment lands in your existing Square account — same place as POS/in-field sales.
3. The website's job is just to **capture the lead** (quote form) and **route to Square**; the money
   never has to flow through Wix. See [runbook 04](04-invoices-and-receipts.md).

---

## ✅ Verify it worked
- [ ] Wix plan matches your need (Light if quote-first + Square invoices; Core only if on-site payments).
- [ ] `yourdomain.com` and `www` resolve to the Wix site with a valid SSL padlock.
- [ ] DNS is still managed at **Cloudflare** (nameservers unchanged) if you want free email routing.
- [ ] `hello@yourdomain.com` forwards to your real inbox, and you can **send as** it.
- [ ] SPF, DKIM, and DMARC records exist; a test email to Gmail lands in the inbox, not spam.
- [ ] A test **Square invoice** sends and pays into the Square account.
- [ ] `assets/manifest.json` `contact.email` and `content/pages/contact.md` updated to the branded
      address (and Wix **Business Info** email) once it's live.
