/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkHintErrorInLabel
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkHintErrorInLabel();
 * @link
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkHintErrorInLabel',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    //
  }
);

// Does this functionality already exist in either
// .checkGovukErrorMessage() or .checkGovukErrorSummary()?
