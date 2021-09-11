/**
 * @author:
 * @function checkHtmlValidation
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkHtmlValidation();
 * @link
 **/

// -- This is a child command --
Cypress.Commands.add('checkHtmlValidation',
  {
    prevSubject: 'element'
  }, (subject, options) => {
  //
  })
