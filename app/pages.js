/* eslint-disable sonarjs/no-duplicate-string  */
module.exports = {
  index: {
    body: 'A demonstration of how to use the Cypress framework to test HMRC services.',
    name: 'GOV.UK Cypress framework',
    sections: [
      {
        _id: '0',
        body: 'A guide to what this service is all about, what it aims to achieve, and somewhat importantly—what it is not.',
        name: 'Get started',
        slug: 'get-started',
      },
      {
        _id: '1',
        body: 'Components are reusable parts of the user interface that have been made to support a variety of applications.',
        name: 'GOV.UK Design System',
        slug: 'govuk',
      },
      {
        _id: '2',
        body: 'These are patterns designed specifically for the needs of HMRC users and patterns that are not yet in the GOV.UK Design System.',
        name: 'HMRC Design Patterns',
        slug: 'hmrc',
      },
      {
        _id: '3',
        body: 'Fixtures for common failings and usability issues that the accessibility team see a lot.',
        name: 'Cypress tests for common issues',
        slug: 'tests',
      },
      {
        _id: '4',
        body: 'Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.',
        name: 'Cypress Test Runner',
        slug: 'cypress',
      },
      {
        _id: '5',
        body: 'A quick look over the guidelines, understanding them, and how to meet them.',
        name: 'Web Content Accessibility Guidelines',
        slug: 'wcag',
      },
      {
        _id: '6',
        body: 'A page of handy resources to help you because a better person.',
        name: 'Resources',
        slug: 'resources',
      },
    ],
  },
  start: {
    body: 'A guide to what this service is all about, what it aims to achieve, and somewhat importantly—what it is not.',
    name: 'Start here',
    section: 'Get started',
    slug: 'get-started',
    sections: [
      {
        body: 'This version will aim to tell you what you can hope to get out of this, but without too much jargon.',
        name: 'For the less technical user',
        section: 'Get started',
        slug: 'less-technical',
      },
      {
        body: 'This version will cover the tests in much more detail.',
        name: 'For the more technical user',
        section: 'Get started',
        slug: 'more-technical',
      },
    ],
  },
};
