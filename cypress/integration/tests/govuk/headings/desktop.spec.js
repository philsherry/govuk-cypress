/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string, sonarjs/no-identical-functions */
const page = '/tests/govuk/headings';
const env = require('../../../../fixtures/env.json');
const user = require('../../../../fixtures/user.json');
const { terminalLog } = require('../../../../plugins/hmrc');

/**
 * @screenshotFormat png
 * @screenshotFileName `${service}--${thing}--${viewport}--${state}`
 **/
const service = 'hmrc';
const component = 'tax-years';
const viewport = 'desktop';
let state = 'default';

beforeEach(() => {
  cy.viewport(env.desktop.viewport[0]);
  cy.visit(page);
  cy.injectAxe();

  // example aliases here…
  cy.get('#component-1').as('component-1');
  cy.get('#component-2').as('component-2');
  cy.get('#component-3').as('component-3');
  cy.get('#component-4').as('component-4');
  cy.get('#component-5').as('component-5');
  cy.get('#component-1 .component-section__example').as('example-1');
  cy.get('#component-2 .component-section__example').as('example-2');
  cy.get('#component-3 .component-section__example').as('example-3');
  cy.get('#component-4 .component-section__example').as('example-4');
  cy.get('#component-5 .component-section__example').as('example-5');

  // component aliases.
  describe('example 1 aliases', () => {
    cy.get('@example-1').get('.govuk-heading-xl').as('component');
  });

  describe('example 2 aliases', () => {
    cy.get('@example-2').get('.govuk-heading-xl').as('component');
  });

  describe('example 3 aliases', () => {
    cy.get('@example-3').get('.govuk-label-wrapper').as('component');
  });

  describe('example 4 aliases', () => {
    cy.get('@example-4').get('.govuk-fieldset__legend').as('component');
  });

  describe('example 5 aliases', () => {
    cy.get('@example-5').get('.component-section__example').as('component');
  });
});

describe(`Component :: ${component} :: example 1`, () => {
  it('checks all visible elements are present and visible', () => {
    cy.get('@component').should('be.visible');
  });

  it('screenshots the component for a diff state', () => {
    cy.get('@example-1').screenshot(
      `${service}--${thing}--${viewport}--${state}`,
      {
        capture: 'viewport',
      }
    );
  });

  it('checks the component', () => {
    cy.get('@component').checkHeadings();
  });

  it('runs axe against the component', () => {
    cy.get('@component').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});

describe(`Component :: ${component} :: example 2`, () => {
  it('checks all visible elements are present and visible', () => {
    cy.get('@component').should('be.visible');
  });

  it('screenshots the component for a diff state', () => {
    cy.get('@example-2').screenshot(
      `${service}--${thing}--${viewport}--${state}`,
      {
        capture: 'viewport',
      }
    );
  });

  it('checks the component', () => {
    cy.get('@component').checkHeadings('labelAsHeading');
  });

  it('runs axe against the component', () => {
    cy.get('@component').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});

describe(`Component :: ${component} :: example 3`, () => {
  it('checks all visible elements are present and visible', () => {
    cy.get('@component').should('be.visible');
  });

  it('screenshots the component for a diff state', () => {
    cy.get('@example-2').screenshot(
      `${service}--${thing}--${viewport}--${state}`,
      {
        capture: 'viewport',
      }
    );
  });

  it('checks the component', () => {
    cy.get('@component').checkHeadings();
    // cy.get('@component').checkHeadings('legendAsHeading'); // example 4
  });

  it('runs axe against the component', () => {
    cy.get('@component').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});

describe(`Component :: ${component} :: example 4`, () => {
  it('checks all visible elements are present and visible', () => {
    cy.get('@component').should('be.visible');
  });

  it('screenshots the component for a diff state', () => {
    cy.get('@example-4').screenshot(
      `${service}--${thing}--${viewport}--${state}`,
      {
        capture: 'viewport',
      }
    );
  });

  it('checks the component', () => {
    cy.get('@component').checkHeadings('legendAsHeading');
  });

  it('runs axe against the component', () => {
    cy.get('@component').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});

describe(`Component :: ${component} :: example 5`, () => {
  it('checks all visible elements are present and visible', () => {
    cy.get('@component').should('be.visible');
  });

  it('screenshots the component for a diff state', () => {
    cy.get('@component-5').screenshot(
      `${service}--${thing}--${viewport}--${state}`,
      {
        capture: 'viewport',
      }
    );
  });

  it('checks the component', () => {
    cy.get('@component').checkHeadings('headingWithContent');
  });

  it('runs axe against the component', () => {
    cy.get('@component').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});
