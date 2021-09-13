/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkHmrcReferences
 * @description Cypress function to check the HMRC Page Heading pattern.
 * @example cy.get("@component").checkHmrcReferences("AOR");
 * @example cy.get("@component").checkHmrcReferences("PAYE");
 * @example cy.get("@component").checkHmrcReferences("UTR");
 * @example cy.get("@component").checkHmrcReferences("VAT");
 *
 * @description Accounts Office reference
 * @example This is 13 characters, like 123PX00123456 or 123PX0012345X.
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/accounts-office-reference/
 *
 * @description Employer PAYE reference
 * @example This is a 3 digit tax office number, a forward slash, and a tax office employer reference, like 123/AB456.
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/employer-paye-reference/
 *
 * @description Unique Taxpayer Reference
 * @example This is 10 numbers, for example 1234567890. It will be on tax returns and other letters about Self Assessment.
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/unique-taxpayer-reference/
 *
 * @description VAT registration number
 * @example This is 9 numbers, sometimes with ‘GB’ at the start, for example 123456789 or GB123456789.
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/vat-registration-number/
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkHmrcReferences',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    //
  }
);

// This one is clearly just a thought at this stage;
// not sure if we even need it in here.
