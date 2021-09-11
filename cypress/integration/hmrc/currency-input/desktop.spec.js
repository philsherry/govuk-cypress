/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string */
const page = '/hmrc/currency-input'
const env = require('../../../fixtures/env.json')
const user = require('../../../fixtures/user.json')
const { terminalLog } = require('../../../plugins/hmrc')

/**
 * @screenshotFormat png
 * @screenshotFileName `${service}--${component}--${viewport}--${state}`
 **/
const service = 'homepage'
const journey = 'desktop'
const thing = 'currency-input'
let state = 'default'

/**
 *
 * <div class="govuk-form-group">
 *   <label class="govuk-label" for="currency">
 *     How much does your employer pay towards this?
 *   </label>
 *   <div id="currency-hint" class="govuk-hint">
 *     For example, £600 or £193.54.
 *   </div>
 *   <div class="govuk-input__wrapper">
 *     <div class="govuk-input__prefix" aria-hidden="true">£</div>
 *     <input class="govuk-input govuk-input--width-10"
 *        id="currency" name="currency" type="text"
 *        spellcheck="false" aria-describedby="currency-hint"/>
 *   </div>
 * </div>
 *
 **/
beforeEach(() => {
  cy.viewport(env.desktop.viewport[0])
  cy.visit(page)
  cy.injectAxe()
  // set up aliases here
  cy.get('.govuk-form-group').as('component')
  cy.get('.govuk-form-group .govuk-label').as('componentLabel')
  cy.get('.govuk-form-group .govuk-hint').as('componentHint')
  cy.get('.govuk-form-group .govuk-input__wrapper').as('componentInputWrapper')
  cy.get('.govuk-form-group .govuk-input__prefix').as('componentInputPrefix')
  cy.get('.govuk-form-group .govuk-input').as('componentInput')
})

describe(`Component :: ${component}`, () => {
  it('checks we’re on the right page', () => {
    cy.server().should((server) => {
      expect(server.method).to.eq('GET')
      expect(server.status).to.eq(200)
    })

    cy.location().should((location) => {
      expect(location.pathname).to.eq(page)
    })
  })

  it('checks all visible elements are present and visible', () => {
    cy.get('@component').should('be.visible')
    cy.get('@componentLabel').should('be.visible')
    cy.get('@componentHint').should('be.visible')
    cy.get('@componentInputWrapper').should('be.visible')
    cy.get('@componentInputPrefix').should('be.visible')
    cy.get('@componentInput').should('be.visible')
  })

  // it checks all hidden elements are hidden but present
  it('checks any hidden elements are hidden but present', () => {
    cy.get('@componentInput').should('have.attr', 'aria-describedby')
  })

  it('screenshots the component for a diff state', () => {
    cy.get('@component').screenshot(
      `${service}--${component}--${viewport}--${state}`,
      {
        capture: 'viewport'
      }
    )
  })

  // it checks the hint is associated with the input

  // it checks the focus colours are correct
  it('checks the focus colours are correct', () => {
    state = 'label'
    cy.get('@componentLabel')
      .click()
      .wait(1000)
    cy.screenshot(`${service}--${component}--${viewport}--${state}`, {
      capture: 'viewport'
    })

    state = 'focus'
    cy.get('@componentInput')
      .focus()
      .wait(2500)
      .focused()
      .should('have.css', 'border-color', 'rgb(11, 12, 12)')
      .should('have.css', 'border-width', '2px')
      .should('have.css', 'outline-color', 'rgb(255, 221, 0)')
      .should('have.css', 'outline-width', '3px')
      .type('13.37')
      .wait(250)
    cy.screenshot(`${service}--${component}--${viewport}--${state}`, {
      capture: 'viewport'
    })
  })

  it('runs axe against the component', () => {
    cy.get('@component').checkA11y(null, null, terminalLog, {
      skipFailures: true
    })
  })
})
