/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkCYSPPanel
 * @description Cypress function to check the confirmation panel in Check your State Pension’s summary page.
 * @example cy.get('@component').checkCYSPPanel({
 *      date: '26 July 2022',
 *      week: '138.55',
 *      month: '602.45',
 *      year: '7,229.34 ',
 * });
 * @see {@link https://design-system.service.gov.uk/components/panel/}
 **/

Cypress.Commands.add(
  'checkCYSPPanel',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    cy.get(subject)
      .find('[data-component="nisp_panel__title"]')
      .as('nisp_panel__title');
    cy.get(subject)
      .find('[data-component="nisp_panel__body"]')
      .as('nisp_panel__body');
    cy.get('[data-spec="state_pension__panel1__caveats"]').as(
      'state_pension__panel1__caveats'
    );

    cy.get(subject).should('be.visible');
    cy.get('@nisp_panel__title').should('be.visible');
    cy.get('@nisp_panel__body').should('be.visible');
    cy.get('@state_pension__panel1__caveats').should('be.visible');

    cy.get('@nisp_panel__title').should('contain', options.date);
    cy.get('@state_pension__panel1__caveats')
      .should('contain', options.week)
      .should('contain', options.month)
      .should('contain', options.year);
  }
);
