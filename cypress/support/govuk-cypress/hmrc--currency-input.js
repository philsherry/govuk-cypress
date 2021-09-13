/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function hmrcCurrencyInput
 * @description Cypress function to check the HMRC Currency Input pattern.
 * @example cy.get("@component").hmrcCurrencyInput();
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/currency-input
 **/

// -- This is a child command --
Cypress.Commands.add(
  'hmrcCurrencyInput',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
