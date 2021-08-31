/**
 * Naming things is hard, which is why this file is called cats.js
 **/
module.exports = {
  serviceDescription:
    "A demonstration of how to use the Cypress framework to test HMRC services.",
  serviceHeading: "GOV.UK Cypress framework",

  cypressHeading: "Cypress Test Runner",
  cypressDescription:
    "Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.",

  hmrcHeading: "HMRC Design Patterns",
  hmrcDescription:
    "These are patterns designed specifically for the needs of HMRC users and patterns that are not yet in the GOV.UK Design System.",

  govukDescription:
    "Components are reusable parts of the user interface that have been made to support a variety of applications.",
  govukHeading: "GOV.UK Design System",

  experimental:
    "This is currently experimental because more research is needed.",

  env: [
    {
      heading: "Desktop",
      viewport: ["macbook-15"],
    },
    {
      heading: "Mobile",
      viewport: ["iphone-6"],
    },
    {
      heading: "Tablet",
      viewport: ["ipad-2", "portrait"],
    },
  ],
};
