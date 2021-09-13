/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkNotificationBadge
 * @description Cypress function to CHECK THE THING DOES THE THING.
 * @example cy.get("@component").checkNotificationBadge();
 * @link
 **/

// -- This is a child command --
Cypress.Commands.add(
  'checkNotificationBadge',
  { prevSubject: 'element' },
  (subject, options) => {
    //
  }
);
