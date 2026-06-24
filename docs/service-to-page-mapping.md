# Service → Page/Section Mapping

The 9 listed services, each mapped to a **primary** home (where it's fully expressed) and
**secondary** touchpoints (where it's reinforced). This guarantees every service has an owner on
the site and nothing is orphaned.

| # | Service | Primary location | Secondary touchpoints | How it's expressed |
| --- | --- | --- | --- | --- |
| 1 | **Mobile espresso bar** | Home hero + `Services` (lead section) | Gallery, About | The headline offering. Hero one-liner + a Services section with photos of the bar set up at events. |
| 2 | **Professional barista service** | `Services` | `About` (the baristas, with faces), Quote form | "Trained, friendly baristas" section; humanized on About to build trust. |
| 3 | **Handcrafted espresso beverages** | `Menus` | Home (menu peek), Gallery | Core menu list with appetizing descriptions + drink photography. |
| 4 | **Hot & iced drink options** | `Menus` (toggle/columns) | Home, Quote form (preference field) | Menu organized so guests see both hot and iced; captured as a preference in the quote. |
| 5 | **Milk & alternative-milk options** | `Menus` (options block) | Quote form (dietary/alt-milk field) | "Whole, oat, almond, …" options block; alt-milk needs captured at quote time. |
| 6 | **Custom drink menus** | `Menus` (explainer) + `Quote` flow | Home "How it works" | "We'll design a menu for your event/brand" → routed into the quote (custom-menu request field). |
| 7 | **Setup & breakdown** | `Services` ("How it works" / logistics) | `Contact` FAQ, Booking/Quote logistics fields | Reassurance that Honey Root handles full setup + teardown; surfaces space/power/water needs. |
| 8 | **Elevated guest experience** | Home + `Services` | `About`, Gallery, testimonials | The emotional throughline — woven into hero copy, a Services section, and proof imagery. |
| 9 | **Personalized event branding** | `Services` (add-on) + `Quote` flow | Gallery (branded examples), Shop | "Custom cups, signage, branded bar" add-on; captured as a branding field in the quote; shown via examples. |

## Notes

- Services **1, 2, 7, 8** are *capabilities* → they live mainly on **Services** (with proof on
  About/Gallery). They reassure and differentiate.
- Services **3, 4, 5** are *the menu* → they live on **Menus**, sourced from
  [`content/menus/drink-menu.json`](../content/menus/drink-menu.json).
- Services **6 and 9** are *customization* → they are both **content** (explained on the page)
  **and data** (captured as fields in the [quote flow](booking-paths.md)), because they directly
  shape the per-event quote.

## Coverage check

Every service maps to at least one primary page, and the three pages doing the heaviest lifting
are **Services**, **Menus**, and the **Quote flow** — which aligns with the events-first,
quote-driven nature of the business.
