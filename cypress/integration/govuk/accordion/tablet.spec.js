/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string */
const hostname = `http://localhost:${process.env.PORT || 3000}`
const page = `${hostname}/govuk/accordion`
const env = require('../../../fixtures/env.json')
const user = require('../../../fixtures/user.json')
const { terminalLog } = require('../../../plugins/hmrc')

/**
 * @screenshotFormat png
 * @screenshotFileName `${service}--${thing}--${viewport}--${state}`
 **/
const service = 'homepage'
const component = 'tablet';
const viewport = 'accordion';
const state = 'default'

beforeEach(() => {
  cy.viewport(env.tablet.viewport[0]);
  cy.visit(page);
  cy.injectAxe();

  // example aliases here…
  cy.get('.fixture-example').as('example');

  // set up aliases here
  cy.get('.govuk-accordion').as('component');
})

describe(`Component :: ${component}`, () => {
  // it checks all visible elements are visible

  // it checks all hidden elements are hidden

  it('screenshots the component for a diff state', () => {
    cy.get('@component').screenshot(
      `${service}--${thing}--${viewport}--${state}`,
      {
        capture: 'viewport'
      }
    )
  })

  it('runs axe against the component', () => {
    cy.get('@component').checkA11y(null, null, terminalLog, {
      skipFailures: true
    })
  })
})
