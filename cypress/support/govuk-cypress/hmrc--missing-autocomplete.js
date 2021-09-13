/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkAutocompleteAttributes
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkAutocompleteAttributes();
 * @link https://design-system.service.gov.uk/components/text-input/#use-the-autocomplete-attribute
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkAutocompleteAttributes',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    //
  }
);
