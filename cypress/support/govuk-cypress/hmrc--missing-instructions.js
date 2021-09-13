/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkMissingInstructions
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkMissingInstructions();
 * @link
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkMissingInstructions',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    //
  }
);

// Note: see .checkAriaDescribedBy() for more details
