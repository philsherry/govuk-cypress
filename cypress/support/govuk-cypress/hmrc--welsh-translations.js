/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkWelshTranslations
 * @description Cypress function to match Welsh phrases with their English counterparts.
 * @example cy.(element).checkWelshTranslations(
 *            '.govuk-footer__copyright-logo',
 *            'Crown copyright',
 *            'Hawlfraint y Goron'
 *          );
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/welsh-language-toggle/
 * @note DO NOT use `cy` as a variable name for Welsh in Cypress tests—it’s already taken.
 * Don’t ask me why I’m leaving this cautionary reminder. Just… don’t.
 **/

Cypress.Commands.add(
  'checkWelshTranslations',
  {
    prevSubject: 'element',
  },
  (subject, english, welsh) => {
    const transElement = subject.selector;
    let langString = '';
    let englishString = '';
    let welshString = '';

    cy.get('.hmrc-language-select').as('hmrcLanguageSelect');
    cy.get('@hmrcLanguageSelect').find('.govuk-link').as('langSwitch');
    cy.get('@hmrcLanguageSelect').should('be.visible');
    cy.get('@langSwitch').should('be.visible');

    // Given an element (subject), get the text from it ($lang).
    // Find the provided English text (english),
    // Click the Language switcher to change to Welsh (@langSwitch).
    // Check the provided Welsh text (welsh) exists in the page.
    // PROBLEM: $lang doesn’t refresh with the language switcher, so $langString is still in English.

    cy.get(subject).then(($english) => {
      // page should be english by default
      cy.root().should('have.attr', 'lang', 'en');
      langString = $english.text().trim();
      englishString = $english.text().trim();
      expect(subject).to.contain(english);
    });

    // ^ That gives us the English version of the text, but the Welsh
    // version is not there and will never be there. To get that, we’ll
    // need to click the language switcher as the first step.
    cy.get('@langSwitch')
      .click()
    cy.get(transElement)
      .then(($welsh) => {
        cy.root().should('have.attr', 'lang', 'cy');
        langString = $welsh.text().trim();
        welshString = $welsh.text().trim();
        expect(langString).to.contain(welsh);
      });
  }
);

/**
 *TODO: figure out how to access aria-label with this command
 *  cy.get('.hmrc-language-select')
 *    .should('have.attr', 'aria-label')
 *    .checkWelshTranslations(
 *      'Language switcher',
 *      'Switcher iaith'
 *    );
 *
 *  cy.checkWelshTranslations() failed because it requires a DOM element.
 *  The subject received was:
 *    > Language switcher
 *  The previous command that ran was:
 *    > cy.should()
 */
