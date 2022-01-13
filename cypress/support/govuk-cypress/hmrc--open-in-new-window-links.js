/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkOpenInNewWindowLinks
 * @description Cypress function to check links that open in a new tab have the correct link text suffix.
 * @example cy.get("@component").checkOpenInNewWindowLinks();
 * @link https://design-system.service.gov.uk/styles/typography/#opening-links-in-a-new-tab
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkOpenInNewWindowLinks',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    cy.get(subject).within(() => {
      cy.get('a')
        .filter(':contains("(opens in new tab)")')
        .should('have.attr', 'rel', 'noopener noreferrer')
        .should('have.attr', 'target', '_blank');
    });
  }
);
