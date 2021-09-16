/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkHmrcPageHeading
 * @description Cypress function to check the HMRC Page Heading pattern.
 * @example cy.get("@component").checkHmrcPageHeading();
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/page-heading
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkHmrcPageHeading',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
