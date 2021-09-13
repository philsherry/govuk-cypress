/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkWelshTranslations
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkWelshTranslations();
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/welsh-language-toggle/
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkWelshTranslations',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
