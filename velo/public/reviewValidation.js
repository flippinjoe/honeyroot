/*
 * reviewValidation.js — shared review-submission validation (client + server)
 *
 * Used by:
 *   - velo/pages/reviews.page.js        (client-side, before submit)
 *   - velo/backend/reviews.jsw          (server-side, authoritative)
 * Keeping the rules here means client and server never disagree.
 *
 * Collection: Reviews (schema in velo/README.md).
 */

import { isNonEmpty } from 'public/validation.js';

export function isValidRating(v) {
  const n = Number(v);
  return Number.isInteger(n) && n >= 1 && n <= 5;
}

/**
 * Validate a review submission payload.
 * @returns {{ valid: boolean, errors: Object<string,string> }}
 */
export function validateReviewPayload(payload) {
  const errors = {};
  const p = payload || {};

  if (!isNonEmpty(p.reviewerName)) errors.reviewerName = 'Please tell us your name.';
  if (!isValidRating(p.rating)) errors.rating = 'Please choose a rating from 1 to 5 stars.';
  if (!isNonEmpty(p.quote)) errors.quote = 'Please write a few words about your experience.';
  else if (String(p.quote).trim().length < 10) errors.quote = 'Please add a little more detail (at least 10 characters).';
  if (p.consent !== true) errors.consent = 'Please agree to have your review shown on our site.';

  return { valid: Object.keys(errors).length === 0, errors };
}
