/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string */
const page = '/govuk/text-input'
const env = require('../../../fixtures/env.json')
const user = require('../../../fixtures/user.json')
const { terminalLog } = require('../../../plugins/hmrc')

/**
 * @screenshotFormat png
 * @screenshotFileName `${service}--${component}--${viewport}--${state}`
 **/
const service = 'govuk'
const component = 'text-input'
const viewport = 'desktop'
const state = 'default'

// https://design-system.service.gov.uk/components/text-input/input-hint-text/index.html
beforeEach(() => {
  cy.viewport(env.desktop.viewport[0])
  cy.visit(page)
  cy.injectAxe();
})

describe('testing the extend', () => {
  it('should check the aria attribute', () => {
    cy.get('#component-5').as('component')
    cy.get('@component').find('.govuk-input').as('input')
    cy.get('@input').checkAriaDescribedBy()
  })
})
