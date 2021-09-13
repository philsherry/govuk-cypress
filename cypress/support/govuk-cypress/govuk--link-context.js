/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author: @philsherry (&& GitHub CoPilot 🤖)
 * @function checkLinkContext
 * @description Cypress function to check each link has enough unique context for screen reader users to understand its purpose.
 * @example cy.get("@component").checkLinkContext();
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/add-to-a-list/
 * @link https://design-system.service.gov.uk/components/summary-list/
 **/

/**
 * 🤖 AS AN EXPERIMENT, THE MAJORITY OF THIS FUNCTION WAS 🤖
 * 🤖 AUTHORED BY GITHUB COPILOT — I JUST WROTE COMMENTS! 🤖
 **/

Cypress.Commands.add(
  'checkLinkContext',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    cy.get(subject).then(($el) => {
      /**
       * @function normalizeText
       * @description Normalizes passed text; useful before comparing
       * text with spaces and different capitalization.
       * @param {string} s Text to normalize
       **/
      const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase();

      /**
       * @type {string}
       **/
      let visibleText;
      let hiddenText;
      let parentContext;

      /**
       * @function checkVisibleText
       * @description Check that the link has a visible text node.
       * @return {boolean}
       **/
      const checkVisibleText = () => {
        if (visibleText === '') {
          throw new Error(`Link ${$el.attr('href')} has no visible text.`);
        }

        visibleText = normalizeText($el.text());
        expect(visibleText).to.be.true;
      };

      /**
       * @function checkHiddenText
       * @description Check that the link has a hidden text node.
       * @return {boolean}
       **/
      const checkHiddenText = () => {
        if (hiddenText === '') {
          throw new Error(`Link ${$el.attr('href')} has no hidden text.`);
        }

        hiddenText = normalizeText($el.attr('aria-label'));
        expect(hiddenText).to.be.true;
      };

      /**
       * @function checkParentContext
       * @description Check that the link has enough context to be read by screen readers, based upon the content in the parent’s parent element.
       * @return {boolean}
       **/
      const checkParentContext = () => {
        if (parentContext === '') {
          throw new Error(`Link ${$el.attr('href')} has no parent context.`);
        }

        parentContext = normalizeText($el.parent().parent().text());
        expect(parentContext).to.contain(visibleText);
      };

      // Log the variables to the Cypress console.
      cy.task('log', {
        visibleText,
        hiddenText,
        parentContext,
        checkVisibleText,
        checkHiddenText,
        checkParentContext,
      });
    });
  }
);
