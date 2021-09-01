module.exports = {
  cypress: {
    body: "Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.",
    component: [
      {
        // components.cypress.component[0]
        body: "Set up these things to run before each test.",
        name: "Test: beforeEach",
        slug: "00-before-each",
        url: "",
      },
      {
        // components.cypress.component[1]
        body: "A quick test to make sure we’re on the correct page.",
        name: "Test: My name is URL",
        slug: "01-my-name-is-url",
        url: "",
      },
      {
        // components.cypress.component[2]
        body: "Check the visibility of things is as it should be.",
        name: "Test: Visibility checks",
        slug: "02-visibility-checks",
        url: "",
      },
      {
        // components.cypress.component[3]
        body: "Take screenshots.",
        name: "Test: Take screenshots",
        slug: "03-take-screenshots",
        url: "",
      },
      {
        // components.cypress.component[4]
        body: "Run Lighthouse audit directly in your E2E test suites.",
        name: "Plugin: cypress-audit",
        slug: "04-cypress-audit",
        url: "https://github.com/mfrachet/cypress-audit",
      },
      {
        // components.cypress.component[5]
        body: "Test accessibility with axe-core in Cypress.",
        name: "Plugin: cypress-axe",
        slug: "05-cypress-axe",
        url: "https://github.com/component-driven/cypress-axe",
      },
      {
        // components.cypress.component[6]
        body: "Visual regression test with cypress.",
        name: "Plugin: cypress-image-diff-js",
        slug: "06-cypress-image-diff-js",
        url: "https://github.com/uktrade/cypress-image-diff",
      },
      {
        // components.cypress.component[7]
        body: "A Cypress plugin that sends all logs that occur in the browser to stdout in the terminal.",
        name: "Plugin: cypress-log-to-output",
        slug: "07-cypress-log-to-output",
        url: "https://github.com/flotwig/cypress-log-to-output",
      },
      {
        // components.cypress.component[8]
        body: "Zero config Mochawesome reporter for Cypress with screenshots.",
        name: "Plugin: cypress-mochawesome-reporter",
        slug: "08-cypress-mochawesome-reporter",
        url: "https://github.com/LironEr/cypress-mochawesome-reporter",
      },
    ],
    env: [
      {
        // components.cypress.env[0].heading
        heading: "Desktop",
        viewport: ["macbook-15"],
      },
      {
        heading: "Mobile",
        viewport: ["iphone-6"],
      },
      {
        heading: "Tablet",
        viewport: ["ipad-2", "portrait"],
      },
    ],
    heading: "Cypress Test Runner",
    url: "https://www.cypress.io/",
  },
  govuk: {
    body: "Components are reusable parts of the user interface that have been made to support a variety of applications.",
    component: [
      {
        // components.govuk.component[0]
        body: "The accordion component lets users show and hide sections of related content on a page.",
        dept: "govuk",
        example: [
          {
            body: "Just links, no context.",
            heading: "Default view",
          },
          {
            body: "Each link has content to explain the context.",
            heading: "With extra context",
          },
        ],
        experimental: true,
        name: "Accordion",
        slug: "accordion",
        url: "https://design-system.service.gov.uk/components/accordion/",
      },
      {
        // components.govuk.component[1]
        body: "Use the back link component to help users go back to the previous page in a multi-page transaction.",
        dept: "govuk",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Back link",
        slug: "back-link",
        url: "https://design-system.service.gov.uk/components/back-link/",
      },
      {
        // components.govuk.component[2]
        body: "The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.",
        dept: "govuk",
        example: [
          {
            body: "The breadcrumb should start with your ‘home’ page and end with the parent section of the current page.",
            heading: "Default view",
          },
          {
            body: "If you have long breadcrumbs you can configure the component to only show the first and last items on mobile devices.",
            heading: "Collapsing breadcrumbs on mobile devices",
          },
        ],
        experimental: false,
        name: "Breadcrumbs",
        slug: "breadcrumbs",
        url: "https://design-system.service.gov.uk/components/breadcrumbs/",
      },
      {
        // components.govuk.component[3]
        body: "Use the button component to help users carry out an action like starting an application or saving their information.",
        dept: "govuk",
        example: [
          {
            body: "Use a default button for the main call to action on a page.",
            heading: "Default buttons",
          },
          {
            body: "Use a start button for the main call to action on your service’s start page. Start buttons do not submit form data, so they use a link tag rather than a button tag.",
            heading: "Start buttons",
          },
          {
            body: "Use secondary buttons for secondary calls to action on a page.",
            heading: "Secondary buttons",
          },
          {
            body: "Warning buttons are designed to make users think carefully before they use them. They only work if used very sparingly. Most services should not need one.",
            heading: "Warning buttons",
          },
          {
            body: "Disabled buttons have poor contrast and can confuse some users, so avoid them if possible.",
            heading: "Disabled buttons",
          },
          {
            body: "Use a button group when two or more buttons are placed together.",
            heading: "Grouping buttons",
          },
          {
            body: "Any links within a button group will automatically align with the buttons.",
            heading: "Links with buttons",
          },
          {
            body: "If you are working in production and research shows that users are frequently sending information twice, you can configure the button to ignore the second click.",
            heading:
              "Stop users from accidentally sending information more than once",
          },
        ],
        experimental: false,
        name: "Button",
        slug: "breadcrumbs",
        url: "https://design-system.service.gov.uk/components/button/",
      },
      {
        // components.govuk.component[4]
        body: "Help users know how much text they can enter when there is a limit on the number of characters.",
        dept: "govuk",
        example: [
          {
            body: "It tells users how many characters they have remaining as they type into a textarea with a character limit.",
            heading: "Default view",
          },
          {
            body: "If you’re asking more than one question on the page, do not set the contents of the `<label>` as the page heading. Read more about asking multiple questions on question pages.",
            heading: "If you’re asking more than one question on the page",
          },
          {
            body: "In some cases it may be more helpful to show a word count. For example, if your question requires a longer answer.",
            heading: "Consider if a word count is more helpful",
          },
          {
            body: "When using a character count, try to set the limit higher than most users will need. Find out what this is by doing user research and data analysis.",
            heading: "Avoid narrow limits",
          },
          {
            body: "Error messages should be styled like this:",
            heading: "Error messages",
          },
        ],
        experimental: false,
        name: "Character count",
        slug: "character-count",
        url: "https://design-system.service.gov.uk/components/character-count/",
      },
      {
        // components.govuk.component[5]
        body: "Let users select one or more options by using the checkboxes component.",
        dept: "govuk",
        example: [
          {
            body: "Unlike with radios, users can select multiple options from a list of checkboxes. Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone.",
            heading: "Default view",
          },
          {
            body: "If you’re asking just one question per page as recommended, you can set the contents of the `<legend>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.",
            heading: "If you’re asking one question on the page",
          },
          {
            body: "If you’re asking more than one question on the page, do not set the contents of the `<legend>` as the page heading. Read more about asking multiple questions on question pages.",
            heading: "If you’re asking more than one question on the page",
          },
          {
            body: "You can add hints to checkbox items to provide additional information about the options.",
            heading: "Checkbox items with hints",
          },
          {
            body: "When ‘none’ would be a valid answer, give users the option to check a box to say none of the other options apply to them — without this option, users would have to leave all of the boxes unchecked. Giving users this option also makes sure they do not skip the question by accident.",
            heading: "Add an option for ‘none’",
          },
          {
            body: "If JavaScript is unavailable, and a user selects both the ‘none’ checkbox and another checkbox, display an error message.",
            heading: "Add an option for ‘none’ (with error)",
          },
          {
            body: "You can ask the user a related question when they select a particular checkbox, so they only see the question when it’s relevant to them.",
            heading: "Conditionally revealing a related question",
          },
          {
            body: "Use standard-sized checkboxes in most cases. However, smaller checkboxes work well on pages where it’s helpful to make them less visually prominent.",
            heading: "Smaller checkboxes",
          },
          {
            body: "Error messages should be styled like this:",
            heading: "Error messages",
          },
        ],
        experimental: false,
        name: "Checkboxes",
        slug: "character-count",
        url: "https://design-system.service.gov.uk/components/checkboxes/",
      },
      {
        // components.govuk.component[6]
        body: "Allow users to accept or reject cookies which are not essential to making your service work.",
        dept: "govuk",
        example: [
          {
            body: "Use this component if your service sets any cookies on a user’s device.",
            heading: "Analytics cookies",
          },
          {
            body: "You can choose this option if your service sets non-essential cookies on the server — your service may also set non-essential cookies on the client.",
            heading: "Additional cookies",
          },
          {
            body: "Once the user has accepted or rejected cookies and set their cookie preferences, reload the page to show a confirmation message.",
            heading: "Additional cookies accepted",
          },
          {
            body: "To help users running JavaScript on their device, you can write some JavaScript code to let them submit their choice and prevent the page from reloading.",
            heading: "Additional cookies (progressive enhancement)",
          },
          {
            body: "Here’s the same example of a progressively enhanced cookie banner, with the confirmation message shown instead.",
            heading: "Additional cookies accepted (progressive enhancement)",
          },
          {
            body: "Use JavaScript to show cookie banner messages to users that have not accepted or rejected cookies by removing the `hidden` attribute as needed.",
            heading: "Analytics cookies (client)",
          },
          {
            body: "Show a confirmation message confirming that the user has either accepted or rejected cookies by removing the `hidden` attribute.",
            heading: "Analytics cookies accepted (client)",
          },
          {
            body: "Show a confirmation message confirming that the user has either accepted or rejected cookies by removing the `hidden` attribute.",
            heading: "Analytics cookies rejected (client)",
          },
          {
            body: "You can use this example text for a service which sets essential and analytics cookies. Analytics cookies are those set by your organisation to collect information about how people are using your digital service.",
            heading: "Content example: essential",
          },
          {
            body: "You can use this example text for a service that sets essential cookies, analytics cookies, or functional cookies to remember the user’s settings but are not essential.",
            heading: "Content example: non-essential",
          },
        ],
        experimental: true,
        name: "Cookie banner",
        slug: "cookie-banner",
        url: "https://design-system.service.gov.uk/components/cookie-banner/",
      },
      {
        // components.govuk.component[7]
        body: "Use the date input component to help users enter a memorable date or one they can easily look up.",
        dept: "govuk",
        example: [
          {
            body: "Use the date input component when you’re asking users for a date they’ll already know, or can look up without using a calendar.",
            heading: "Default view",
          },
          {
            body: "If you’re asking more than one question on the page, do not set the contents of the `<legend>` as the page heading. Read more about asking multiple questions on question pages.",
            heading: "If you’re asking more than one question on the page",
          },
          {
            body: "Use the `autocomplete` attribute on the date input component when you’re asking for a date of birth. This lets browsers autofill the information on a user’s behalf if they’ve entered it previously.",
            heading: "Use the autocomplete attribute for a date of birth",
          },
          {
            body: "If you’re highlighting the whole date, style all the fields like this:",
            heading: "Error messages",
          },
          {
            body: "If you’re highlighting just one field - either the day, month or year - only style the field that has an error. The error message must say which field has an error, like this:",
            heading: "Error messages (one field)",
          },
        ],
        experimental: false,
        name: "Date input",
        slug: "date-input",
        url: "https://design-system.service.gov.uk/components/date-input/",
      },
      {
        // components.govuk.component[8]
        body: "Make a page easier to scan by letting users reveal more detailed information only if they need it.",
        dept: "govuk",
        example: [
          {
            body: "Use the details component to make a page easier to scan when it contains information that only some users will need.",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Details",
        slug: "details",
        url: "https://design-system.service.gov.uk/components/details/",
      },
      {
        // components.govuk.component[9]
        body: "Follow the validation pattern and show an error message when there is a validation error. In the error message explain what went wrong and how to fix it.",
        dept: "govuk",
        example: [
          {
            body: "",
            heading: "Date pattern",
          },
          {
            body: "",
            heading: "Legend",
          },
          {
            body: "",
            heading: "Label",
          },
        ],
        experimental: false,
        name: "Error message",
        slug: "error-message",
        url: "https://design-system.service.gov.uk/components/error-message/",
      },
      {
        // components.govuk.component[10]
        body: "Use this component at the top of a page to summarise any errors a user has made. When a user makes an error, you must show both an error summary and an error message next to each answer that contains an error.",
        dept: "govuk",
        example: [
          {
            body: "Always show an error summary when there is a validation error, even if there’s only one.",
            heading: "Default view",
            url: "example-1.html",
          },
          {
            body: "You must link the errors in the error summary to the answer they relate to.",
            heading: "Linking from the error summary to each answer",
            url: "example-2.html",
          },
          {
            body: "When a user has to enter their answer into multiple fields, such as the day, month and year fields in the date input component, link to the first field that contains an error.",
            heading: "Multiple input fields",
            url: "example-3.html",
          },
          {
            body: "For questions that require a user to select one or more options from a list using radios or checkboxes, link to the first radio or checkbox.",
            heading: "Checkboxes",
            url: "example-4.html",
          },
          {
            body: "Put the error summary at the top of the `main` container. If your page includes breadcrumbs or a back link, place it below these, but above the `<h1>`.",
            heading: "Where to put the error summary",
            url: "example-5.html",
          },
        ],
        experimental: false,
        name: "Error summary",
        slug: "error-summary",
        url: "https://design-system.service.gov.uk/components/error-summary/",
      },
      {
        // components.govuk.component[11]
        body: "Use the fieldset component to group related form inputs.",
        dept: "govuk",
        example: [
          {
            body: "Use the fieldset component when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single fieldset when asking for an address.",
            heading: "Default view",
          },
          {
            body: "If you’re asking just one question per page as recommended, you can set the contents of the `<legend>` as the page heading, as shown in the example below. This is good practice as it means that users of screen readers will only hear the contents once.",
            heading: "Legend as page heading",
          },
        ],
        experimental: false,
        name: "Fieldset",
        slug: "fieldset",
        url: "https://design-system.service.gov.uk/components/fieldset/",
      },
      {
        // components.govuk.component[12]
        body: "Help users select and upload a file.",
        dept: "govuk",
        example: [
          {
            body: "You should only ask users to upload something if it’s critical to the delivery of your service.",
            heading: "Default view",
          },
          {
            body: "Error messages should be styled like this:",
            heading: "Error messages",
          },
        ],
        experimental: false,
        name: "File upload",
        slug: "file-upload",
        url: "https://design-system.service.gov.uk/components/file-upload/",
      },
      {
        // components.govuk.component[13]
        body: "The footer provides copyright, licensing and other information about your service and department.",
        dept: "govuk",
        example: [
          {
            body: "",
            heading: "Default footer",
          },
          {
            body: "",
            heading: "Footer with secondary navigation",
          },
          {
            body: "You can also include links to meta information about a site, like cookies and contact details in the footer.",
            heading: "Footer with links to meta information",
          },
          {
            body: "",
            heading:
              "Footer with secondary navigation and links to meta information",
          },
        ],
        experimental: false,
        name: "Footer",
        slug: "footer",
        url: "https://design-system.service.gov.uk/components/footer/",
      },
      {
        // components.govuk.component[14]
        body: "The GOV.UK header shows users that they are on GOV.UK and which service they are using.",
        dept: "govuk",
        example: [
          {
            body: "Use the default header if your service has 5 pages or fewer.",
            heading: "Default header",
          },
          {
            body: "Use the header with a service name if your service is more than 5 pages long - this can help users understand which service they are using.",
            heading: "Header with service name",
          },
          {
            body: "Use the header with navigation if you need to include basic navigation, contact or account management links.",
            heading: "Header with service name and navigation",
          },
        ],
        experimental: false,
        name: "Header",
        slug: "header",
        url: "https://design-system.service.gov.uk/components/header/",
      },
      {
        // components.govuk.component[15]
        body: "Use the inset text component to differentiate a block of text from the content that surrounds it",
        dept: "govuk",
        example: [
          {
            body: "Use the inset text component to differentiate a block of text from the content that surrounds it",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Inset text",
        slug: "inset-text",
        url: "https://design-system.service.gov.uk/components/inset-text/",
      },
      {
        // components.govuk.component[16]
        body: "Use a notification banner to tell the user about something they need to know about, but that’s not directly related to the page content.",
        dept: "govuk",
        example: [
          {
            body: "Use a ‘neutral’ notification banner if the user needs to know about something that’s happening elsewhere in the service.",
            heading:
              "Telling the user about something that’s happening elsewhere",
          },
          {
            body: "Use a ‘neutral’ blue notification banner if the user needs to know about a problem with the service as a whole.",
            heading:
              "Telling the user about a problem that affects the whole service",
          },
          {
            body: "You can also use a notification banner to tell the user about the outcome of something they’ve just done - but they have not finished using the service, so it does not make sense to use a confirmation page.",
            heading: "Reacting to something the user has done",
          },
        ],
        experimental: true,
        name: "Notification banner",
        slug: "notification-banner",
        url: "https://design-system.service.gov.uk/components/notification-banner/",
      },
      {
        // components.govuk.component[17]
        body: "The panel component is a visible container used on confirmation or results pages to highlight important content.",
        dept: "govuk",
        example: [
          {
            body: "Use the panel component to display important information when a transaction has been  completed.",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Panel",
        slug: "panel",
        url: "https://design-system.service.gov.uk/components/panel/",
      },
      {
        // components.govuk.component[18]
        body: "Use the phase banner component to show users your service is still being worked on.",
        dept: "govuk",
        example: [
          {
            body: "Use an alpha banner when your service is in alpha.",
            heading: "Alpha",
          },
          {
            body: "Use a beta banner when your service is in private or public beta.",
            heading: "Beta",
          },
        ],
        experimental: false,
        name: "Phase banner",
        slug: "phase-banner",
        url: "https://design-system.service.gov.uk/components/",
      },
      {
        // components.govuk.component[19]
        body: "Use the radios component when users can only select one option from a list",
        dept: "govuk",
        example: [
          {
            body: "If you are asking just one question per page as recommended, you can set the contents of the `<legend>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.",
            heading: "If you’re asking one question on the page",
          },
          {
            body: "If you’re asking more than one question on the page, do not set the contents of the `<legend>` as the page heading. Read more about asking multiple questions on question pages.",
            heading: "If you’re asking more than one question on the page",
          },
          {
            body: "In some cases, you can choose to display radios ‘inline’ beside one another (horizontally).",
            heading: "Inline radios",
          },
          {
            body: "You can add hints to radio items to provide additional information about the options.",
            heading: "Radio items with hints",
          },
          {
            body: "If one or more of your radio options is different from the others, it can help users if you separate them using a text divider. The text is usually the word ‘or’.",
            heading: "Radio items with a text divider",
          },
          {
            body: "You can ask the user a related question when they select a particular radio option, so they only see the question when it’s relevant to them.",
            heading: "Conditionally revealing a related question",
          },
          {
            body: "Use standard-sized radios in nearly all cases. However, smaller versions work well on pages where it’s helpful to make them less visually prominent.",
            heading: "Smaller radios",
          },
          {
            body: "Display an error message if none of the radios are selected.",
            heading: "Error messages",
          },
        ],
        experimental: false,
        name: "Radios",
        slug: "radios",
        url: "https://design-system.service.gov.uk/components/radios/",
      },
      {
        // components.govuk.component[20]
        body: "The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.",
        dept: "govuk",
        example: [
          {
            body: "The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Select",
        slug: "select",
        url: "https://design-system.service.gov.uk/components/select/",
      },
      {
        // components.govuk.component[21]
        body: "Use the skip link component to help keyboard-only users skip to the main content on a page.",
        dept: "govuk",
        example: [
          {
            body: "Some people use the tab key on their keyboard to navigate through the links and form elements on a web page.",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Skip link",
        slug: "skip-link",
        url: "https://design-system.service.gov.uk/components/skip-link/",
      },
      {
        // components.govuk.component[22]
        body: "Use the summary list to summarise information, for example, a user’s responses at the end of a form.",
        dept: "govuk",
        example: [
          {
            body: "You can add actions to a summary list, like a ‘Change’ link to let users go back and edit their answer. For sighted users, the actions get their context from the other content in the row they appear in.",
            heading: "Summary list with actions",
          },
          {
            body: "Sometimes you do not allow the user to change their answers to specific questions.",
            heading: "Summary list without actions",
          },
          {
            body: "If you do not include actions in your summary list and it would be better for your design to remove the separating borders, use the `govuk-summary-list--no-border` class.",
            heading: "Summary list without borders",
          },
        ],
        experimental: false,
        name: "Summary list",
        slug: "summary-list",
        url: "https://design-system.service.gov.uk/components/summary-list/",
      },
      {
        // components.govuk.component[23]
        body: "Use the table component to make information easier to compare and scan for users.",
        dept: "govuk",
        example: [
          {
            body: "Use the `<caption>` element to describe a table in the same way you would use a heading. A caption helps users find, navigate and understand tables.",
            heading: "Table captions",
          },
          {
            body: "Use table headers to tell users what the rows and columns represent. Use the scope attribute to help users of assistive technology distinguish between row and column headers.",
            heading: "Table headers",
          },
          {
            body: "When comparing columns of numbers, align the numbers to the right in table cells.",
            heading: "Numbers in a table",
          },
          {
            body: "You can use the width override classes to set the width of table columns.",
            heading: "Custom column widths",
          },
          {
            body: "If the width override classes do not meet your needs you can create your own width classes and apply them to the cells in the table head. These can be added using the classes option in the Nunjucks macro or adding the class directly to the individual cells within `govuk-table__head` as below.",
            heading: "Add your own classes",
          },
        ],
        experimental: false,
        name: "Table",
        slug: "table",
        url: "https://design-system.service.gov.uk/components/table/",
      },
      {
        // components.govuk.component[24]
        body: "The tabs component lets users navigate between related sections of content, displaying one section at a time.",
        dept: "govuk",
        example: [
          {
            body: "Tabs can work well for people who use a service regularly, for example, users of a caseworking system. Their need to perform tasks quickly may be greater than their need for simplicity of first-time use.",
            heading: "Default view",
          },
        ],
        experimental: true,
        name: "Tabs",
        slug: "tabs",
        url: "https://design-system.service.gov.uk/components/tabs/",
      },
      {
        // components.govuk.component[25]
        body: "Use the tag component to show users the status of something.",
        dept: "govuk",
        example: [
          {
            body: "Use the tag component when it’s possible for something to have more than one status and it’s useful for the user to know about that status. For example, you can use a tag to show whether an item in a task list has been ‘completed’.",
            heading: "Default view",
          },
          {
            body: "Sometimes a single status is enough. For example if you need to tell users which parts of an application they’ve finished and which they have not, you may only need a ‘Completed’ tag. Because the user understands that if something does not have a tag, that means it’s incomplete.",
            heading: "Showing one or two statuses",
          },
          {
            body: "Tags should be helpful to users. The more you add, the harder it is for users to remember them. So start with the smallest number of statuses you think might work, then add more if your user research shows there’s a need for them.",
            heading: "Showing multiple statuses",
          },
        ],
        experimental: false,
        name: "Tag",
        slug: "tag",
        url: "https://design-system.service.gov.uk/components/tag/",
      },
      {
        // components.govuk.component[26]
        body: "Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.",
        dept: "govuk",
        example: [
          {
            body: "If you’re asking just one question per page as recommended, you can set the contents of the `<label>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.",
            heading: "Default view",
          },
          {
            body: "If you’re asking more than one question on the page, do not set the contents of the `<label>` as the page heading. Read more about asking multiple questions on question pages.",
            heading: "If you’re asking more than one question on the page",
          },
          {
            body: "Use fixed width inputs for content that has a specific, known length. Postcode inputs should be postcode-sized, telephone number inputs should be telephone number-sized.",
            heading: "Fixed width inputs",
          },
          {
            body: "Use the width override classes to reduce the width of an input in relation to its parent container, for example, to two-thirds.",
            heading: "Fluid width inputs",
          },
          {
            body: "Use hint text for help that’s relevant to the majority of users, like how their information will be used, or where to find it.",
            heading: "Hint text",
          },
          {
            body: "If you’re asking the user to enter a whole number and you want to bring up the numeric keypad on a mobile device, set the `inputmode` attribute to `numeric` and the `pattern` attribute to `[0-9]*`. See how to do this in the HTML and Nunjucks tabs in the following example.",
            heading: "Asking for whole numbers",
          },
          {
            body: "If you’re asking the user to enter a number that might include decimal places, use `input type='text'` without `inputmode` or `pattern` attributes. Do not set the `inputmode` attribute to `decimal` as it causes some devices to bring up a keypad without a key for the decimal separator.",
            heading: "Asking for decimal numbers",
          },
          {
            body: "Use prefixes and suffixes to help users enter things like currencies and measurements.",
            heading: "Prefixes and suffixes",
          },
          {
            body: "",
            heading: "Text inputs with a prefix",
          },
          {
            body: "",
            heading: "Text inputs with a suffix",
          },
          {
            body: "",
            heading: "Use the autocomplete attribute",
          },
          {
            body: "",
            heading: "How and when to spellcheck a user’s input",
          },
          {
            body: "Error messages should be styled like this:",
            heading: "Error messages",
          },
          {
            body: "",
            heading: "If the input has a prefix or a suffix",
          },
        ],
        experimental: false,
        name: "Text input",
        slug: "text-input",
        url: "https://design-system.service.gov.uk/components/text-input/",
      },
      {
        // components.govuk.component[27]
        body: "Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.",
        dept: "govuk",
        example: [
          {
            body: "You must label textareas. Placeholder text is not a suitable substitute for a label, as it disappears when users click inside the textarea.",
            heading: "Default view",
          },
          {
            body: "Make the height of a textarea proportional to the amount of text you expect users to enter. You can set the height of a textarea by by specifying the `rows` attribute.",
            heading: "Use appropriately-sized textareas",
          },
          {
            body: "If you’re asking more than one question on the page, do not set the contents of the `<label> `as the page heading. Read more about asking multiple questions on question pages.",
            heading: "If you’re asking more than one question on the page",
          },
          {
            body: "Error messages should be styled like this:",
            heading: "Error messages",
          },
        ],
        experimental: false,
        name: "Textarea",
        slug: "textarea",
        url: "https://design-system.service.gov.uk/components/textarea/",
      },
      {
        // components.govuk.component[28]
        body: "Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take.",
        dept: "govuk",
        example: [
          {
            body: "You might need to rewrite the hidden text (‘Warning’ in the example) to make it appropriate for your context.",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Warning text",
        slug: "warning-text",
        url: "https://design-system.service.gov.uk/components/warning-text/",
      },
    ],
    heading: "GOV.UK Design System",
    url: "https://design-system.service.gov.uk/",
  },
  hmrc: {
    body: "These are patterns designed specifically for the needs of HMRC users and patterns that are not yet in the GOV.UK Design System.",
    component: [
      {
        // components.hmrc.component[0]
        body: "The account header is used for services that are part of the personal tax account.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Account header",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/account-header/",
      },
      {
        // components.hmrc.component[1]
        body: "This pattern lets the user enter an Accounts Office reference. Do not call it ‘Accounts Office reference number’, ‘accounts office reference’ or ‘PAYE Accounts Office reference’.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: true,
        name: "Accounts office reference",
        slug: "accounts-office-reference",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/accounts-office-reference/",
      },
      {
        // components.hmrc.component[2]
        body: "This pattern lets the user add information with more than one item to a list.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "View a summary of what they have added to the list",
            testing: [
              {
                reason: "Focus colours must be the latest version.",
                wcag: ["1.4.11", "2.4.7"],
              },
              {
                reason: "Hint text must be associated correctly with the checkboxes.",
                wcag: ["1.3.1"],
              },
              {
                reason: "“Do you need to add another director?” should be a `legend` for a `fieldset` around the checkboxes; potential for a nested heading in there.",
                wcag: ["best-practice"],
              },
              {
                reason: "The links must have unique, hidden context for screen reader users.",
                wcag: ["2.4.4", "2.4.9"],
              },
            ],
          },
          {
            body: "",
            heading: "Add things to the list",
            testing: [
              "The focus colours must be the updated version.",
              "The hint text must be associated correctly with the checkboxes.",
              "“Do you need to add another director?” should be a `legend` for a `fieldset` around the checkboxes; potential for a nested heading in there.",
              "The links must have unique, hidden context for screen reader users.",
            ],
          },
          {
            body: "",
            heading: "Check their answers",
            testing: [
              "The focus colours must be the updated version.",
              "The links must have unique, hidden context for screen reader users.",
            ],
          },
          {
            body: "Show all the information about the entry and let the user make a change.",
            heading: "Change things on the list",
            testing: [
              "The focus colours must be the updated version.",
              "The links must have unique, hidden context for screen reader users.",
            ],
          },
          {
            body: "Ask the user to confirm they want to remove something from the list.",
            heading: "Remove things from the list",
            testing: [
              "The heading should be nested in a `legend`.",
              "The focus colours must be the updated version.",
            ],
          },
        ],
        experimental: false,
        name: "Add to a list",
        slug: "add-to-a-list",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/add-to-a-list/",
      },
      {
        // components.hmrc.component[3]
        body: "This pattern asks the user for their consent when we collect and store personal data. The pattern meets our responsibilities under the General Data Protection Regulation 2018 (GDPR) and Data Protection Act 2018 (DPA).",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Ask a yes-no question",
          },
          {
            body: "",
            heading: "Use a single checkbox",
          },
          {
            body: "For when there is more than one type of consent or consent must be separate from other terms and conditions.",
            heading: "Use more than one checkbox",
          },
        ],
        experimental: false,
        name: "Ask the user for their consent",
        slug: "ask-the-user-for-their-consent",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/ask-the-user-for-their-consent/",
      },
      {
        // components.hmrc.component[4]
        body: "This pattern lets the user know we have confirmed their identity. This is part of confirming their identity when they sign in with a Government Gateway account for the first time.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Confirmed identity",
        slug: "confirmed-identity",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/confirmed-identity/",
      },
      {
        // components.hmrc.component[5]
        body: "This pattern lets the user know we could not confirm their identity and what they can do next. This is part of confirming their identity when they sign in with a Government Gateway account for the first time.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Could not confirm identity",
        slug: "could-not-confirm-identity",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/could-not-confirm-identity/",
      },
      {
        // components.hmrc.component[6]
        body: "This pattern lets the user enter an amount of money in British pounds.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Currency input",
        slug: "currency-input",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/currency-input/",
      },
      {
        // components.hmrc.component[7]
        body: "This pattern lets the user enter an employer PAYE reference. Do not call it ‘PAYE employer reference number’, ‘employer PAYE reference number’ or ‘PAYE reference’.",
        dept: "hmrc",
        example: [
          {
            body: "You can ask for the employer PAYE reference as the main heading or `<h1>` of the screen. It can be a question or statement.",
            heading: "Label nested in the main heading",
          },
          {
            body: "Or you can ask for the employer PAYE reference as a normal form label, separate from the `<h1>`.",
            heading: "Used as a regular label",
          },
          {
            body: "Error messages should be styled like this:",
            heading: "Error messages",
          },
        ],
        experimental: true,
        name: "Employer PAYE reference",
        slug: "employer-paye-reference",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/employer-paye-reference/",
      },
      {
        // components.hmrc.component[8]
        body: "The HMRC banner shows external users that they are dealing with HMRC.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "HMRC banner",
        slug: "hmrc-banner",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/hmrc-banner/",
      },
      {
        // components.hmrc.component[9]
        body: "This helps internal HMRC users easily tell the difference between internal and external services.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Internal header",
        slug: "internal-header",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/internal-header/",
      },
      {
        // components.hmrc.component[10]
        body: "This pattern is made up of several screens. It helps HMRC get the details it needs to match an organisation to existing HMRC records.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Asking for business type",
          },
          {
            body: "",
            heading: "Checking if the user has a company registration number",
          },
          {
            body: "",
            heading: "Asking for company registration number",
          },
          {
            body: "",
            heading:
              "Confirming the business name for limited companies and limited liability partnerships",
          },
          {
            body: "",
            heading: "No business match",
          },
        ],
        experimental: false,
        name: "Match an organisation to HMRC records",
        slug: "match-an-organisation-to-hmrc-records",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/match-an-organisation-to-hmrc-records/",
      },
      {
        // components.hmrc.component[11]
        body: "This pattern lets the user know that there is new information to view, like unread messages, and how many of them there are. The notification badge is part of the account header.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Notification badge",
        slug: "notification-badge",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/notification-badge/",
      },
      {
        // components.hmrc.component[12]
        body: "This pattern is the main heading of the current page, which lets the user know what information is being asked for or provided.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Page heading",
        slug: "page-heading",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/page-heading/",
      },
      {
        // components.hmrc.component[13]
        body: "Use the Page not found pattern from the GOV.UK Design System.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Page not found",
        slug: "page-not-found",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/page-not-found/",
      },
      {
        // components.hmrc.component[14]
        body: "The page title is the text displayed in the browser tab. It is the `<title>` not the page heading or `<h1>`.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Page title",
        slug: "page-title",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/page-title/",
      },
      {
        // components.hmrc.component[15]
        body: "This pattern warns the user before we time them out of a service and tells them what has happened when we do time them out.",
        dept: "hmrc",
        example: [
          {
            body: "“You’re about to be signed out”",
            heading: "When the user is signed in",
          },
          {
            body: "If they do nothing, take them to a ‘We signed you out’ page that uses similar content as the warning box.",
            heading: "Sign them out (no message)",
          },
          {
            body: "“We saved your answers.”",
            heading: "Sign them out (with answers)",
          },
          {
            body: "“We did not save your answers.”",
            heading: "Sign them out (no answers)",
          },
          {
            body: "“Continue checking what help you can get with childcare costs”",
            heading: "When the user is not signed in",
          },
          {
            body: "“You deleted your answers”",
            heading: "Deleted answers (them)",
          },
          {
            body: "“For your security, we deleted your answers”",
            heading: "Deleted answers (us)",
          },
        ],
        experimental: true,
        name: "Service timeout",
        slug: "service-timeout",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/service-timeout/",
      },
      {
        // components.hmrc.component[16]
        body: "Use the Service unavailable pattern from the GOV.UK Design System.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "General page",
          },
          {
            body: "",
            heading: "When you know when a service will be available",
          },
          {
            body: "",
            heading: "A link to another service",
          },
          {
            body: "After a service closes.",
            heading: "Service is closed for part of the year (before)",
          },
          {
            body: "Before a service opens.",
            heading: "Service is closed for part of the year (after)",
          },
          {
            body: "",
            heading: "Service is closed forever",
          },
          {
            body: "",
            heading: "Something has replaced the service",
          },
        ],
        experimental: false,
        name: "Service unavailable",
        slug: "service-unavailable",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/service-unavailable/",
      },
      {
        // components.hmrc.component[17]
        body: "This is the GOV.UK header with an extra part to let the user sign out of a service.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Sign out",
        slug: "sign-out",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/sign-out/",
      },
      {
        // components.hmrc.component[18]
        body: "Use these Status tags with the Task list pages pattern from the GOV.UK Design System.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Status tags in Task list pages",
        slug: "status-tags-in-task-list-pages",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/status-tags-in-task-list-pages/",
      },
      {
        // components.hmrc.component[19]
        body: "Use the There is a problem with the service pattern from the GOV.UK Design System.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "General page",
          },
          {
            body: "",
            heading:
              "Service has offline support but no specific page that includes numbers and opening times",
          },
          {
            body: "",
            heading: "A link to another service",
          },
        ],
        experimental: false,
        name: "There is a problem with the service",
        slug: "there-is-a-problem-with-the-service",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/there-is-a-problem-with-the-service/",
      },
      {
        // components.hmrc.component[20]
        body: "This pattern helps users understand what has happened and when. For example, the history of a tax repayment claim.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: true,
        name: "Timeline",
        slug: "timeline",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/timeline/",
      },
      {
        // components.hmrc.component[21]
        body: "This pattern lets the user enter a Unique Taxpayer Reference (UTR). Do not call it a ‘Unique Taxpayer Reference number’.",
        dept: "hmrc",
        example: [
          {
            body: "You can ask for the UTR as the main heading or `<h1>` of the screen. It may be a question or statement.",
            heading: "Label nested in the main heading",
          },
          {
            body: "Or you can ask for the UTR as a normal form label, separate from the `<h1>`.",
            heading: "Used as a regular label",
          },
          {
            body: "Error messages should be styled like this:",
            heading: "Error messages",
          },
        ],
        experimental: true,
        name: "Unique Taxpayer Reference",
        slug: "unique-taxpayer-reference",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/unique-taxpayer-reference/",
      },
      {
        // components.hmrc.component[22]
        body: "This pattern lets the user enter a VAT registration number. Do not call it ‘VAT number’ or ‘VAT identification number’.",
        dept: "hmrc",
        example: [
          {
            body: "You can ask for the VAT registration number as the main heading or `<h1>` of the screen. It may be a question or statement.",
            heading: "Label nested in the main heading",
          },
          {
            body: "Or you can ask for the VAT registration number as a normal form label, separate from the `<h1>`.",
            heading: "Used as a regular label",
          },
          {
            body: "Error messages should be styled like this:",
            heading: "Error messages",
          },
        ],
        experimental: true,
        name: "VAT registration number",
        slug: "vat-registration-number",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/vat-registration-number/",
      },
      {
        // components.hmrc.component[23]
        body: "This pattern lets the user change the language used in a service from English to Welsh and from Welsh to English.",
        dept: "hmrc",
        example: [
          {
            body: "",
            heading: "Default view",
          },
        ],
        experimental: false,
        name: "Welsh language toggle",
        slug: "welsh-language-toggle",
        url: "https://design.tax.service.gov.uk/hmrc-design-patterns/welsh-language-toggle/",
      },
    ],
    heading: "HMRC Design Patterns",
    url: "https://design.tax.service.gov.uk/hmrc-design-patterns/",
  },
};
