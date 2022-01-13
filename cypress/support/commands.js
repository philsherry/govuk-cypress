// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands

/// <reference types="cypress" />
import './govuk-cypress/index';

/**
 * @link https://docs.cypress.io/api/cypress-api/screenshot-api
 */
Cypress.Screenshot.defaults({
  disableTimersAndAnimations: false,
  overwrite: true,
  screenshotOnRunFailure: false,
});

/**
 * @link https://github.com/cypress-io/cypress/issues/877
 * @use cy.isNotInViewport('[data-cy="some-invisible-element"]')
 * @use cy.isInViewport('[data-cy="some-visible-element"]')
 */
Cypress.Commands.add('isNotInViewport', (element) => {
  cy.get(element).then(($el) => {
    const bottom = Cypress.$(cy.state('window')).height();
    const rect = $el[0].getBoundingClientRect();

    expect(rect.top).to.be.greaterThan(bottom);
    expect(rect.bottom).to.be.greaterThan(bottom);
    expect(rect.top).to.be.greaterThan(bottom);
    expect(rect.bottom).to.be.greaterThan(bottom);
  });
});

Cypress.Commands.add('isInViewport', (element) => {
  cy.get(element).then(($el) => {
    const bottom = Cypress.$(cy.state('window')).height();
    const rect = $el[0].getBoundingClientRect();

    expect(rect.top).not.to.be.greaterThan(bottom);
    expect(rect.bottom).not.to.be.greaterThan(bottom);
    expect(rect.top).not.to.be.greaterThan(bottom);
    expect(rect.bottom).not.to.be.greaterThan(bottom);
  });
});


/**
 * @link https://github.com/cypress-io/cypress/issues/2186#issuecomment-606796041
 * @link https://gist.github.com/NicholasBoll/e584991b36986a85acf0e95101752bc0
 */
const compareColor = (color, property) => (targetElement) => {
  const tempElement = document.createElement('div');
  tempElement.style.color = color;
  tempElement.style.display = 'none'; // make sure it doesn't actually render
  document.body.appendChild(tempElement); // append so that `getComputedStyle` actually works

  const tempColor = getComputedStyle(tempElement).color;
  const targetColor = getComputedStyle(targetElement[0])[property];

  document.body.removeChild(tempElement); // remove it because we're done with it

  expect(tempColor).to.equal(targetColor);
};

Cypress.Commands.overwrite(
  'should',
  (originalFn, subject, expectation, ...args) => {
    const customMatchers = {
      'have.backgroundColor': compareColor(args[0], 'backgroundColor'),
      'have.color': compareColor(args[0], 'color'),
    };

    // See if the expectation is a string and if it is a member of Jest's expect
    if (typeof expectation === 'string' && customMatchers[expectation]) {
      return originalFn(subject, customMatchers[expectation]);
    }
    return originalFn(subject, expectation, ...args);
  }
);

// cy.compareStrings('element1', 'element2');
Cypress.Commands.add(
  'compareStrings',
  (element1, element2) => {
    Cypress.log({
      name: 'compareStrings',
      message: `${element1} || ${element2}`,
    });
    /**
     * Text from the first element.
     * @type {string}
     */
    let text;

    /**
     * Normalizes passed text,
     * useful before comparing text with spaces and different capitalization.
     * @param {string} s Text to normalize
     */
    const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase();

    cy.get(element1).then(($first) => {
      // save text from the first element
      text = normalizeText($first.text());
    });

    cy.get(element2).should(($div) => {
      // we can massage text before comparing
      const secondString = normalizeText($div.text());

      expect(secondString, 'second string').to.equal(text);
    });
  }
);
