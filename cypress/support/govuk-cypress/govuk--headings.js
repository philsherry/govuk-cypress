/* eslint-disable no-unused-vars */
/**
 * @author:
 * @function checkHeadings
 * @description Cypress function to check whether `h1` (and `h2` where applicable) headings are being nested with `label` and `legend` elements. If there is a paragraph of content between the heading and the first form element, then the heading should remain as a `h1` heading, followed by the `p`, and then a visually-hidden `label` and `legend` to mirror the `h1`. This is because the user is expected to read the heading and then the content that follows, which means they may forget the question by the time they get to the first form element.
 * @example cy.get("@component").checkHeadings();
 * @link https://design-system.service.gov.uk/get-started/labels-legends-headings/
 * @fixture ```html
 * <fieldset class="govuk-fieldset">
 *   <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
 *     <h1 class="govuk-fieldset__heading">Are you sure you want to remove Nigel Tufnel?</h1>
 *   </legend>
 *   <div class="govuk-radios">
 *     <div class="govuk-radios__item">
 *       <input id="yes" type="radio" name="delete" class="govuk-radios__input" value="Yes">
 *       <label class="govuk-radios__label" for="yes">Yes</label>
 *     </div>
 *     <div class="govuk-radios__item">
 *       <input id="no" type="radio" name="delete" class="govuk-radios__input" value="No">
 *       <label class="govuk-radios__label" for="no">No</label>
 *     </div>
 *   </div>
 * </fieldset>
 * ```
 * @fixture ```html
 * <div class="govuk-form-group">
 *   <h1 class="govuk-heading-xl">Are you sure you want to remove Nigel Tufnel?</h1>
 *   <fieldset class="govuk-fieldset">
 *     <legend class="govuk-visually-hidden">
 *       Are you sure you want to remove Nigel Tufnel?
 *     </legend>
 *     <p class="govuk-body">Well, I don't really think that the end can be assessed as of itself as being the end because what does the end feel like? It's like saying when you try to extrapolate the end of the universe, you say, if the universe is indeed infinite, then how - what does that mean? How far is all the way, and then if it stops, what's stopping it, and what's behind what's stopping it? So, what's the end, you know, is my question to you.</p>
 *     <div class="govuk-radios">
 *       <div class="govuk-radios__item">
 *         <input id="yes" type="radio" name="delete" class="govuk-radios__input" value="Yes">
 *         <label class="govuk-radios__label" for="yes">Yes</label>
 *       </div>
 *       <div class="govuk-radios__item">
 *         <input id="no" type="radio" name="delete" class="govuk-radios__input" value="No">
 *         <label class="govuk-radios__label" for="no">No</label>
 *       </div>
 *     </div>
 *   </fieldset>
 * </div>
 * ```
 **/

Cypress.Commands.add(
  'checkHeadings',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    cy.get(subject).then(($el) => {
      // If ($el) is not a heading then exit.
      if (!$el.is('h1, h2, legend')) {
        throw new Error(`${$el} is not a heading.`);
      }

      // Is this a `<h1>` nested inside a `<legend>` element?
      if ($el.is('legend')) {
        cy.get($el).children('h1');
      }

      // Is this the first heading on the page?

      // What heading-level is this?

      // Does this heading contain a `<label>` element?

      // If it's a heading, and it's the first heading on the page, then it should be a `h1` heading.

      // If it's a heading, and it's not the first heading on the page, then it should be a `h2` heading.

      // If it's a heading, and it's not the first heading on the page, and it's nested inside a `<legend>` element, then it should be a `h2` heading.
    });
  }
);
