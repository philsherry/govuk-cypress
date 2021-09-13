/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkFormValidation
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkFormValidation();
 * @link https://design-system.service.gov.uk/patterns/validation/
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkFormValidation',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
