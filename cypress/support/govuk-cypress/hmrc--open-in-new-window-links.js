/**
 * @author:
 * @function checkNewTarget
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkNewTarget();
 * @link https://design-system.service.gov.uk/styles/typography/#opening-links-in-a-new-tab
 **/

// -- This is a child command --
Cypress.Commands.add('checkNewTarget',
  { prevSubject: 'element' }, (subject, options) => {
  //
  })
