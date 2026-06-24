/*
 * validation.js — shared quote-form validation (client + server)
 *
 * Used by:
 *   - velo/pages/quote.page.js   (client-side, before submit)
 *   - velo/backend/quoteRequests.jsw (server-side, authoritative)
 * Keeping the rules here means client and server never disagree.
 *
 * Field contract: docs/booking-paths.md → Path B.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isNonEmpty(v) {
  if (Array.isArray(v)) return v.length > 0;
  if (typeof v === 'string') return v.trim().length > 0;
  return v !== null && v !== undefined;
}

export function isValidEmail(v) {
  return typeof v === 'string' && EMAIL_RE.test(v.trim());
}

export function isPositiveInt(v) {
  const n = Number(v);
  return Number.isInteger(n) && n > 0;
}

/**
 * Validate a Path B quote payload.
 * @returns {{ valid: boolean, errors: Object<string,string> }}
 */
export function validateQuotePayload(payload) {
  const errors = {};
  const p = payload || {};
  const contact = p.contact || {};

  if (!isNonEmpty(p.eventType)) errors.eventType = 'Please choose an event type.';
  if (!isNonEmpty(p.eventDates)) errors.eventDates = 'Please tell us your event date(s).';
  if (!isNonEmpty(p.venueLocation)) errors.venueLocation = 'Please tell us where the event is.';
  if (!isPositiveInt(p.guestCount)) errors.guestCount = 'Please enter an estimated guest count.';
  if (!isNonEmpty(contact.name)) errors['contact.name'] = 'Please tell us your name.';
  if (!isValidEmail(contact.email)) errors['contact.email'] = 'Please enter a valid email address.';
  if (p.consent !== true) errors.consent = 'Please agree to be contacted about your request.';

  return { valid: Object.keys(errors).length === 0, errors };
}
