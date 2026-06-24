/*
 * book.page.js — /book page code (Path A helper)
 *
 * A lightweight "which package?" helper that sits ABOVE the Wix Bookings widget. It reads a guest
 * count and either recommends a package or routes larger events to the custom quote (/quote). It
 * intentionally does NOT reach inside the Bookings widget — that widget handles its own
 * date/deposit/checkout flow (configured per runbook 03).
 *
 * Logic: velo/public/packages.js   Copy: content/pages/book.md   Wiring: runbook 03.
 *
 * Expected Wix element IDs (create in the editor):
 *   #guestCountHelper  Number input
 *   #recommendBtn      Button
 *   #recommendResult   Text (hidden on load)
 *   #quoteCallout      Container with a link/button to /quote (hidden on load)
 */

import { recommendPackage } from 'public/packages.js';

$w.onReady(function () {
  $w('#recommendResult').collapse();
  $w('#quoteCallout').collapse();

  $w('#recommendBtn').onClick(() => {
    const rec = recommendPackage($w('#guestCountHelper').value);

    $w('#recommendResult').text = rec.message;
    $w('#recommendResult').expand();

    if (rec.kind === 'quote') {
      $w('#quoteCallout').expand();
    } else {
      $w('#quoteCallout').collapse();
    }
  });
});
