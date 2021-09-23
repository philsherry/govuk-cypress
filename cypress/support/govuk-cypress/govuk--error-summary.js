/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkGovukErrorSummary
 * @description Cypress function to check each error summary link has a valid target in the page.
 * @example cy.get("@component").checkGovukErrorSummary();
 * @link https://design-system.service.gov.uk/components/error-summary
 **/

Cypress.Commands.add(
  'checkGovukErrorSummary',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    cy.get(subject).then(($el) => {
      const govukFocusColour = 'rgb(255, 221, 0)';
      const govukFocusTextColour = 'rgb(11, 12, 12)';
      /**
       * @type {array}
       **/
      const listItems = [];
      /**
       * @type {string}
       **/
      let listLength;

      // Error summary component should exist.
      expect($el).to.exist;

      // Error summary component should have focus.
      cy.get(subject).focused().should('have.class', 'govuk-error-summary');

      // Error summary component aria-labelledby should have a valid target.
      cy.get(subject).checkAriaLabelledby();

      // Error summary should have the right attributes.
      cy.get(subject)
        .should('have.attr', 'tabindex', '-1')
        .should('have.attr', 'aria-labelledby', 'error-summary-title')
        .should('have.attr', 'role', 'alert')
        .should('have.attr', 'data-module', 'govuk-error-summary');

      // Error summary title should exist.
      cy.get(subject)
        .find('h2')
        .should('have.attr', 'id', 'error-summary-title')
        .should('contain', 'There is a problem');

      // Each list item’s anchor’s href should map to a valid target in the `<main>`.
      // element, and each target should come in the same order as in the list.
      cy.get('.govuk-error-summary__list > li').each(($list, index) => {
        // Get length and order of error summary list items for later use.
        listLength = $list.length;
        $list.each((index, item) => {
          // push # item href (minus hash) to array.
          listItems.push(
            item.querySelector('a').getAttribute('href').replace('#', '')
          );
        });

        cy.get('main').within(() => {
          cy.get($list.find('a').attr('href'))
            .should('exist')
            .then(($target) => {
              // 1. Expect href to match a valid id in the `<main>` element.
              cy.wrap($target)
                .should('have.attr', 'id')
                .and('match', /^[a-z0-9-]+$/);
              // 2. Check the ordering of the target items is the same as the list items.
              expect($target.attr('id')).to.equal(listItems[index]);
            });
        });
      });
    })
  }
);
