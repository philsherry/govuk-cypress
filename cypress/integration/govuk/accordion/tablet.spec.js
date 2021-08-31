/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string */
const hostname = `http://localhost:${process.env.PORT || 3000}`;
const page = `${hostname}/govuk/accordion`;
const env = require("../../../fixtures/env.json");
const user = require("../../../fixtures/user.json");
const { terminalLog } = require("../../../plugins/hmrc");

/**
 * @screenshotFormat png
 * @screenshotFileName `${service}--${component}--${viewport}--${state}`
 **/
const service = "homepage";
const journey = "tablet";
let thing = "accordion";
let state = "default";

beforeEach(() => {
  cy.viewport(env.tablet.viewport[0]);
  cy.visit(page);
  cy.injectAxe();
  // set up aliases here
});

describe(`Component :: ${component}`, () => {
  // it checks all visible elements are visible

  // it checks all hidden elements are hidden

  it("screenshots the component for a diff state", () => {
    cy.get("@component").screenshot(
      `${service}--${component}--${viewport}--${state}`,
      {
        capture: "viewport",
      }
    );
  });

  it("runs axe against the component", () => {
    cy.get("@component").checkA11y(null, null, terminalLog, {
      skipFailures: true,
    });
  });
});