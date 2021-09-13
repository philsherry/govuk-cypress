/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkFocusColours
 * @description Cypress function to check the focus colours match the latest GOV.UK Design System.
 * @example cy.get("@component").click().checkFocusColours();
 * @link https://design-system.service.gov.uk/get-started/focus-states/
 **/

Cypress.Commands.add(
  'checkFocusColours',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    cy.get(subject)
      .focused()
      .should('have.css', 'border-color', 'rgb(11, 12, 12)')
      .should('have.css', 'border-width', '2px')
      .should('have.css', 'outline-color', 'rgb(255, 221, 0)')
      .should('have.css', 'outline-width', '3px');
  }
);
