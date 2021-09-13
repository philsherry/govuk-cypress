/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkPageTitleError
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkPageTitleError();
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/page-title
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkPageTitleError',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);

// Can this functionality be rolled into .checkPageTitle()?
