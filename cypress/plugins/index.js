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
 * @link https://github.com/mfrachet/cypress-audit
 **/
const { lighthouse, pa11y, prepareAudit } = require('cypress-audit')

module.exports = (on, config) => {

/**
 * @link https://github.com/LironEr/cypress-mochawesome-reporter
 **/
  require('cypress-mochawesome-reporter/plugin')(on);

  require('@cypress/code-coverage/task')(on, config);
  // tell Cypress to use .babelrc file
  // and instrument the specs files
  // only the extra application files will be instrumented
  // not the spec files themselves
  on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

  // require('cypress-log-to-output').install(on);
  // or, if there is already a before:browser:launch handler, use .browserLaunchHandler inside of it
  // @see https://github.com/flotwig/cypress-log-to-output/issues/5
  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
    launchOptions.args =
      require('cypress-log-to-output').browserLaunchHandler(
        browser,
        launchOptions.args
      );
  });

  // Log things to the console
  on('task', {
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
