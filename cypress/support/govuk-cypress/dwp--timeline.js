/**
 * @author: @philsherry
 * @function checkDwpTimeline
 * @description Cypress function to check the DWP Timeline component.
 * @example cy.get("@component").checkDwpTimeline();
 * @link https://design-system.dwp.gov.uk/components/timeline/
 * @fixture ```html
 * <div class="govuk-width-container">
 * <div class="govuk-width-container">
 *   <div class="grid-row app-content">
 *     <div class="column-one-third">
 *       <h1 class="govuk-heading-m">Appointments</h1>
 *       <ol class="dwp-timeline">
 *         <li class="dwp-timeline__entry">
 *           <h2 class="govuk-heading-s govuk-!-margin-bottom-1">Appointment Accepted</h2>
 *           <p class="govuk-caption-m govuk-!-margin-bottom-1">by John Smith</p>
 *           <p class="govuk-caption-m">
 *             11th Aug, 2021
 *           </p>
 *         </li>
 *         <li class="dwp-timeline__entry">
 *           <h2 class="govuk-heading-s govuk-!-margin-bottom-1">Appointment Declined</h2>
 *           <p class="govuk-caption-m govuk-!-margin-bottom-1">by John Smith</p>
 *           <p class="govuk-caption-m">
 *             10th Aug, 2021
 *           </p>
 *         </li>
 *       </ol>
 *     </div>
 *   </div>
 * </div>
 * </div>
 * ```
 **/

/** NOTE: This is just in here to demonstrate to Craig that
 *  DWP components can easily drop into these tests as well.
 **/

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
