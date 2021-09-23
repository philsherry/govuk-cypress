/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string, sonarjs/no-identical-functions */
const page = '/tests/govuk/focus-colours';
const env = require('../../../../fixtures/env.json');
const user = require('../../../../fixtures/user.json');
const { terminalLog } = require('../../../../plugins/hmrc');

/**
 * @screenshotFormat png
 * @screenshotFileName `${service}--${component}--${viewport}--${state}`
 **/
const service = 'hmrc';
const component = 'focus-colours';
const viewport = 'desktop';
let state = 'default';

beforeEach(() => {
  cy.viewport(env.desktop.viewport[0]);
  cy.visit(page);
  cy.injectAxe();

  cy.get('.govuk-skip-link').as('skipLink');
  // example aliases here…
  cy.get('#component-1').as('example-1'); // govukErrorSummary
  cy.get('#component-2').as('example-2'); // govukInput
  cy.get('#component-3').as('example-3'); // govukRadios
  cy.get('#component-4').as('example-4'); // govukCharacterCount
  cy.get('#component-5').as('example-5'); // govukFileUpload
  cy.get('#component-6').as('example-6'); // govukNotificationBanner
  cy.get('#component-7').as('example-7'); // govukButton

  cy.get('@example-1').find('.govuk-error-summary').as('component-1');
  cy.get('@example-2').find('.govuk-input').as('component-2');
  cy.get('@example-3').find('.govuk-radios').as('component-3');
  cy.get('@example-4').find('.govuk-textarea').as('component-4');
  cy.get('@example-5').find('.govuk-file-upload').as('component-5');
  cy.get('@example-6').find('.govuk-notification-banner').as('component-6');
  cy.get('@example-7').find('.govuk-button-group').as('component-7');
});

describe(`Component :: ${component} :: example 1`, () => {
  state = 'govukErrorSummary';

  it('checks we have the correct focus colours', () => {
    cy.get('@skipLink').checkFocusColours();
  });

  it('checks all visible elements are present and visible', () => {
    cy.get('@component-1').should('exist').should('be.visible');
  });

  it('checks the component', () => {
    cy.get('@component-1').checkGovukErrorSummary();
  });

  it('runs axe against the component', () => {
    cy.get('@component-1').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});

describe(`Component :: ${component} :: example 2`, () => {
  state = 'govukInput';

  it('checks all visible elements are present and visible', () => {
    cy.get('@component-2').should('exist').should('be.visible');
  });

  it('runs axe against the component', () => {
    cy.get('@component-2').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});

describe(`Component :: ${component} :: example 3`, () => {
  state = 'govukRadios';

  it('checks all visible elements are present and visible', () => {
    cy.get('@component-3').should('exist').should('be.visible');
  });

  it('checks the component', () => {
    cy.get('@component-3').should('exist')
  });

  it('runs axe against the component', () => {
    cy.get('@component-3').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});

describe(`Component :: ${component} :: example 4`, () => {
  state = 'govukCharacterCount';

  it('checks all visible elements are present and visible', () => {
    cy.get('@component-4').should('exist').should('exist');
    cy.get('@component-4').should('exist').should('be.visible');
  });

  it('runs axe against the component', () => {
    cy.get('@component-4').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});

describe(`Component :: ${component} :: example 5`, () => {
  state = 'govukFileUpload';

  it('checks all visible elements are present and visible', () => {
    cy.get('@component-5').should('exist').should('be.visible');
  });

  it('runs axe against the component', () => {
    cy.get('@component-5').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});

describe(`Component :: ${component} :: example 6`, () => {
  state = 'govukNotificationBanner';

  it('checks all visible elements are present and visible', () => {
    cy.get('@component-6').should('exist').should('be.visible');
  });

  it('checks the component should have focus', () => {
    cy.get('@component-6')
      .focused()
      .should('have.class', 'govuk-notification-banner');
  });

  it('runs axe against the component', () => {
    cy.get('@component-6').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});

describe(`Component :: ${component} :: example 7`, () => {
  state = 'govukButton';

  it('checks all visible elements are present and visible', () => {
    cy.get('@component-7').find('.govuk-button').should('exist').should('be.visible');
    cy.get('@component-7').find('.govuk-link').should('exist').should('be.visible');
  });

  it('runs axe against the component', () => {
    cy.get('@component-7').checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});
