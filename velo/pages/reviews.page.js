/*
 * reviews.page.js — /reviews page code ("Submit a review" form)
 *
 * Backend:    velo/backend/reviews.jsw → submitReview()
 * Validation: velo/public/reviewValidation.js (shared with backend)
 * Wiring:     docs/runbooks/10-content-pages.md
 *
 * The review DISPLAY (the grid of approved reviews) is a Repeater bound to the Reviews
 * collection via a read-only Dataset, filtered to `approved = true` — that's editor config,
 * not code. This file only powers the optional "leave a review" form.
 *
 * Expected Wix element IDs (create these in the editor — exact IDs matter):
 *   #reviewerName   Text input          #consent     Checkbox
 *   #rating         Dropdown/Rating     #submitBtn   Button
 *   #quote          Text box            #formGroup   Container (the form)
 *   #eventType      Dropdown (optional) #thanksState Container (success, hidden)
 *   #location       Text input (opt.)   #formError   Text (hidden; error summary)
 */

import { submitReview } from 'backend/reviews.jsw';
import { validateReviewPayload } from 'public/reviewValidation.js';

$w.onReady(function () {
  $w('#formError').collapse();
  $w('#thanksState').collapse();

  $w('#submitBtn').onClick(async () => {
    const payload = readForm();

    const { valid, errors } = validateReviewPayload(payload);
    if (!valid) {
      showErrors(errors);
      return;
    }

    $w('#submitBtn').disable();
    let result;
    try {
      result = await submitReview(payload);
    } catch (err) {
      console.error('review submit failed:', err);
      result = { ok: false, errors: { _form: 'Network error — please try again.' } };
    }
    $w('#submitBtn').enable();

    if (result.ok) {
      $w('#formGroup').collapse();
      $w('#formError').collapse();
      $w('#thanksState').expand();   // e.g. "Thanks! Your review will appear once we approve it."
    } else {
      showErrors(result.errors || { _form: 'Please check your details and try again.' });
    }
  });
});

function readForm() {
  return {
    reviewerName: $w('#reviewerName').value,
    rating: $w('#rating').value,
    quote: $w('#quote').value,
    eventType: $w('#eventType').value,
    location: $w('#location').value,
    consent: $w('#consent').checked
  };
}

function showErrors(errors) {
  const msgs = Object.keys(errors).map((k) => errors[k]);
  $w('#formError').text = msgs.join('  ');
  $w('#formError').expand();
}
