/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

/**
 * @link https://github.com/LironEr/cypress-mochawesome-reporter
 **/
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");

/**
 * @link https://github.com/mfrachet/cypress-audit
 **/
const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");

module.exports = (on, config) => {
  // require('cypress-log-to-output').install(on);
  // or, if there is already a before:browser:launch handler, use .browserLaunchHandler inside of it
  // @see https://github.com/flotwig/cypress-log-to-output/issues/5
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
    launchOptions.args = require("cypress-log-to-output").browserLaunchHandler(
      browser,
      launchOptions.args
    );
  });

  on("before:run", async (details) => {
    console.log("override before:run");
    await beforeRunHook(details);
  });

  on("after:run", async () => {
    console.log("override after:run");
    await afterRunHook();
  });

  // Log things to the console
  on("task", {
    log(message) {
      console.log(message);

      return null;
    },
    table(message) {
      console.table(message);

      return null;
    },
    lighthouse: lighthouse((lighthouseReport) => {
      console.log(lighthouseReport); // raw lighthouse reports
    }),
    pa11y: pa11y((pa11yReport) => {
      console.log(pa11yReport); // raw pa11y reports
    }),
  });

  return config;
};
