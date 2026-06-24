/*
 * packages.js — standard booking packages + guest-count routing (Path A)
 *
 * Used by: velo/pages/book.page.js
 * Source of truth for the owner-facing definitions: content/packages/packages.json.
 * KEEP IN SYNC with that file (names + guestMax especially). Prices live in Wix Bookings,
 * not here — this module only does guest-count → package routing.
 */

export const PACKAGES = [
  { id: 'petite', name: 'Petite Bar', durationHours: 2, guestMax: 50 },
  { id: 'signature', name: 'Signature Bar', durationHours: 3, guestMax: 100 },
  { id: 'grand', name: 'Grand Bar', durationHours: 4, guestMax: 150 }
];

/**
 * Recommend a package for a guest count, or route to the custom quote when it's too large.
 * @param {number|string} guestCount
 * @returns {{ kind: 'invalid'|'package'|'quote', package?: object, message: string }}
 */
export function recommendPackage(guestCount) {
  const n = Number(guestCount);
  if (!Number.isFinite(n) || n <= 0) {
    return { kind: 'invalid', message: 'Enter your estimated guest count to see the right package.' };
  }

  const match = PACKAGES.find((p) => n <= p.guestMax);
  if (!match) {
    const max = PACKAGES[PACKAGES.length - 1].guestMax;
    return {
      kind: 'quote',
      message: `For ${n} guests (over ${max}), a custom quote is the best fit — we'll tailor a bar to your event.`
    };
  }

  return {
    kind: 'package',
    package: match,
    message: `The ${match.name} (up to ${match.guestMax} guests, ${match.durationHours} hrs) is a great fit for ${n} guests.`
  };
}
