/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkUserConsent
 * @description Cypress function to check the HMRC Page Heading pattern.
 * @example cy.get("@component").checkUserConsent();
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/ask-the-user-for-their-consent
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkUserConsent',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
