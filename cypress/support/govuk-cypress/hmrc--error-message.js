/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkErrorMessage
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkErrorMessage();
 * @link
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkErrorMessage',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
