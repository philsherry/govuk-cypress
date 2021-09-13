/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function hmrcPageHeading
 * @description Cypress function to check the HMRC Page Heading pattern.
 * @example cy.get("@component").hmrcPageHeading();
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/page-heading
 **/

// -- This is a child command --
Cypress.Commands.add(
  'someFunctionName',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
