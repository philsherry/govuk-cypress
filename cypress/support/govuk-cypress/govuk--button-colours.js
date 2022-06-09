/* eslint-disable no-unused-vars, sonarjs/no-duplicate-string */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkButtonColours
 * @description Cypress function to check button text colour has not been overridden.
 * Example of something which might cause this to fail:
 * a:link:not(.account-menu__link) { color: #005ea5; }
 * @example cy.get("@component").checkButtonColours();
 * @link https://design-system.service.gov.uk/components/button/
 **/

Cypress.Commands.add(
  'checkButtonColours',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    // .govuk-button
    const defaultButtonColourBackground = 'rgb(0, 112, 60)';
    const defaultButtonColourText = 'rgb(255, 255, 255)';

    // .govuk-button.govuk-button--secondary
    const secondaryButtonColourBackground = 'rgb(243, 242, 241)';
    const secondaryButtonColourText = 'rgb(11, 12, 12)';

    // .govuk-button.govuk-button--warning
    const warningButtonColourBackground = 'rgb(212, 53, 28)';
    const warningButtonColourText = 'rgb(255, 255, 255)';

    // .button.blue-button
    const hmrcSecondaryButtonColourBackground = 'rgb(0, 94, 165)';
    const hmrcSecondaryButtonColourText = 'rgb(255, 255, 255)';

    cy.get(subject).then(($el) => {
      const ariaLabelledby = $el.attr('aria-labelledby');
      if ($el.hasClass('govuk-button--secondary')) {
        cy.get(subject)
          .should(
            'have.css',
            'background-color',
            secondaryButtonColourBackground
          )
          .should('have.css', 'color', secondaryButtonColourText);
      } else if ($el.hasClass('govuk-button--warning')) {
        cy.get(subject)
          .should(
            'have.css',
            'background-color',
            warningButtonColourBackground
          )
          .should('have.css', 'color', warningButtonColourText);
      } else if ($el.hasClass('blue-button')) {
        cy.get(subject)
          .should(
            'have.css',
            'background-color',
            hmrcSecondaryButtonColourBackground
          )
          .should('have.css', 'color', hmrcSecondaryButtonColourText);
      } else {
        cy.get(subject)
          .should(
            'have.css',
            'background-color',
            defaultButtonColourBackground
          )
          .should('have.css', 'color', defaultButtonColourText);
      }
    });
  }
);
