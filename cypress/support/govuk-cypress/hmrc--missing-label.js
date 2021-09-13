/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkMissingLabel
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkMissingLabel();
 * @link
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkMissingLabel',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    //
  }
);
