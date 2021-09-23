/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
/**
 * @author: @philsherry
 * @function checkPageTitle
 * @description Cypress function to check the page title has the correct elements, with an argument to pass over when the page has personally identifiable information.
 * @example cy.checkPageTitle();
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/page-title
 * @fixture `<title>Do you live in the UK? - Your details - Manage your tax credits - GOV.UK<title>`
 *
 * @params {hasId} Personally identifiable information
 * @example cy.checkPageTitle(hasId);
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/page-title/#personally-identifiable-information
 * @fixture `<title>What is their date of birth? - Their details - Manage your tax credits - GOV.UK<title>`
 *
 * @params {hasError} Page is in an error state
 * @example cy.checkPageTitle(error);
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/page-title/#personally-identifiable-information
 * @fixture `<title>Error: What is their date of birth? - Their details - Manage your tax credits - GOV.UK<title>`
 **/

// -- This is a parent command --
Cypress.Commands.add('checkPageTitle', (subject, options) => {
  const hasId = false;
  const hasError = false;
  let hasSectionName = false;
  let pageHeading = '';
  let sectionName = '';
  const sectionNameRef = '.hmrc-caption-xl';
  const serviceName = '';
  const serviceNameRef = '.govuk-header__link--service-name';
  const govukName = 'GOV.UK';

  // Check for sectionNameRef
  /**
   * @function getSectionName
   * @description Cypress function to get the section name from the sub-heading, assuming there is one
   * @returns {boolean}
   **/

  cy.get('h1').then(($h1) => {
    pageHeading = $h1.text().trim();
  });

  /**
   * TODO: Get sectionName from the visible part of `.hmrc-caption-xl`
   * This is most likely one of two things:
   * 1. a free text node
   * 2. a `<span>` element hidden with aria-hidden="true"
   * Example:
   * <p class="govuk-caption-xl hmrc-caption-xl">
   *   <span aria-hidden="true">HMRC Design Patterns</span>
   *   <span class="govuk-visually-hidden">
   *     This section is HMRC Design Patterns
   *   </span>
   * </p>
   **/

  // Capture `cy.title()`
  cy.title().then(($title) => {
    // Split the title into an array.
    // Each part should be split with a regular dash (-)
    const titleArray = $title.split(' - ');
    // Get the length of the array to check if there is a section name
    const titleArrayLength = titleArray.length;


    // First part should match the page heading (h1)
    // Unless it has `hasId` is true (see HMRC PII above)
    if (hasId === true) {
      // no need to match this part exactly
      expect(titleArray[0]).to.contain(pageHeading);
    } else {
      // should match exactly
      expect(titleArray[0]).to.equal(pageHeading);
    }

    // Last part should be “GOV.UK”
    expect(titleArray[titleArrayLength - 1]).to.equal(govukName);
  });
});
