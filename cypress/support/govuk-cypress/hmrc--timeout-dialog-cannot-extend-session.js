/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkSessionTimeoutExtends
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkSessionTimeoutExtends();
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/service-timeout/
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkSessionTimeoutExtends',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
