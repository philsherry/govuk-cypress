/**
 * @author: @philsherry
 * @function checkPageTitle
 * @description Cypress function to check the page title has the correct elements, with an argument to pass over when the page has personally identifiable information.
 * @example cy.checkPageTitle();
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/page-title
 * @fixture ```html
 * <title>Do you live in the UK? - Your details - Manage your tax credits - GOV.UK<title>
 * ```
 * @params {hasId} Personally identifiable information
 * @example cy.checkPageTitle(hasId);
 * @link https://design.tax.service.gov.uk/hmrc-design-patterns/page-title/#personally-identifiable-information
 * @fixture ```html
 * <title>What is their date of birth? - Their details - Manage your tax credits - GOV.UK<title>
 * ```
 **/

Cypress.Commands.add("checkPageTitle", (subject, options) => {
  let hasId = false;
  let hasSectionName = false;
  let pageHeading = "";
  let sectionName = "";
  const sectionNameRef = ".hmrc-caption-xl";
  let serviceName = "";
  const serviceNameRef = ".govuk-header__link--service-name";
  const govukName = "GOV.UK";

  // Check for sectionNameRef
  /**
   * @function getSectionName
   * @description Cypress function to get the section name from the sub-heading, assuming there is one
   * @returns {boolean}
   **/

  // THIS :first NEEDS TO COME-THE-FUCK-OUT.
  // It’s only here to stop things breaking during development.
  cy.get("h1:first").then(($h1) => {
    pageHeading = $h1.text().trim();
  });

  // Get sectionName from the visible part of `.hmrc-caption-xl`
  // This is most likely one of two things:

  cy.get(".hmrc-caption-xl").then(($sectionName) => {
    if ($sectionName.length === 0) {
      // error, so scream very loudly.
      cy.task("log", "GAHHHH!", $sectionName.length);
      // 1. sectionName.childNodes[1].textContent
    } else if ($sectionName.length === 1) {
      hasSectionName = true;
      sectionName = $sectionName.not(".govuk-visually-hidden").text().trim();
      // document.querySelector(sectionNameRef).childNodes[1].textContent;
      expect(sectionName).to.be.true;
      // 2. sectionName.[aria-hidden="true"].textContent
    } else if ($sectionName.length >= 2) {
      hasSectionName = true;
      sectionName = $sectionName.filter("[aria-hidden='true']").text().trim();
      expect(sectionName).to.be.true;
    }
  });

  // Capture `cy.title()`
  cy.title().then(($title) => {
    // Split the title into an array.
    // Each part should be split with a regular dash (-)
    const titleArray = $title.split(" - ");
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
