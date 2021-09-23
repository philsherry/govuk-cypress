/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string */
const page = '/hmrc/add-to-a-list/example/3';
const env = require('../../../../../fixtures/env.json');
const user = require('../../../../../fixtures/user.json');
const { terminalLog } = require('../../../../../plugins/hmrc');

/**
 * @screenshotFormat png
 * @screenshotFileName `${service}--${component}--${viewport}--${state}`
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
  cy.get('.govuk-heading-xl').as('componentHeading');
  cy.get('@example').find('.govuk-button').as('continue');

  // component aliases.
  cy.get('.govuk-summary-list').as('component');
  cy.get('@component').find('.govuk-summary-list__row').as('row');
  cy.get('@row').find('.govuk-summary-list__key').as('question');
  cy.get('@row').find('.govuk-summary-list__value').as('answer');
  cy.get('@row')
    .find('.govuk-summary-list__actions .govuk-link')
    .as('change');

  // example aliases must be set in beforeEach.
  describe('sets up aliases for example 1', () => {
    cy.get('@example').get('@componentHeading');
    cy.get('@example').get('@component');
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
    cy.get('@continue').should('be.visible');
  });

  it('checks the link context', () => {
    cy.get('@question').each(() => {
      cy.get('@change').checkLinkContext();
    });
  });

  it('screenshots the component for a diff state', () => {
    cy.get('@example').screenshot(
      `${service}--${component}--${viewport}--${state}`,
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
