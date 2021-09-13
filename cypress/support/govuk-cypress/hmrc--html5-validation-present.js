/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkHtml5ValidationPresent
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkHtml5ValidationPresent();
 * @link https://design-system.service.gov.uk/patterns/validation/#turn-off-html5-validation
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkHtml5ValidationPresent',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    //
  }
);
