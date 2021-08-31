/* eslint-disable no-undef, no-unused-vars, cypress/no-unnecessary-waiting, sonarjs/no-duplicate-string */
const page = "/govuk/error-summary";
const env = require("../../../fixtures/env.json");
const user = require("../../../fixtures/user.json");
const { terminalLog } = require("../../../plugins/hmrc");

/**
 * @screenshotFormat png
 * @screenshotFileName `${service}--${component}--${viewport}--${state}`
 **/
const service = "govuk";
const component = "error-summary";
const viewport = "desktop";
let state = "default";

beforeEach(() => {
  cy.viewport(env.desktop.viewport[0]);
  cy.visit(page);
  cy.injectAxe();
  // set up example aliases here;
  // component aliases are defined further down.
  cy.get("#component-1").as("component-1");
  cy.get("#component-2").as("component-2");
  cy.get("#component-3").as("component-3");
  cy.get("#component-4").as("component-4");
  cy.get("#component-5").as("component-5");
  cy.get("#component-1 .component-section__example").as("example-1");
  cy.get("#component-2 .component-section__example").as("example-2");
  cy.get("#component-3 .component-section__example").as("example-3");
  cy.get("#component-4 .component-section__example").as("example-4");
  cy.get("#component-5 .component-section__example").as("example-5");
});

describe("checking page things", () => {
  it("should have the correct page title", () => {
    cy.checkPageTitle();
  });
  it("should have an incorrect page title", () => {
    cy.checkPageTitle("hasId");
  });
});

/**
 * @example Default view
 **/
// describe(`Component :: ${component} :: example 1`, () => {
//   it("should check the error summary", () => {
//     cy.get("@example-1").find(".govuk-error-summary").as("component");
//     cy.get("@component").checkGovukErrorSummary();
//     cy.get("@component").checkGovukErrorMessage();
//   });
// });

/**
 * @example Linking from the error summary to each answer
 **/
// describe(`Component :: ${component} :: example 2`, () => {
//   it("sets up aliases for this example", () => {
//     cy.get("@example-2").find(".govuk-error-summary").as("component");
//   });

//   it("checks all visible elements are present and visible", () => {});

//   it("screenshots the component for a diff state", () => {});
// });

/**
 * @example Multiple input fields
 **/
// describe(`Component :: ${component} :: example 3`, () => {
//   it("sets up aliases for this example", () => {
//     cy.get("@example-3").as("component");
//   });

//   it("checks all visible elements are present and visible", () => {});

//   it("screenshots the component for a diff state", () => {});
// });

/**
 * @example Checkboxes
 **/
// describe(`Component :: ${component} :: example 4`, () => {
//   it("sets up aliases for this example", () => {
//     cy.get("@example-4").as("component");
//   });

//   it("checks all visible elements are present and visible", () => {});

//   it("screenshots the component for a diff state", () => {});
// });

/**
 * @example Where to put the error summary
 **/
// describe(`Component :: ${component} :: example 5`, () => {
//   it("sets up aliases for this example", () => {
//     cy.get("@example-5").as("component");
//   });

//   it("checks all visible elements are present and visible", () => {});

//   it("screenshots the component for a diff state", () => {});
// });
