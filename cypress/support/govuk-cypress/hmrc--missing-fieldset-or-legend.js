/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkForMissingFieldsetOrLegend
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkForMissingFieldsetOrLegend();
 * @link https://design-system.service.gov.uk/get-started/labels-legends-headings/
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkForMissingFieldsetOrLegend',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    //
  }
);

// Note: I started .checkHeadings() with similar intentions but didn't finish it.
// See also: `labels-legends-headings` in tags.js
