/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string, sonarjs/no-identical-functions */
const page = '/tests/hmrc/default-browser-link-style';
const env = require('../../../../fixtures/env.json');
const user = require('../../../../fixtures/user.json');
const { terminalLog } = require('../../../../plugins/hmrc');

/**
 * @screenshotFormat png
 * @screenshotFileName `${service}--${component}--${viewport}--${state}`
 **/
const service = 'hmrc';
const component = 'default-browser-link-style';
const viewport = 'desktop';
let state = 'default';

beforeEach(() => {
  cy.viewport(env.desktop.viewport[0]);
  cy.visit(page);
  cy.injectAxe();

  cy.get('.govuk-skip-link').as('skipLink');
  cy.get('#component-1 .component-section__example').as('example-1');
  cy.get('#component-2 .component-section__example').as('example-2');
  cy.get('#component-3 .component-section__example').as('example-3');
  cy.get('@example-1').find('.cypress-example').as('component-1');
  cy.get('@example-2').find('.cypress-example').as('component-2');
  cy.get('@example-3').find('.cypress-example').as('component-3');
});

describe('checks page things', () => {
  it('checks all visible elements are present and visible', () => {
    cy.checkPageTitle();
    cy.get('@skipLink').checkFocusColours();
    cy.get('@component-1').should('be.visible');
    cy.get('@component-2').should('be.visible');
    cy.get('@component-3').should('be.visible');
  });
});

describe(`Component :: ${component} :: example 1`, () => {
  it('check link classes', () => {
    cy.get('@component-1').checkDefaultBrowserLinkStyle();
  });

  it('runs axe against the component', () => {
    cy.get('@component-1').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});

describe(`Component :: ${component} :: example 2`, () => {
  it('check link classes', () => {
    cy.get('@component-2').checkDefaultBrowserLinkStyle();
  });

  it('runs axe against the component', () => {
    cy.get('@component-2').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});

describe(`Component :: ${component} :: example 3`, () => {
  it('check link classes', () => {
    cy.get('@component-3').checkDefaultBrowserLinkStyle();
  });

  it('runs axe against the component', () => {
    cy.get('@component-3').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});
