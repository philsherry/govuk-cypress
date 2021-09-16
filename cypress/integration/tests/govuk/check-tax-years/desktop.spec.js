/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string */
const page = '/tests/govuk/check-tax-years';
const env = require('../../../../fixtures/env.json');
const user = require('../../../../fixtures/user.json');
const { terminalLog } = require('../../../../plugins/hmrc');

/**
 * @screenshotFormat png
 * @screenshotFileName `${service}--${component}--${viewport}--${state}`
 **/
const service = 'govuk';
const component = 'check-tax-years';
const viewport = 'desktop';
let state = 'default';

beforeEach(() => {
  cy.viewport(env.desktop.viewport[0]);
  cy.visit(page);
  cy.injectAxe();

  // example aliases here…
  cy.get('#component-1').as('component-1');
  cy.get('#component-1 .component-section__example').as('example-1');

  // headings etc
  cy.get('.govuk-heading-xl').as('componentHeading');

  // component aliases.
  cy.get('.example--tax-years').as('component');

  // example aliases must be set in beforeEach.
  // keep them in a describe block to scope them to the example.
  describe('sets up aliases for example 1', () => {
    cy.get('@example-1').get('@componentHeading');

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

  // it('checks the page title', () => {
  //   cy.checkPageTitle();
  // });

  it('checks all visible elements are present and visible', () => {
    cy.get('@component').should('be.visible');
    cy.get('@componentHeading').should('be.visible');
  });

  it.only('checks the tax years', () => {
    cy.get('@component').checkTaxYears('6&nbsp;April&nbsp;2020');
    cy.get('@component').checkTaxYears('5&nbsp;April&nbsp;2021');
  });

  it('screenshots the component for a diff state', () => {
    cy.get('@example-1').screenshot(
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
