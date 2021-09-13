/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkTypeAttribute
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkTypeAttribute();
 * @link https://design-system.service.gov.uk/components/text-input/#avoid-using-inputs-with-a-type-of-number
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkTypeAttribute',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
