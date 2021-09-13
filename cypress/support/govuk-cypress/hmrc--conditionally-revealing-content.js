/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkConditionallyRevealingContent
 * @description Cypress function to CHECK THE THING DOES THE THING TO THE THINGS.
 * @example cy.get("@component").checkConditionallyRevealingContent();
 * @link https://design-system.service.gov.uk/components/radios#conditionally-revealing-a-related-question
 * @link https://design-system.service.gov.uk/components/checkboxes#conditionally-revealing-a-related-question
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkConditionallyRevealingContent',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    //
  }
);
