/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkAriaDescribedBy
 * @description Cypress function to check any `aria-describedby` value has a valid target in the page.
 * @example cy.get("@component").checkAriaDescribedBy();
 * @link https://design-system.service.gov.uk/components/text-input/#hint-text
 **/

Cypress.Commands.add(
  'checkAriaDescribedBy',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    cy.get(subject).then(($el) => {
      const ariaDescribedBy = $el.attr('aria-describedby');
      if (ariaDescribedBy) {
        cy.get(`#${ariaDescribedBy}`).should('exist');
      }
    });
  }
);
