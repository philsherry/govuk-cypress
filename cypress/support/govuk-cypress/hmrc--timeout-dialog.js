/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkServiceTimeout
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkServiceTimeout();
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/service-timeout/
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkServiceTimeout',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
