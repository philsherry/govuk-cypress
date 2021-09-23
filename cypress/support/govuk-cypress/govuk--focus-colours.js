/* eslint-disable no-unused-vars, sonarjs/no-duplicate-string */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkFocusColours
 * @description Cypress function to check the focus colours match the latest GOV.UK Design System. We only need to check these two colours exist in this particular test.
 * @example cy.get("@component").checkFocusColours();
 * @link https://design-system.service.gov.uk/get-started/focus-states/
 **/

/**
 * Because of how the library is, checking specific values can prove awkward. Example:
 *   Timed out retrying after 4000ms: expected '<a>' to have CSS property
 *   'box-shadow' with the value '0 -2px rgb(255, 221, 0),
 *   0 4px rgb(11, 12, 12)', but the value was 'rgb(255, 221, 0)
 *   0px -2px 0px 0px, rgb(11, 12, 12) 0px 4px 0px 0px'
 */

Cypress.Commands.add(
  'checkFocusColours',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    const govukFocusColour = 'rgb(255, 221, 0)';
    const govukFocusTextColour = 'rgb(11, 12, 12)';

    cy.get(subject)
      .first() // There may be multiple elements with the same class name
      .focus()
      .focused()
      .should('have.css', 'background-color', govukFocusColour)
      .should('have.css', 'color', govukFocusTextColour)
      .should('have.css', 'outline-color', govukFocusColour);
  }
);
