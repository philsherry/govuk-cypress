/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkDefaultBrowserLinkStyle
 * @description Cypress function to links have a class of `govuk-link` where relevant.
 * @example cy.get("@component").checkDefaultBrowserLinkStyle();
 * @link https://design-system.service.gov.uk/styles/typography/#links
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkDefaultBrowserLinkStyle',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    cy.get(subject).within(() => {
      cy.get('a').each(($link, index, $links) => {
        cy.wrap($link).should('have.class', 'govuk-link');
      });
    });
  }
);
