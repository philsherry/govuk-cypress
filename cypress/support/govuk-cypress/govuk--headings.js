/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string, sonarjs/no-identical-functions */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkHeadings
 * @description Cypress function to check whether `h1` (and `h2` where applicable) headings are being nested with `label` and `legend` elements. If there is a paragraph of content between the heading and the first form element, then the heading should remain as a `h1` heading, followed by the `p`, and then a visually-hidden `label` and `legend` to mirror the `h1`. This is because the user is expected to read the heading and then the content that follows, which means they may forget the question by the time they get to the first form element.
 * @example cy.get("@component").checkHeadings("legendAsHeading");
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
 * @example cy.get("@component").checkHeadings("labelAsHeading");
 * @fixture ```html
 * <div class="govuk-form-group">
 *   <h1 class="govuk-label-wrapper">
 *     <label class="govuk-label govuk-label--l" for="example">
 *       How much more black could it be?
 *     </label>
 *   </h1>
 *   <div id="example-hint" class="govuk-hint">
 *     This example shows an &lt;h1&gt; around a &lt;label&gt; with the class of govuk-label--l
 *   </div>
 *   <input class="govuk-input" id="example" name="example" type="text" aria-describedby="example-hint">
 * </div>
 * ```
 * @example cy.get("@component").checkHeadings("headingWithContent");
 * @fixture ```html
 * <div class="govuk-form-group">
 *   <h1 class="govuk-heading-xl">Are you sure you want to remove Nigel Tufnel?</h1>
 *   <p class="govuk-body">Well, I don't really think that the end can be assessed as of itself as being the end because what does the end feel like? It's like saying when you try to extrapolate the end of the universe, you say, if the universe is indeed infinite, then how - what does that mean? How far is all the way, and then if it stops, what's stopping it, and what's behind what's stopping it?</p>
 *   <fieldset class="govuk-fieldset">
 *     <legend class="govuk-visually-hidden">
 *       Are you sure you want to remove Nigel Tufnel?
 *     </legend>
 *     <span class="govuk-hint">So, what's the end, you know, is my question to you.</span>
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
  (
    subject,
    legendAsHeading,
    labelAsHeading,
    headingWithContent,
    hmrcPageHeading
  ) => {
    cy.get(subject).then(($el) => {
      let legendAsHeading = false;
      let labelAsHeading = false;
      let headingWithContent = false;
      let hmrcPageHeading = false;

      /**
       * @description
       * @param {*} $el
       * @param {*} legendAsHeading
       */
      const fnLegendAsHeading = ($el) => {
        cy.get($el).children('h1');
        legendAsHeading = expect($el.find('h1').length).to.equal(1);
      };

      /**
       * @description
       * @param {*} $el
       * @param {*} labelAsHeading
       */
      const fnLabelAsHeading = ($el) => {
        labelAsHeading =
          expect($el.find('label').length).to.equal(1) &&
          expect($el.find('h1').length).to.equal(0);
      };

      /**
       * @description
       * @param {*} $el
       * @param {*} headingWithContent
       */
      const fnHeadingWithContent = ($el) => {
        headingWithContent =
          expect($el.find('h1').length).to.equal(1) &&
          expect($el.find('h1').is(':visible')).to.be.true &&
          expect($el.find('h1').next('p').length).to.equal(1) &&
          expect($el.find('p').closest('.govuk-fieldset').length).to.equal(
            1
          ) &&
          expect($el.find('.govuk-fieldset').find('legend').length).to.equal(
            1
          ) &&
          expect($el.find('.govuk-fieldset').is(':visible')).to.be.false;
      };

      /**
       * @description
       * @param {*} $el
       * @param {*} hmrcPageHeading
       */
      const fnHmrcPageHeading = ($el) => {
        hmrcPageHeading = true;
      };

      // If ($el) is not a heading or legend, then exit.
      if (!$el.find('h1, h2, h3, h4, h5, h6, legend')) {
        throw new Error(`${$el} is not a heading.`);
      }

      if (legendAsHeading) {
        fnLegendAsHeading($el);
        return;
      }

      if (labelAsHeading) {
        fnLabelAsHeading($el);
        return;
      }

      if (headingWithContent) {
        fnHeadingWithContent($el);
        return;
      }

      if (hmrcPageHeading) {
        fnHmrcPageHeading($el);
        return;
      }

      /**
       * Try and catch all other heading types.
       */

      // This H1||h2 should not have any children, unless it’s a label.
      cy.get('h1').children('span').should('have.length', 0);
      cy.get('h2').children('span').should('have.length', 0);

      // Is this a `<h1>` nested inside a `<legend>` element?
      if ($el.find('legend')) {
        fnLegendAsHeading($el);
      }

      // Is this the first heading on the page? It should be a `<h1>` and be govuk-heading-xl
      if ($el.find('h1:first')) {
        cy.get($el).should('have.class', 'govuk-heading-xl');
      }

      // What heading-level is this, and is it skipping any?

      // Does this heading contain a `<label>` element?
      if ($el.children('label')) {
        fnLabelAsHeading($el);
      }

      // If it's a heading, and it's the first heading on the page, then it should be a `h1` heading.

      // If it's a heading, and it's not the first heading on the page, then it should be a `h2` heading.

      // If it's a heading, and it's not the first heading on the page, and it's nested inside a `<legend>` element, then it should be a `h2` heading.
    });
  }
);
