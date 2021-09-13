/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkAriaLabelledby
 * @description Cypress function to check any `aria-labelledby` value has a valid target in the page.
 * @example cy.get("@component").checkAriaLabelledby();
 * @link https://design-system.service.gov.uk/components/error-summary
 **/

Cypress.Commands.add(
  'checkAriaLabelledby',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    cy.get(subject).then(($el) => {
      const ariaLabelledby = $el.attr('aria-labelledby');
      if (ariaLabelledby) {
        cy.get(`#${ariaLabelledby}`).should('exist');
      }
    });
  }
);
