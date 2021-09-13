/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function someFunctionName
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").someFunctionName();
 * @link
 **/

// -- This is a child command --
Cypress.Commands.add(
  'someFunctionName',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
