/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string */
const page = '/hmrc/add-to-a-list';
const env = require('../../../fixtures/env.json');
const user = require('../../../fixtures/user.json');
const { terminalLog } = require('../../../plugins/hmrc');

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

  // headings etc
  cy.get('.govuk-heading-xl').as('componentHeading');
  cy.get('.govuk-fieldset__legend--m').as('componentSubHeading');
  cy.get('.govuk-hint').as('componentHint');
  cy.get('.govuk-fieldset').as('fieldset');
  cy.get('.govuk-radios__label').as('radioLabel');
  cy.get('.govuk-radios__input').as('radioInput');
  cy.get('.govuk-radios__item:nth-child(1)').as('radio1');
  cy.get('.govuk-radios__item:nth-child(2)').as('radio2');

  // component aliases.
  cy.get('.hmrc-add-to-a-list').as('component');
  cy.get('@component').find('.hmrc-add-to-a-list__contents').as('directors');
  cy.get('@directors')
    .find('.hmrc-add-to-a-list__change .govuk-link')
    .as('directorChange');
  cy.get('@directors')
    .find('.hmrc-add-to-a-list__remove .govuk-link')
    .as('directorRemove');

  // example aliases must be set in beforeEach.
  // keep them in a describe block to scope them to the example.
  describe('sets up aliases for example 1', () => {
    cy.get('@example-1').get('@componentHeading');
    cy.get('@example-1').get('@componentSubHeading');
    cy.get('@example-1').get('@componentHint');
    cy.get('@example-1').get('@component');
    cy.get('@component').get('@directors');
    cy.get('@example-1').get('@fieldset');

    cy.get('@example-1')
      .get('@radio1')
      .get('@radioLabel')
      .as('radio1__label');

    cy.get('@example-1')
      .get('@radio1')
      .get('@radioInput')
      .as('radio1__input');

    cy.get('@example-1')
      .get('@radio2')
      .get('@radioLabel')
      .as('radio2__label');

    cy.get('@example-1')
      .get('@radio2')
      .get('@radioInput')
      .as('radio2__input');

    cy.get('@example-1').find('.govuk-button').as('continue');
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
    cy.get('@componentSubHeading').should('be.visible');
    cy.get('@componentHint').should('be.visible');
    cy.get('@directors').should('be.visible');
    cy.get('@fieldset').should('be.visible');
    cy.get('@radio1__label').should('be.visible');
    cy.get('@radio2__label').should('be.visible');
    cy.get('@continue').should('be.visible');
  });

  it('checks any hidden elements are hidden but present', () => {
    cy.get('@fieldset').should('have.attr', 'aria-describedby');
    cy.get('@fieldset').checkAriaDescribedBy();
  });

  // it checks whether the heading is a legend for a fieldset
  it('checks the heading is a legend for a fieldset', () => {});

  // it checks the focus colours are correct
  it('checks the focus colours are correct', () => {
    state = 'label';
    cy.get('@componentSubHeading').click({ multiple: true }).wait(1000);
    cy.screenshot(`${service}--${component}--${viewport}--${state}`, {
      capture: 'viewport',
    });

    state = 'focus';
    cy.get('@radio1__input').click({ multiple: true }).checkFocusColours();
    cy.screenshot(`${service}--${component}--${viewport}--${state}`, {
      capture: 'viewport',
    });
  });

  it('checks the link context', () => {
    cy.get('@directors').each(() => {
      cy.get('@directorChange').checkLinkContext();
      cy.get('@directorRemove').checkLinkContext();
    });
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
