/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author:
 * @function checkGovukErrorMessage
 * @description Cypress function to check each error message on the page conforms to the standards set by the GOV.UK Design System.
 * @example cy.get("@component").checkGovukErrorMessage();
 * @link https://design-system.service.gov.uk/components/error-message
 * @fixture ```html
 * <div class="govuk-form-group govuk-form-group--error">
 *   <fieldset class="govuk-fieldset" role="group" aria-describedby="passport-issued-hint passport-issued-error">
 *     <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
 *       <h1 class="govuk-fieldset__heading">
 *         When was your passport issued?
 *       </h1>
 *     </legend>
 *     <div id="passport-issued-hint" class="govuk-hint">
 *       For example, 12 11 2007
 *     </div>
 *     <span id="passport-issued-error" class="govuk-error-message">
 *       <span class="govuk-visually-hidden">Error:</span> The date your passport was issued must be in the past
 *     </span>
 *     <div class="govuk-date-input" id="passport-issued">
 *       <div class="govuk-date-input__item">
 *         <div class="govuk-form-group">
 *           <label class="govuk-label govuk-date-input__label" for="passport-issued-day">
 *             Day
 *           </label>
 *           <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="passport-issued-day" name="passport-issued-day" type="text" value="6" pattern="[0-9]*" inputmode="numeric"></div>
 *       </div>
 *       <div class="govuk-date-input__item">
 *         <div class="govuk-form-group">
 *           <label class="govuk-label govuk-date-input__label" for="passport-issued-month">
 *             Month
 *           </label>
 *           <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="passport-issued-month" name="passport-issued-month" type="text" value="3" pattern="[0-9]*" inputmode="numeric"></div>
 *       </div>
 *       <div class="govuk-date-input__item">
 *         <div class="govuk-form-group">
 *           <label class="govuk-label govuk-date-input__label" for="passport-issued-year">
 *             Year
 *           </label>
 *           <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="passport-issued-year" name="passport-issued-year" type="text" value="2076" pattern="[0-9]*" inputmode="numeric"></div>
 *       </div>
 *     </div>
 *   </fieldset>
 * </div>
 * ```
 * @fixture ```html
 * <div class="govuk-form-group govuk-form-group--error">
 *   <fieldset class="govuk-fieldset" aria-describedby="nationality-hint nationality-error">
 *     <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
 *       <h1 class="govuk-fieldset__heading">
 *         What is your nationality?
 *       </h1>
 *     </legend>
 *     <div id="nationality-hint" class="govuk-hint">
 *       If you have dual nationality, select all options that are relevant to you.
 *     </div>
 *     <span id="nationality-error" class="govuk-error-message">
 *       <span class="govuk-visually-hidden">Error:</span> Select if you are British, Irish or a citizen of a different country
 *     </span>
 *     <div class="govuk-checkboxes" data-module="govuk-checkboxes">
 *       <div class="govuk-checkboxes__item">
 *         <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="british">
 *         <label class="govuk-label govuk-checkboxes__label" for="nationality">
 *           British
 *         </label>
 *       </div>
 *       <div class="govuk-checkboxes__item">
 *         <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="irish">
 *         <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
 *           Irish
 *         </label>
 *       </div>
 *       <div class="govuk-checkboxes__item">
 *         <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="other">
 *         <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
 *           Citizen of another country
 *         </label>
 *       </div>
 *     </div>
 *   </fieldset>
 * </div>
 * ```
 * @fixture ```html
 * <div class="govuk-form-group govuk-form-group--error">
 *   <label class="govuk-label" for="national-insurance-number">
 *     National Insurance number
 *   </label>
 *   <div id="national-insurance-number-hint" class="govuk-hint">
 *     It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
 *   </div>
 *   <span id="national-insurance-number-error" class="govuk-error-message">
 *     <span class="govuk-visually-hidden">Error:</span> Enter a National Insurance number in the correct format
 *   </span>
 *   <input class="govuk-input govuk-input--error" id="national-insurance-number" name="national-insurance-number" type="text" aria-describedby="national-insurance-number-hint national-insurance-number-error">
 * </div>
 * ```
 **/
Cypress.Commands.add(
  'checkGovukErrorMessage',
  {
    prevSubject: 'element',
  },
  (subject, options) => {
    cy.get(subject).then(($el) => {
      // Error message should exist
      expect($el).to.exist;

      cy.get(subject).should('have.class', 'govuk-form-group--error');

      // Find `govuk-form-group--error` in the component and run `.checkAriaDescribedBy()` on it.

      // Expect to find the class `govuk-error-message` in the component.
      // Expect `govuk-error-message` to contain the visually-hidden text `Error:`
    });
  }
);
