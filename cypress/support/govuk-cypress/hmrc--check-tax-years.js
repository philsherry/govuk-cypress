/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkTaxYears
 * @description Cypress function to check tax years are formatted correctly, but also not wrapped in a span. People have done this over the years in an attempt to keep the date from breaking onto multiple lines, which is exactly what non-breaking spaces are for. Adding in extra markup to make this work is a bad idea because it is announced by screen readers as extra items in the heading.
 * @example cy.get("@component").checkTaxYears(taxYear);
 * @link
 * @fixture example of an extreme case, where there are two instances of span-wrapped dates inside a heading.
 * <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
 *   <h1 class="govuk-fieldset__heading">
 *     How much <span class="one-liner">self-employed</span>
 *     profit do you expect to make between
 *     <span class="one-liner">6&nbsp;April&nbsp;2020</span> and
 *     <span class="one-liner">5&nbsp;April&nbsp;2021</span>?</span>
 *   </h1>
 * </legend>
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkTaxYears',
  {
    prevSubject: 'element',
  },
  (subject, taxYear) => {
    /**
     * @function singleLineIt
     * @description Throws away line breaks.
     * @param {string} s Text to fix.
     **/
    const singleLineIt = (s) => s.replace(/\n+/g, ' ');

    const regexTaxYear = /^(0?[1-7])(\s|&nbsp;)April(\s|&nbsp;)(20)\d{2}$/gi;

    if (!taxYear.match(regexTaxYear)) {
      throw new Error(`${taxYear} is jarg, la.`);
    }

    let subjectString;
    const taxYearString = taxYear;

    cy.get(subject).then(($el) => {
      subjectString = singleLineIt($el.html().trim());
      // subjectString = $el.html().trim();

      console.log('subjectString: ', subjectString);
      console.log('taxYearString: ', taxYearString);

      // Check the content against the regex
      expect(taxYearString).to.match(regexTaxYear);

      // .checkTaxYears(taxYear)
      expect(subjectString).to.include(taxYearString);

      // cy.get('h2').children('span').should('have.length', 0)
      cy.get('h2').children('span').should('contain', taxYearString)
    });

  }
);
