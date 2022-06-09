/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkSkipLinks
 * @description Cypress function to check any skip link ID has a valid target in the page.
 * @example cy.get("@component").checkSkipLinks();
 * @link https://design-system.service.gov.uk/components/skip-links/
 **/

Cypress.Commands.add(
  'checkSkipLinks',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    cy.get(subject).then(($el) => {
      const skipLinks = $el.attr('id');
      if (skipLinks) {
        cy.get(`#${skipLinks}`).should('exist');
      }
    });
  }
);
