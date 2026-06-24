/*
 * quote.page.js — /quote page code (Path B lead form)
 *
 * Backend:    velo/backend/quoteRequests.jsw → submitQuoteRequest()
 * Validation: velo/public/validation.js (shared with backend)
 * Wiring:     docs/runbooks/08-quote-form.md
 *
 * Expected Wix element IDs (create these in the editor — exact IDs matter):
 *   #eventType        Dropdown            #setupConstraints Text box
 *   #eventDates       Text input          #budgetRange      Dropdown
 *   #dateFlexible     Checkbox/Switch     #referralSource   Dropdown
 *   #venueLocation    Text input          #contactName      Text input
 *   #guestCount       Number input        #contactEmail     Text input
 *   #duration         Text input          #contactPhone     Text input
 *   #drinkPreferences Checkbox group      #company          Text input
 *   #milkOptions      Checkbox group      #consent          Checkbox
 *   #customMenuNotes  Text box            #submitBtn        Button
 *   #branding         Checkbox group
 *   #formGroup        Container (the form)        #thanksState  Container (success, hidden)
 *   #formError        Text (hidden; shows error summary)
 */

import { submitQuoteRequest } from 'backend/quoteRequests.jsw';
import { validateQuotePayload } from 'public/validation.js';

$w.onReady(function () {
  $w('#formError').collapse();
  $w('#thanksState').collapse();

  $w('#submitBtn').onClick(async () => {
    const payload = readForm();

    const { valid, errors } = validateQuotePayload(payload);
    if (!valid) {
      showErrors(errors);
      return;
    }

    $w('#submitBtn').disable();
    let result;
    try {
      result = await submitQuoteRequest(payload);
    } catch (err) {
      console.error('quote submit failed:', err);
      result = { ok: false, errors: { _form: 'Network error — please try again.' } };
    }
    $w('#submitBtn').enable();

    if (result.ok) {
      $w('#formGroup').collapse();
      $w('#formError').collapse();
      $w('#thanksState').expand();
    } else {
      showErrors(result.errors || { _form: 'Please check your details and try again.' });
    }
  });
});

function readForm() {
  return {
    eventType: $w('#eventType').value,
    eventDates: $w('#eventDates').value,
    dateFlexible: $w('#dateFlexible').checked,
    venueLocation: $w('#venueLocation').value,
    guestCount: $w('#guestCount').value,
    duration: $w('#duration').value,
    drinkPreferences: $w('#drinkPreferences').value,
    milkOptions: $w('#milkOptions').value,
    customMenuNotes: $w('#customMenuNotes').value,
    branding: $w('#branding').value,
    setupConstraints: $w('#setupConstraints').value,
    budgetRange: $w('#budgetRange').value,
    referralSource: $w('#referralSource').value,
    consent: $w('#consent').checked,
    contact: {
      name: $w('#contactName').value,
      email: $w('#contactEmail').value,
      phone: $w('#contactPhone').value,
      company: $w('#company').value
    }
  };
}

function showErrors(errors) {
  const msgs = Object.keys(errors).map((k) => errors[k]);
  $w('#formError').text = msgs.join('  ');
  $w('#formError').expand();
}
