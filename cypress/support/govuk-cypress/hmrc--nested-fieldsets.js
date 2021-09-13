/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkNestedFieldsets
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkNestedFieldsets();
 * @link https://design-system.service.gov.uk/components/fieldset/
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkNestedFieldsets',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
