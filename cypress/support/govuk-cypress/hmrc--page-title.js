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

  cy.get('.hmrc-caption-xl').then(($sectionName) => {
    if ($sectionName.length === 0) {
      // error, so scream very loudly.
      cy.task('log', '---- LENGTH 0:', $sectionName.length);
      // 1. sectionName.childNodes[1].textContent
    } else if ($sectionName.length === 1) {
      cy.task('log', '---- LENGTH 1:', $sectionName.length);
      hasSectionName = true;
      sectionName = $sectionName.not('.govuk-visually-hidden').text().trim();
      // document.querySelector(sectionNameRef).childNodes[1].textContent;
      expect(sectionName).to.be.true;
      // 2. sectionName.[aria-hidden="true"].textContent
    } else if ($sectionName.length >= 2) {
      cy.task('log', '---- LENGTH 2:', $sectionName.length);
      hasSectionName = true;
      sectionName = $sectionName.filter("[aria-hidden='true']").text().trim();
      expect(sectionName).to.be.true;
    }
  });

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

    // Next part should be the section name
    if (hasSectionName === true) {
      expect(titleArray[1]).to.equal(sectionName);
    }

    // Next part should be the service name
    if (hasSectionName === true) {
      expect(titleArray[2]).to.equal(sectionName);
    } else {
      // should match exactly
      expect(titleArray[1]).to.equal(sectionName);
    }

    // Last part should be “GOV.UK”
    if (hasSectionName === true) {
      expect(titleArray[3]).to.equal(govukName);
    } else {
      // should match exactly
      expect(titleArray[2]).to.equal(govukName);
    }
  });
});
