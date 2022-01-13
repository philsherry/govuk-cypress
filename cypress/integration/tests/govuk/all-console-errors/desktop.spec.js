/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string, sonarjs/no-identical-functions */
const page = '/tests/govuk/all-console-errors/example/1';
const env = require('../../../../fixtures/env.json');
const user = require('../../../../fixtures/user.json');
const { terminalLog } = require('../../../../plugins/hmrc');

/**
 * @screenshotFormat png
 * @screenshotFileName `${service}--${thing}--${viewport}--${state}`
 **/
const service = 'govuk';
const component = 'all-console-errors';
const viewport = 'desktop';
let state = 'default';

beforeEach(() => {
  cy.viewport(env.desktop.viewport[0]);
  cy.visit(page);
  cy.injectAxe();
  cy.get('#component-1').as('component');
  cy.get('[name="break-things"]').as('button');
});

describe(`Component :: ${component} :: example 1`, () => {
  it('should be free of console errors', () => {
    cy.get('@component').checkA11y(null, null, terminalLog);
  });
});

describe(`Component :: ${component} :: example 2`, () => {
  it('clicks the button to generate some console errors', () => {
    cy.get('@button').click();
  });
});
