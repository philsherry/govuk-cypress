/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string */
const page = '/hmrc/add-to-a-list/example/5';
const env = require('../../../../../fixtures/env.json');
const user = require('../../../../../fixtures/user.json');
const { terminalLog } = require('../../../../../plugins/hmrc');

/**
 * @screenshotFormat png
 * @screenshotFileName `${service}--${thing}--${viewport}--${state}`
 **/
const service = 'hmrc';
const component = 'add-to-a-list';
const viewport = 'mobile';
let state = 'default';

beforeEach(() => {
  cy.viewport(env.mobile.viewport[0]);
  cy.visit(page);
  cy.injectAxe();

  // example aliases here…
  cy.get('.fixture-example').as('example');

  // headings etc
  cy.get('.govuk-fieldset__legend').as('componentHeading');
  cy.get('.govuk-fieldset').as('fieldset');
  cy.get('.govuk-radios__label').as('radioLabel');
  cy.get('.govuk-radios__input').as('radioInput');
  cy.get('.govuk-radios__item:nth-child(1)').as('radio1');
  cy.get('.govuk-radios__item:nth-child(2)').as('radio2');

  // component aliases.
  cy.get('.govuk-form-group').as('component');

  // example aliases must be set in beforeEach.
  // keep them in a describe block to scope them to the example.
  describe('sets up aliases for example 1', () => {
    cy.get('@example').get('@componentHeading');
    cy.get('@example').get('@fieldset');

    cy.get('@example').get('@radio1').get('@radioLabel').as('radio1__label');

    cy.get('@example').get('@radio1').get('@radioInput').as('radio1__input');

    cy.get('@example').get('@radio2').get('@radioLabel').as('radio2__label');

    cy.get('@example').get('@radio2').get('@radioInput').as('radio2__input');

    cy.get('@example').find('.govuk-button').as('continue');
  });
});

/**
 * Example 1:
 * - The focus colours must be the updated version.
 * - The hint text must be associated correctly with the checkboxes.
 * - “Do you need to add another director?” should be a `legend` for a `fieldset` around the checkboxes; potential for a nested heading in there.
 * - The links must have unique, hidden context for screen reader users.
 **/
describe(`Component :: ${component} :: example 1`, () => {
  it('checks we’re on the right page', () => {
    cy.server().should((server) => {
      expect(server.method).to.eq('GET');
      expect(server.status).to.eq(200);
    });

    cy.location().should((location) => {
      expect(location.pathname).to.eq(page);
    });
  });

  it('checks the page title', () => {
    cy.checkPageTitle();
  });

  it('checks all visible elements are present and visible', () => {
    cy.get('@component').should('be.visible');
    cy.get('@componentHeading').should('be.visible');
    cy.get('@fieldset').should('be.visible');
    cy.get('@radio1__label').should('be.visible');
    cy.get('@radio2__label').should('be.visible');
    cy.get('@continue').should('be.visible');
  });

  it('screenshots the component for a diff state', () => {
    cy.get('@example').screenshot(
      `${service}--${thing}--${viewport}--${state}`,
      {
        capture: 'viewport',
      }
    );
  });

  it('runs axe against the component', () => {
    cy.get('@component').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});
