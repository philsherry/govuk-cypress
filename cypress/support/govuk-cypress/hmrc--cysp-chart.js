/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkCYSPChart
 * @description Cypress function to check the charts in Check your State Pension’s summary page.
 * @example cy.get('@component').checkCYSPChart({
 *            amount: '133.42',
 *            title: '5 April 2021',
 *            width: '74%',
 *          });
 **/

Cypress.Commands.add(
  'checkCYSPChart',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    cy.get(subject).find('.amount').as('amount');
    cy.get(subject).find('[data-component="nisp_chart__title"]').as('title');

    cy.get(subject).should('be.visible');
    cy.get('@amount').should('be.visible');
    cy.get('@title').should('be.visible');

    cy.get('@amount').should('contain', options.amount);
    cy.get('@amount')
      .should('have.attr', 'style')
      .should('contain', options.width);
    cy.get('@title').should('contain', options.title);
  }
);
