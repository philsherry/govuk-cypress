/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @function checkUnassociatedLabel
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkUnassociatedLabel();
 * @link https://design-system.service.gov.uk/components/text-input/
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkUnassociatedLabel',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
