/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkDefaultBrowserLinkStyle
 * @description Cypress function to CHECK THE THING DOES THE THING.
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
    //
  }
);
