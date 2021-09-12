/* eslint-disable no-unused-vars */
/**
 * @author:
 * @function checkHintNotAssociated
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkHintNotAssociated();
 * @link https://design-system.service.gov.uk/components/text-input/#hint-text
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkHintNotAssociated',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    //
  }
);

// NOTE: use .checkAriaDescribedBy() here.
