module.exports = {
  // This one accommodates the things we find in the Design System.
  best: [
    {
      description:
        'When content is revealed as the user selects a radio / checkbox option it is not consistently announced to screen reader users',
      level: 'best-practice',
      ref_id: 'conditionally-revealing-content',
      title: 'Conditionally revealing content',
      url: ''
    },
    {
      description:
        'Links should use the GOV.UK style which applies a highly visible focus style. This greatly assists keyboard-only users and those with vision impairments in locating the currently focussed control.',
      level: 'best-practice',
      ref_id: 'default-browser-link-style',
      title: 'Using default browser link styles',
      url: ''
    },
    {
      description:
        'The error message doesn’t clearly describe the issue that needs to be resolved.',
      level: 'best-practice',
      ref_id: 'error-message',
      title: 'Error message text',
      url: ''
    },
    {
      description:
        'The error message is present for the form control but it is not programmatically associated with it.',
      level: 'best-practice',
      ref_id: 'error-not-associated',
      title: 'Error not associated with input',
      url: ''
    },
    {
      description:
        'The page title not does not follow the service standard validation pattern when an error occurs.',
      level: 'best-practice',
      ref_id: 'error-page-title',
      title: 'Page title not prefixed with the word ‘Error’',
      url: ''
    },
    {
      description:
        'Links within the error summary either do not work or link to the wrong destination.',
      level: 'best-practice',
      ref_id: 'error-summary-links',
      title: 'Error summary contains invalid links',
      url: ''
    },
    {
      description:
        'A validation error occurs and the page is reloaded, but the error summary component is not present.',
      level: 'best-practice',
      ref_id: 'error-summary-missing',
      title: 'Error summary missing',
      url: ''
    },
    {
      description:
        'Before aria was well supported this was common practice (and was part of the old component libraries), however now there are better ways of doing this which don’t overload the label.',
      level: 'best-practice',
      ref_id: 'hint-error-in-label',
      title: 'Hint or error message nested inside label or legend',
      url: ''
    },
    {
      description:
        'Hint copy is present for the form control but it is not programmatically associated with it.',
      level: 'best-practice',
      ref_id: 'hint-not-associated',
      title: 'Hint not associated with input',
      url: 'https://design-system.service.gov.uk/components/text-input/#hint-text'
    },
    {
      description:
        'There are HTML validation issues which will have an effect on assistive technology',
      level: 'best-practice',
      ref_id: 'html-validation-wcag',
      title: 'HTML validation (WCAG)',
      url: ''
    },
    {
      description:
        'HTML5 validation is triggered when certain attributes are added to form controls, such as `pattern`, `required` and certain `type` values.',
      level: 'best-practice',
      ref_id: 'html5-validation-present',
      title: 'HTML5 form field validation present',
      url: ''
    },
    {
      description:
        'Autocomplete attributes are [missing from | incorrect on] form controls which are asking for personal data from the user (eg name, email address, phone numbers, address).',
      level: 'best-practice',
      ref_id: 'missing-autocomplete',
      title: 'Missing/incorrect autocomplete attribute',
      url: ''
    },
    {
      description:
        'When displaying multiple fields which are to be considered as a group (for example checkboxes or radio buttons) they should be wrapped in a `fieldset` and this should be accompanied by a `legend` as the `fieldset`’s first child. Whilst a `legend` is strictly optional, it forms part of the contextual placement for the fields within so should always be added. If the contained fields’ individual labels do not convey the meaning alone then this becomes a WCAG issue.',
      level: 'best-practice',
      ref_id: 'missing-fieldset-or-legend',
      title: 'Missing fieldset or legend',
      url: ''
    },
    {
      description:
        'Inputmodes are a useful hint for browsers to present the correct virtual keyboard for the required data. For example when asking for a number the device can use the inputmode to present a numeric keyboard.',
      level: 'best-practice',
      ref_id: 'missing-inputmode',
      title: 'Missing inputmode',
      url: ''
    },
    {
      description:
        'Where there is a requirement for data to be entered in a particular way, the user needs to be informed of this up front.',
      level: 'best-practice',
      ref_id: 'missing-instructions',
      title: 'Missing instructions',
      url: ''
    },
    {
      description:
        'Each form input must have an accessible name (unless it has `type=&quot;hidden&quot;`). When it is visible this allows users with lower dexterity to click on the label to focus the input, and allows people using voice recognition to say the visible name to access the input.',
      level: 'best-practice',
      ref_id: 'missing-label',
      title: 'Missing label',
      url: ''
    },
    {
      description:
        'It is possible to nest a fieldset inside another fieldset. Although it is valid markup, screen readers do not automatically indicate the end of a fieldset which can make if difficult for users to confidently know which fields belong to which fieldset.',
      level: 'best-practice',
      ref_id: 'nested-fieldsets',
      title: 'Nested fieldsets',
      url: ''
    },
    {
      description:
        'Links that open in a new tab should contain text informing the user that they will be taken to a new browser tab and include the appropriate `rel` attributes for the type of content being accessed.',
      level: 'best-practice',
      ref_id: 'open-in-new-window-links',
      title: 'Opening content in a new tab',
      url: ''
    },
    {
      description:
        'The page title should include specific parts to ensure the user knows which page they are on and which service. As the page title is the first thing a screen-reader user hears when a page loads it is important it is correct and doesn’t add any confusion.',
      level: 'best-practice',
      ref_id: 'page-title-incomplete',
      title: 'Page title incomplete',
      url: ''
    },
    {
      description:
        'While the service has a timeout dialog and it is presented correctly, the user’s session is being lost.',
      level: 'best-practice',
      ref_id: 'timeout-dialog-cannot-extend-session',
      title: 'Timeout dialog - cannot extend session',
      url: ''
    },
    {
      description:
        'The page does not contain the timeout dialog, this is critical in allowing users the time they need to work through a service and complete tasks without losing data.',
      level: 'best-practice',
      ref_id: 'timeout-dialog',
      title: 'No timeout dialog',
      url: ''
    },
    {
      description:
        'For certain fields it is better to use specific `type` attributes rather than the default `type=&quot;text&quot;`.',
      level: 'best-practice',
      ref_id: 'type-attribute-incorrect',
      title: 'Type attribute incorrect',
      url: ''
    },
    {
      description:
        'Each form input must have an accessible name (unless it has `type=&quot;hidden&quot;`). When it is visible this allows users with lower dexterity to click on the label to focus the input, and allows people using voice recognition to say the visible name to access the input.',
      level: 'best-practice',
      ref_id: 'unassociated-label',
      title: 'Unassociated label',
      url: ''
    },
    {
      description:
        'When validating data, spaces and upper/lower-casing should be permitted as long as it does not change the meaning of the data. This applies even if a format is indicated in hint copy.',
      level: 'best-practice',
      ref_id: 'validation',
      title: 'Validation',
      url: ''
    },
    {
      description:
        'When switching the language of the page to Welsh some parts remain as English and are not marked up with the appropriate language attribute to differentiate them from the other content.',
      level: 'best-practice',
      ref_id: 'welsh-translations',
      title: 'Content not translated to Welsh',
      url: ''
    },
    {
      description: 'How to markup and style labels, legends and headings.',
      level: 'best-practice',
      ref_id: 'labels-legends-headings',
      title: 'Making labels and legends headings',
      url: 'https://design-system.service.gov.uk/get-started/labels-legends-headings/'
    },
    {
      description:
        'Some people use keyboards or other devices to navigate through a page by jumping from one interactive element to the next. Focus states let users know which element they’re currently on and is ready to be interacted with.',
      level: 'best-practice',
      ref_id: 'focus-states',
      title: 'Understanding focus state styles',
      url: 'https://design-system.service.gov.uk/get-started/focus-states/'
    }
  ],
  wcag: [
    {
      description:
        'Information and user interface components must be presentable to users in ways they can perceive.',
      guidelines: [
        {
          description:
            'Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.',
          ref_id: '1.1',
          references: [
            {
              title: 'Understanding Guideline 1.1',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/text-alternatives.html'
            }
          ],
          success_criteria: [
            {
              description:
                'All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.',
              level: 'A',
              notes: null,
              ref_id: '1.1.1',
              references: [
                {
                  title: 'How to Meet 1.1.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#non-text-content'
                },
                {
                  title: 'Understanding 1.1.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Guideline 4.1 for additional requirements for controls and content that accepts user input.)',
                  title: 'Controls, Input',
                  type: 'exception'
                },
                {
                  description:
                    'If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)',
                  title: 'Time-based Media',
                  type: 'exception'
                },
                {
                  description:
                    'If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.',
                  title: 'Test',
                  type: 'exception'
                },
                {
                  description:
                    'If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.',
                  title: 'Sensory',
                  type: 'exception'
                },
                {
                  description:
                    'If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.',
                  title: 'CAPTCHA',
                  type: 'exception'
                },
                {
                  description:
                    'If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.',
                  title: 'Decoration, Formatting, Invisible',
                  type: 'exception'
                }
              ],
              title: 'Non-text Content',
              url: 'https://www.w3.org/TR/WCAG21/#non-text-content'
            }
          ],
          title: 'Text Alternatives',
          url: 'https://www.w3.org/TR/WCAG21/#text-alternatives'
        },
        {
          description: 'Provide alternatives for time-based media.',
          ref_id: '1.2',
          references: [
            {
              title: 'Understanding Guideline 1.2',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/time-based-media.html'
            }
          ],
          success_criteria: [
            {
              description:
                'For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such.',
              level: 'A',
              notes: null,
              ref_id: '1.2.1',
              references: [
                {
                  title: 'How to Meet 1.2.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded'
                },
                {
                  title: 'Understanding 1.2.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.',
                  title: 'Prerecorded Audio-only',
                  type: 'all_true'
                },
                {
                  description:
                    'Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.',
                  title: 'Prerecorded Video-only',
                  type: 'all_true'
                }
              ],
              title: 'Audio-only and Video-only (Prerecorded)',
              url: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded'
            },
            {
              description:
                'Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
              level: 'A',
              notes: null,
              ref_id: '1.2.2',
              references: [
                {
                  title: 'How to Meet 1.2.2',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#captions-prerecorded'
                },
                {
                  title: 'Understanding 1.2.2',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html'
                }
              ],
              special_cases: null,
              title: 'Captions (Prerecorded)',
              url: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded'
            },
            {
              description:
                'An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
              level: 'A',
              notes: null,
              ref_id: '1.2.3',
              references: [
                {
                  title: 'How to Meet 1.2.3',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-description-or-media-alternative-prerecorded'
                },
                {
                  title: 'Understanding 1.2.3',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html'
                }
              ],
              special_cases: null,
              title: 'Audio Description or Media Alternative (Prerecorded)',
              url: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded'
            },
            {
              description:
                'Captions are provided for all live audio content in synchronized media.',
              level: 'AA',
              notes: null,
              ref_id: '1.2.4',
              references: [
                {
                  title: 'How to Meet 1.2.4',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html'
                },
                {
                  title: 'Understanding 1.2.4',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html'
                }
              ],
              special_cases: null,
              title: 'Captions (Live)',
              url: 'https://www.w3.org/TR/WCAG21/#captions-live'
            },
            {
              description:
                'Audio description is provided for all prerecorded video content in synchronized media.',
              level: 'AA',
              notes: null,
              ref_id: '1.2.5',
              references: [
                {
                  title: 'How to Meet 1.2.5',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-description-prerecorded'
                },
                {
                  title: 'Understanding 1.2.5',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html'
                }
              ],
              special_cases: null,
              title: 'Audio Description (Prerecorded)',
              url: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded'
            },
            {
              description:
                'Sign language interpretation is provided for all prerecorded audio content in synchronized media.',
              level: 'AAA',
              notes: null,
              ref_id: '1.2.6',
              references: [
                {
                  title: 'How to Meet 1.2.6',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#sign-language-prerecorded'
                },
                {
                  title: 'Understanding 1.2.6',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html'
                }
              ],
              special_cases: null,
              title: 'Sign Language (Prerecorded)',
              url: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded'
            },
            {
              description:
                'Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.',
              level: 'AAA',
              notes: null,
              ref_id: '1.2.7',
              references: [
                {
                  title: 'How to Meet 1.2.7',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#extended-audio-description-prerecorded'
                },
                {
                  title: 'Understanding 1.2.7',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded.html'
                }
              ],
              special_cases: null,
              title: 'Extended Audio Description (Prerecorded)',
              url: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded'
            },
            {
              description:
                'An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.',
              level: 'AAA',
              notes: null,
              ref_id: '1.2.8',
              references: [
                {
                  title: 'How to Meet 1.2.8',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#media-alternative-prerecorded'
                },
                {
                  title: 'Understanding 1.2.8',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html'
                }
              ],
              special_cases: null,
              title: 'Media Alternative (Prerecorded)',
              url: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded'
            },
            {
              description:
                ' An alternative for time-based media that presents equivalent information for live audio-only content is provided.',
              level: 'AAA',
              notes: null,
              ref_id: '1.2.9',
              references: [
                {
                  title: 'How to Meet 1.2.9',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-only-live'
                },
                {
                  title: 'Understanding 1.2.9',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live.html'
                }
              ],
              special_cases: null,
              title: 'Audio-only (Live)',
              url: 'https://www.w3.org/TR/WCAG21/#audio-only-live'
            }
          ],
          title: 'Time-based Media',
          url: 'https://www.w3.org/TR/WCAG21/#time-based-media'
        },
        {
          description:
            'Create content that can be presented in different ways (for example simpler layout) without losing information or structure.',
          ref_id: '1.3',
          references: [
            {
              title: 'Understanding Guideline 1.3',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/adaptable.html'
            }
          ],
          success_criteria: [
            {
              description:
                'Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.',
              level: 'A',
              notes: null,
              ref_id: '1.3.1',
              references: [
                {
                  title: 'How to Meet 1.3.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships'
                },
                {
                  title: 'Understanding 1.3.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html'
                }
              ],
              special_cases: null,
              title: 'Info and Relationships',
              url: 'https://www.w3.org/TR/WCAG21/#info-and-relationships'
            },
            {
              description:
                'When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.',
              level: 'A',
              notes: null,
              ref_id: '1.3.2',
              references: [
                {
                  title: 'How to Meet 1.3.2',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence'
                },
                {
                  title: 'Understanding 1.3.2',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html'
                }
              ],
              special_cases: null,
              title: 'Meaningful Sequence',
              url: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence'
            },
            {
              description:
                'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.',
              level: 'A',
              notes: [
                {
                  content:
                    'For requirements related to color, refer to Guideline 1.4.'
                }
              ],
              ref_id: '1.3.3',
              references: [
                {
                  title: 'How to Meet 1.3.3',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#sensory-characteristics'
                },
                {
                  title: 'Understanding 1.3.3',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html'
                }
              ],
              special_cases: null,
              title: 'Sensory Characteristics',
              url: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics'
            },
            {
              description:
                'Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.',
              level: 'AA',
              notes: [
                {
                  content:
                    'Examples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where binary display orientation is not applicable.'
                }
              ],
              ref_id: '1.3.4',
              references: [
                {
                  title: 'How to Meet 1.3.4',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#orientation'
                },
                {
                  title: 'Understanding 1.3.4',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/orientation.html'
                }
              ],
              special_cases: null,
              title: 'Orientation',
              url: 'https://www.w3.org/TR/WCAG21/#orientation'
            },
            {
              description:
                'The purpose of each input field collecting information about the user can be programmatically determined when:',
              level: 'AA',
              notes: null,
              ref_id: '1.3.5',
              references: [
                {
                  title: 'How to Meet 1.3.5',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#identify-input-purpose'
                },
                {
                  title: 'Understanding 1.3.5',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html'
                }
              ],
              special_cases: [
                {
                  title:
                    'The input field serves a purpose identified in the Input Purposes for User Interface Components section; and',
                  type: 'all_true'
                },
                {
                  title:
                    'The content is implemented using technologies with support for identifying the expected meaning for form input data.',
                  type: 'all_true'
                }
              ],
              title: 'Identify Input Purpose',
              url: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose'
            },
            {
              description:
                'In content implemented using markup languages, the purpose of User Interface Components, icons, and regions can be programmatically determined.',
              level: 'AAA',
              notes: null,
              ref_id: '1.3.6',
              references: [
                {
                  title: 'How to Meet 1.3.6',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#identify-purpose'
                },
                {
                  title: 'Understanding 1.3.6',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html'
                }
              ],
              special_cases: null,
              title: 'Identify Purpose',
              url: 'https://www.w3.org/TR/WCAG21/#identify-purpose'
            }
          ],
          title: 'Adaptable',
          url: 'https://www.w3.org/TR/WCAG21/#adaptable'
        },
        {
          description:
            'Make it easier for users to see and hear content including separating foreground from background.',
          ref_id: '1.4',
          references: [
            {
              title: 'Understanding Guideline 1.4',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/distinguishable.html'
            }
          ],
          success_criteria: [
            {
              description:
                'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.',
              level: 'A',
              notes: [
                {
                  content:
                    'This success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding.'
                }
              ],
              ref_id: '1.4.1',
              references: [
                {
                  title: 'How to Meet 1.4.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#use-of-color'
                },
                {
                  title: 'Understanding 1.4.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html'
                }
              ],
              special_cases: null,
              title: 'Use of Color',
              url: 'https://www.w3.org/TR/WCAG21/#use-of-color'
            },
            {
              description:
                'If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.',
              level: 'A',
              notes: [
                {
                  content:
                    'Since any content that does not meet this success criterion can interfere with a user’s ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference. (https://www.w3.org/TR/WCAG21/#cc5)'
                }
              ],
              ref_id: '1.4.2',
              references: [
                {
                  title: 'How to Meet 1.4.2',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-control'
                },
                {
                  title: 'Understanding 1.4.2',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html'
                }
              ],
              special_cases: null,
              title: 'Audio Control',
              url: 'https://www.w3.org/TR/WCAG21/#audio-control'
            },
            {
              description:
                ' The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:',
              level: 'AA',
              notes: null,
              ref_id: '1.4.3',
              references: [
                {
                  title: 'How to Meet 1.4.3',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum'
                },
                {
                  title: 'Understanding 1.4.3',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;',
                  title: 'Large Text',
                  type: 'exception'
                },
                {
                  description:
                    'Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.',
                  title: 'Incidental',
                  type: 'exception'
                },
                {
                  description:
                    'Text that is part of a logo or brand name has no minimum contrast requirement.',
                  title: 'Logotypes',
                  type: 'exception'
                }
              ],
              title: 'Contrast (Minimum)',
              url: 'https://www.w3.org/TR/WCAG21/#contrast-minimum'
            },
            {
              description:
                'Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.',
              level: 'AA',
              notes: null,
              ref_id: '1.4.4',
              references: [
                {
                  title: 'How to Meet 1.4.4',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#resize-text'
                },
                {
                  title: 'Understanding 1.4.4',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html'
                }
              ],
              special_cases: null,
              title: 'Resize text',
              url: 'https://www.w3.org/TR/WCAG21/#resize-text'
            },
            {
              description:
                'If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following:',
              level: 'AA',
              notes: [
                {
                  content:
                    'Logotypes (text that is part of a logo or brand name) are considered essential.'
                }
              ],
              ref_id: '1.4.5',
              references: [
                {
                  title: 'How to Meet 1.4.5',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#images-of-text'
                },
                {
                  title: 'Understanding 1.4.5',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'The image of text can be visually customized to the user’s requirements;',
                  title: 'Customizable',
                  type: 'exception'
                },
                {
                  description:
                    'A particular presentation of text is essential to the information being conveyed.',
                  title: 'Essential',
                  type: 'exception'
                }
              ],
              title: 'Images of Text',
              url: 'https://www.w3.org/TR/WCAG21/#images-of-text'
            },
            {
              description:
                'The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following: ',
              level: 'AAA',
              notes: null,
              ref_id: '1.4.6',
              references: [
                {
                  title: 'How to Meet 1.4.6',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced'
                },
                {
                  title: 'Understanding 1.4.6',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;',
                  title: 'Large Text',
                  type: 'exception'
                },
                {
                  description:
                    'Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.',
                  title: 'Incidental',
                  type: 'exception'
                },
                {
                  description:
                    'Text that is part of a logo or brand name has no minimum contrast requirement.',
                  title: 'Logotypes',
                  type: 'exception'
                }
              ],
              title: 'Contrast (Enhanced)',
              url: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced'
            },
            {
              description:
                'For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true:',
              level: 'AAA',
              notes: [
                {
                  content:
                    'Per the definition of ‘decibel’, background sound that meets this requirement will be approximately four times quieter than the foreground speech content.'
                }
              ],
              ref_id: '1.4.7',
              references: [
                {
                  title: 'How to Meet 1.4.7',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#low-or-no-background-audio'
                },
                {
                  title: 'Understanding 1.4.7',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio.html'
                }
              ],
              special_cases: [
                {
                  description: 'The audio does not contain background sounds.',
                  title: 'No Background',
                  type: 'at_least_one'
                },
                {
                  description: 'The background sounds can be turned off.',
                  title: 'Turn Off',
                  type: 'at_least_one'
                },
                {
                  description:
                    'The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.',
                  title: '20 dB',
                  type: 'at_least_one'
                }
              ],
              title: 'Low or No Background Audio',
              url: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio'
            },
            {
              description:
                'For the visual presentation of blocks of text, a mechanism is available to achieve the following:',
              level: 'AAA',
              notes: null,
              ref_id: '1.4.8',
              references: [
                {
                  title: 'How to Meet 1.4.8',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation'
                },
                {
                  title: 'Understanding 1.4.8',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html'
                }
              ],
              special_cases: [
                {
                  title:
                    'Foreground and background colors can be selected by the user.',
                  type: 'all_true'
                },
                {
                  title:
                    'Width is no more than 80 characters or glyphs (40 if CJK).',
                  type: 'all_true'
                },
                {
                  title:
                    'Text is not justified (aligned to both the left and the right margins).',
                  type: 'all_true'
                },
                {
                  title:
                    'Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.',
                  type: 'all_true'
                },
                {
                  title:
                    'Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.',
                  type: 'all_true'
                }
              ],
              title: 'Visual Presentation',
              url: 'https://www.w3.org/TR/WCAG21/#visual-presentation'
            },
            {
              description:
                'Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.',
              level: 'AAA',
              notes: [
                {
                  content:
                    'Logotypes (text that is part of a logo or brand name) are considered essential.'
                }
              ],
              ref_id: '1.4.9',
              references: [
                {
                  title: 'How to Meet 1.4.9',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#images-of-text-no-exception'
                },
                {
                  title: 'Understanding 1.4.9',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html'
                }
              ],
              special_cases: null,
              title: 'Images of Text (No Exception)',
              url: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception'
            },
            {
              description:
                'Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:',
              level: 'AA',
              notes: [
                {
                  content:
                    'Note: 320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content which are designed to scroll horizontally (e.g. with vertical text), the 256 CSS pixels is equivalent to a starting viewport height of 1024px at 400% zoom.'
                },
                {
                  content:
                    'Examples of content which require two-dimensional layout are images, maps, diagrams, video, games, presentations, data tables, and interfaces where it is necessary to keep toolbars in view while manipulating content.'
                }
              ],
              ref_id: '1.4.10',
              references: [
                {
                  title: 'How to Meet 1.4.10',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#reflow'
                },
                {
                  title: 'Understanding 1.4.10',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/reflow.html'
                }
              ],
              special_cases: [
                {
                  title:
                    'Vertical scrolling content at a width equivalent to 320 CSS pixels;',
                  type: 'all_true'
                },
                {
                  title:
                    'Horizontal scrolling content at a height equivalent to 256 CSS pixels.',
                  type: 'all_true'
                },
                {
                  title:
                    'Except for parts of the content which require two-dimensional layout for usage or meaning.',
                  type: 'exception'
                }
              ],
              title: 'Reflow',
              url: 'https://www.w3.org/TR/WCAG21/#reflow'
            },
            {
              description:
                'The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):',
              level: 'AA',
              notes: null,
              ref_id: '1.4.11',
              references: [
                {
                  title: 'How to Meet 1.4.11',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast'
                },
                {
                  title: 'Understanding 1.4.11',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;',
                  title: 'User Interface Components',
                  type: 'all_true'
                },
                {
                  description:
                    'Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.',
                  title: 'Graphical Objects',
                  type: 'all_true'
                }
              ],
              title: 'Non-text Contrast',
              url: 'https://www.w3.org/TR/WCAG21/#non-text-contrast'
            },
            {
              description:
                'In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property:',
              level: 'AA',
              notes: null,
              ref_id: '1.4.12',
              references: [
                {
                  title: 'How to Meet 1.4.12',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#text-spacing'
                },
                {
                  title: 'Understanding 1.4.12',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html'
                }
              ],
              special_cases: [
                {
                  title:
                    'Line height (line spacing) to at least 1.5 times the font size;',
                  type: 'all_true'
                },
                {
                  title:
                    'Spacing following paragraphs to at least 2 times the font size;',
                  type: 'all_true'
                },
                {
                  title:
                    'Letter spacing (tracking) to at least 0.12 times the font size;',
                  type: 'all_true'
                },
                {
                  title: 'Word spacing to at least 0.16 times the font size.',
                  type: 'all_true'
                },
                {
                  title:
                    'Exception: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.',
                  type: 'exception'
                }
              ],
              title: 'Text Spacing',
              url: 'https://www.w3.org/TR/WCAG21/#text-spacing'
            },
            {
              description:
                'Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:',
              level: 'AA',
              notes: [
                {
                  content:
                    'Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML title attribute.'
                },
                {
                  content:
                    'Custom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.'
                }
              ],
              ref_id: '1.4.13',
              references: [
                {
                  title: 'How to Meet 1.4.13',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus'
                },
                {
                  title: 'Understanding 1.4.13',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content;',
                  title: 'Dismissable',
                  type: 'all_true'
                },
                {
                  description:
                    'If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;',
                  title: 'Hoverable',
                  type: 'all_true'
                },
                {
                  description:
                    'The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.',
                  title: 'Persistent',
                  type: 'all_true'
                },
                {
                  title:
                    'Exception: The visual presentation of the additional content is controlled by the user agent and is not modified by the author.',
                  type: 'exception'
                }
              ],
              title: 'Content on Hover or Focus',
              url: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus'
            }
          ],
          title: 'Distinguishable',
          url: 'https://www.w3.org/TR/WCAG21/#distinguishable'
        }
      ],
      ref_id: '1',
      title: 'Perceivable',
      url: 'https://www.w3.org/TR/WCAG21/#perceivable'
    },
    {
      description: 'User interface components and navigation must be operable.',
      guidelines: [
        {
          description: 'Make all functionality available from a keyboard.',
          ref_id: '2.1',
          references: [
            {
              title: 'Understanding Guideline 2.1',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible.html'
            }
          ],
          success_criteria: [
            {
              description:
                'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user’s movement and not just the endpoints.',
              level: 'A',
              notes: [
                {
                  content:
                    'This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.'
                },
                {
                  content:
                    'This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.'
                }
              ],
              ref_id: '2.1.1',
              references: [
                {
                  title: 'How to Meet 2.1.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#keyboard'
                },
                {
                  title: 'Understanding 2.1.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html'
                }
              ],
              special_cases: null,
              title: 'Keyboard',
              url: 'https://www.w3.org/TR/WCAG21/#keyboard'
            },
            {
              description:
                'If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.',
              level: 'A',
              notes: [
                {
                  content:
                    'Since any content that does not meet this success criterion can interfere with a user’s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference. (https://www.w3.org/TR/WCAG21/#cc5)'
                }
              ],
              ref_id: '2.1.2',
              references: [
                {
                  title: 'How to Meet 2.1.2',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap'
                },
                {
                  title: 'Understanding 2.1.2',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html'
                }
              ],
              special_cases: null,
              title: 'No Keyboard Trap',
              url: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap'
            },
            {
              description:
                'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.',
              level: 'AAA',
              notes: null,
              ref_id: '2.1.3',
              references: [
                {
                  title: 'How to Meet 2.1.3',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#keyboard-no-exception'
                },
                {
                  title: 'Understanding 2.1.3',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html'
                }
              ],
              special_cases: null,
              title: 'Keyboard (No Exception)',
              url: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception'
            },
            {
              description:
                'If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:',
              level: 'A',
              notes: null,
              ref_id: '2.1.4',
              references: [
                {
                  title: 'How to Meet 2.1.4',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#character-key-shortcuts'
                },
                {
                  title: 'Understanding 2.1.4',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'A mechanism is available to turn the shortcut off;',
                  title: 'Turn off',
                  type: 'at_least_one'
                },
                {
                  description:
                    'A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc);',
                  title: 'Remap',
                  type: 'at_least_one'
                },
                {
                  description:
                    'The keyboard shortcut for a user interface component is only active when that component has focus.',
                  title: 'Active only on focus',
                  type: 'at_least_one'
                }
              ],
              title: 'Character Key Shortcuts',
              url: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts'
            }
          ],
          title: 'Keyboard Accessible',
          url: 'https://www.w3.org/TR/WCAG21/#keyboard-accessible'
        },
        {
          description: 'Provide users enough time to read and use content.',
          ref_id: '2.2',
          references: [
            {
              title: 'Understanding Guideline 2.2',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/enough-time.html'
            }
          ],
          success_criteria: [
            {
              description:
                'For each time limit that is set by the content, at least one of the following is true:',
              level: 'A',
              notes: [
                {
                  content:
                    'This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with Success Criterion 3.2.1 (https://www.w3.org/TR/WCAG21/#on-focus), which puts limits on changes of content or context as a result of user action.'
                }
              ],
              ref_id: '2.2.1',
              references: [
                {
                  title: 'How to Meet 2.2.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#timing-adjustable'
                },
                {
                  title: 'Understanding 2.2.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'The user is allowed to turn off the time limit before encountering it; or',
                  title: 'Turn off',
                  type: 'at_least_one'
                },
                {
                  description:
                    'The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or',
                  title: 'Adjust',
                  type: 'at_least_one'
                },
                {
                  description:
                    'The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, ‘press the space bar’), and the user is allowed to extend the time limit at least ten times; or',
                  title: 'Extend',
                  type: 'at_least_one'
                },
                {
                  description:
                    'The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or',
                  title: 'Real-time Exception',
                  type: 'at_least_one'
                },
                {
                  description:
                    'The time limit is essential and extending it would invalidate the activity; or',
                  title: 'Essential Exception',
                  type: 'at_least_one'
                },
                {
                  description: 'The time limit is longer than 20 hours.',
                  title: '20 Hour Exception',
                  type: 'at_least_one'
                }
              ],
              title: 'Timing Adjustable',
              url: 'https://www.w3.org/TR/WCAG21/#timing-adjustable'
            },
            {
              description:
                'For moving, blinking, scrolling, or auto-updating information, all of the following are true:',
              level: 'A',
              notes: [
                {
                  content:
                    'For requirements related to flickering or flashing content, refer to Guideline 2.3. (https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions)'
                },
                {
                  content:
                    'Since any content that does not meet this success criterion can interfere with a user’s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference (https://www.w3.org/TR/WCAG21/#cc5)'
                },
                {
                  content:
                    'Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.'
                },
                {
                  content:
                    'An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.'
                }
              ],
              ref_id: '2.2.2',
              references: [
                {
                  title: 'How to Meet 2.2.2',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide'
                },
                {
                  title: 'Understanding 2.2.2',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and',
                  title: 'Moving, blinking, scrolling',
                  type: 'all_true'
                },
                {
                  description:
                    'For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.',
                  title: 'Auto-updating',
                  type: 'all_true'
                }
              ],
              title: 'Pause, Stop, Hide',
              url: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide'
            },
            {
              description:
                'Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.',
              level: 'AAA',
              notes: null,
              ref_id: '2.2.3',
              references: [
                {
                  title: 'How to Meet 2.2.3',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#no-timing'
                },
                {
                  title: 'Understanding 2.2.3',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html'
                }
              ],
              special_cases: null,
              title: 'No Timing',
              url: 'https://www.w3.org/TR/WCAG21/#no-timing'
            },
            {
              description:
                'Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.',
              level: 'AAA',
              notes: null,
              ref_id: '2.2.4',
              references: [
                {
                  title: 'How to Meet 2.2.4',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#interruptions'
                },
                {
                  title: 'Understanding 2.2.4',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html'
                }
              ],
              special_cases: null,
              title: 'Interruptions',
              url: 'https://www.w3.org/TR/WCAG21/#interruptions'
            },
            {
              description:
                'When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.',
              level: 'AAA',
              notes: null,
              ref_id: '2.2.5',
              references: [
                {
                  title: 'How to Meet 2.2.5',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#re-authenticating'
                },
                {
                  title: 'Understanding 2.2.5',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating.html'
                }
              ],
              special_cases: null,
              title: 'Re-authenticating',
              url: 'https://www.w3.org/TR/WCAG21/#re-authenticating'
            },
            {
              description:
                'Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.',
              level: 'AAA',
              notes: [
                {
                  content:
                    'Privacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.'
                }
              ],
              ref_id: '2.2.6',
              references: [
                {
                  title: 'How to Meet 2.2.6',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#timeouts'
                },
                {
                  title: 'Understanding 2.2.6',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html'
                }
              ],
              special_cases: null,
              title: 'Timeouts',
              url: 'https://www.w3.org/TR/WCAG21/#timeouts'
            }
          ],
          title: 'Enough Time',
          url: 'https://www.w3.org/TR/WCAG21/#enough-time'
        },
        {
          description:
            'Do not design content in a way that is known to cause seizures.',
          ref_id: '2.3',
          references: [
            {
              title: 'Understanding Guideline 2.3',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/seizures-and-physical-reactions.html'
            }
          ],
          success_criteria: [
            {
              description:
                'Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.',
              level: 'A',
              notes: [
                {
                  content:
                    'Since any content that does not meet this success criterion can interfere with a user’s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference. (https://www.w3.org/TR/WCAG21/#cc5)'
                }
              ],
              ref_id: '2.3.1',
              references: [
                {
                  title: 'How to Meet 2.3.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#three-flashes-or-below-threshold'
                },
                {
                  title: 'Understanding 2.3.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html'
                }
              ],
              special_cases: null,
              title: 'Three Flashes or Below Threshold',
              url: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold'
            },
            {
              description:
                'Web pages do not contain anything that flashes more than three times in any one second period.',
              level: 'AAA',
              notes: null,
              ref_id: '2.3.2',
              references: [
                {
                  title: 'How to Meet 2.3.2',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#three-flashes'
                },
                {
                  title: 'Understanding 2.3.2',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html'
                }
              ],
              special_cases: null,
              title: 'Three Flashes',
              url: 'https://www.w3.org/TR/WCAG21/#three-flashes'
            },
            {
              description:
                'Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.',
              level: 'AAA',
              notes: null,
              ref_id: '2.3.3',
              references: [
                {
                  title: 'How to Meet 2.3.3',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#animation-from-interactions'
                },
                {
                  title: 'Understanding 2.3.3',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html'
                }
              ],
              special_cases: null,
              title: 'Animation from Interactions',
              url: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions'
            }
          ],
          title: 'Seizures',
          url: 'https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions'
        },
        {
          description:
            'Provide ways to help users navigate, find content, and determine where they are.',
          ref_id: '2.4',
          references: [
            {
              title: 'Understanding Guideline 2.4',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/navigable.html'
            }
          ],
          success_criteria: [
            {
              description:
                'A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.',
              level: 'A',
              notes: null,
              ref_id: '2.4.1',
              references: [
                {
                  title: 'How to Meet 2.4.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks'
                },
                {
                  title: 'Understanding 2.4.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html'
                }
              ],
              special_cases: null,
              title: 'Bypass Blocks',
              url: 'https://www.w3.org/TR/WCAG21/#bypass-blocks'
            },
            {
              description:
                'Web pages have titles that describe topic or purpose.',
              level: 'A',
              notes: null,
              ref_id: '2.4.2',
              references: [
                {
                  title: 'How to Meet 2.4.2',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#page-titled'
                },
                {
                  title: 'Understanding 2.4.2',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html'
                }
              ],
              special_cases: null,
              title: 'Page Titled',
              url: 'https://www.w3.org/TR/WCAG21/#page-titled'
            },
            {
              description:
                'If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.',
              level: 'A',
              notes: null,
              ref_id: '2.4.3',
              references: [
                {
                  title: 'How to Meet 2.4.3',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#focus-order'
                },
                {
                  title: 'Understanding 2.4.3',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html'
                }
              ],
              special_cases: null,
              title: 'Focus Order',
              url: 'https://www.w3.org/TR/WCAG21/#focus-order'
            },
            {
              description:
                'The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.',
              level: 'A',
              notes: null,
              ref_id: '2.4.4',
              references: [
                {
                  title: 'How to Meet 2.4.4',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context'
                },
                {
                  title: 'Understanding 2.4.4',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html'
                }
              ],
              special_cases: null,
              title: 'Link Purpose (In Context)',
              url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context'
            },
            {
              description:
                'More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.',
              level: 'AA',
              notes: null,
              ref_id: '2.4.5',
              references: [
                {
                  title: 'How to Meet 2.4.5',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#multiple-ways'
                },
                {
                  title: 'Understanding 2.4.5',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html'
                }
              ],
              special_cases: null,
              title: 'Multiple Ways',
              url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context'
            },
            {
              description: 'Headings and labels describe topic or purpose.',
              level: 'AA',
              notes: null,
              ref_id: '2.4.6',
              references: [
                {
                  title: 'How to Meet 2.4.6',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels'
                },
                {
                  title: 'Understanding 2.4.6',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html'
                }
              ],
              special_cases: null,
              title: 'Headings and Labels',
              url: 'https://www.w3.org/TR/WCAG21/#headings-and-labels'
            },
            {
              description:
                'Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.',
              level: 'AA',
              notes: null,
              ref_id: '2.4.7',
              references: [
                {
                  title: 'How to Meet 2.4.7',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#focus-visible'
                },
                {
                  title: 'Understanding 2.4.7',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html'
                }
              ],
              special_cases: null,
              title: 'Focus Visible',
              url: 'https://www.w3.org/TR/WCAG21/#focus-visible'
            },
            {
              description:
                'Information about the user’s location within a set of Web pages is available.',
              level: 'AAA',
              notes: null,
              ref_id: '2.4.8',
              references: [
                {
                  title: 'How to Meet 2.4.8',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#location'
                },
                {
                  title: 'Understanding 2.4.8',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/location.html'
                }
              ],
              special_cases: null,
              title: 'Location',
              url: 'https://www.w3.org/TR/WCAG21/#location'
            },
            {
              description:
                'A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.',
              level: 'AAA',
              notes: null,
              ref_id: '2.4.9',
              references: [
                {
                  title: 'How to Meet 2.4.9',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-link-only'
                },
                {
                  title: 'Understanding 2.4.9',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html'
                }
              ],
              special_cases: null,
              title: 'Link Purpose (Link Only)',
              url: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only'
            },
            {
              description: 'Section headings are used to organize the content.',
              level: 'AAA',
              notes: [
                {
                  content:
                    '‘Heading’ is used in its general sense and includes titles and other ways to add a heading to different types of content.'
                },
                {
                  content:
                    'This success criterion covers sections within writing, not user interface components. User Interface components are covered under Success Criterion 4.1.2. (https://www.w3.org/TR/WCAG21/#name-role-value)'
                }
              ],
              ref_id: '2.4.10',
              references: [
                {
                  title: 'How to Meet 2.4.10',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#section-headings'
                },
                {
                  title: 'Understanding 2.4.10',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html'
                }
              ],
              special_cases: null,
              title: 'Section Headings',
              url: 'https://www.w3.org/TR/WCAG21/#section-headings'
            }
          ],
          title: 'Navigable',
          url: 'https://www.w3.org/TR/WCAG21/#navigable'
        },
        {
          description:
            'Make it easier for users to operate functionality through various inputs beyond keyboard.',
          ref_id: '2.5',
          references: [
            {
              title: 'Understanding Guideline 2.5',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/input-modalities.html'
            }
          ],
          success_criteria: [
            {
              description:
                'All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.',
              level: 'A',
              notes: [
                {
                  content:
                    'This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).'
                }
              ],
              ref_id: '2.5.1',
              references: [
                {
                  title: 'How to Meet 2.5.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#pointer-gestures'
                },
                {
                  title: 'Understanding 2.5.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html'
                }
              ],
              special_cases: null,
              title: 'Pointer Gestures',
              url: 'https://www.w3.org/TR/WCAG21/#pointer-gestures'
            },
            {
              description:
                'For functionality that can be operated using a single pointer, at least one of the following is true:',
              level: 'A',
              notes: [
                {
                  content:
                    'Functions that emulate a keyboard or numeric keypad key press are considered essential.'
                },
                {
                  content:
                    'This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).'
                }
              ],
              ref_id: '2.5.2',
              references: [
                {
                  title: 'How to Meet 2.5.2',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#pointer-cancellation'
                },
                {
                  title: 'Understanding 2.5.2',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'The down-event of the pointer is not used to execute any part of the function;',
                  title: 'No Down-Event',
                  type: 'at_least_one'
                },
                {
                  description:
                    'Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;',
                  title: 'Abort or Undo',
                  type: 'at_least_one'
                },
                {
                  description:
                    'The up-event reverses any outcome of the preceding down-event;',
                  title: 'Up Reversal',
                  type: 'at_least_one'
                },
                {
                  description:
                    'Completing the function on the down-event is essential.',
                  title: 'Essential',
                  type: 'at_least_one'
                }
              ],
              title: 'Pointer Cancellation',
              url: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation'
            },
            {
              description:
                'For user interface components with labels that include text or images of text, the name contains the text that is presented visually.',
              level: 'A',
              notes: [
                {
                  content:
                    'A best practice is to have the text of the label at the start of the name.'
                }
              ],
              ref_id: '2.5.3',
              references: [
                {
                  title: 'How to Meet 2.5.3',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#label-in-name'
                },
                {
                  title: 'Understanding 2.5.3',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html'
                }
              ],
              special_cases: null,
              title: 'Label in Name',
              url: 'https://www.w3.org/TR/WCAG21/#label-in-name'
            },
            {
              description:
                'Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:',
              level: 'A',
              notes: null,
              ref_id: '2.5.4',
              references: [
                {
                  title: 'How to Meet 2.5.4',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#motion-actuation'
                },
                {
                  title: 'Understanding 2.5.4',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'The motion is used to operate functionality through an accessibility supported interface;',
                  title: 'Supported Interface',
                  type: 'exception'
                },
                {
                  description:
                    'The motion is essential for the function and doing so would invalidate the activity.',
                  title: 'Essential',
                  type: 'exception'
                }
              ],
              title: 'Motion Actuation',
              url: 'https://www.w3.org/TR/WCAG21/#motion-actuation'
            },
            {
              description:
                'The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:',
              level: 'AAA',
              notes: null,
              ref_id: '2.5.5',
              references: [
                {
                  title: 'How to Meet 2.5.5',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#target-size'
                },
                {
                  title: 'Understanding 2.5.5',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size.html'
                }
              ],
              special_cases: [
                {
                  description:
                    'The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;',
                  title: 'Equivalent',
                  type: 'exception'
                },
                {
                  description: 'The target is in a sentence or block of text;',
                  title: 'Inline',
                  type: 'exception'
                },
                {
                  description:
                    'The size of the target is determined by the user agent and is not modified by the author;',
                  title: 'User Agent Control',
                  type: 'exception'
                },
                {
                  description:
                    'A particular presentation of the target is essential to the information being conveyed.',
                  title: 'Essential',
                  type: 'exception'
                }
              ],
              title: 'Target Size',
              url: 'https://www.w3.org/TR/WCAG21/#target-size'
            },
            {
              description:
                'Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.',
              level: 'AAA',
              notes: null,
              ref_id: '2.5.6',
              references: [
                {
                  title: 'How to Meet 2.5.6',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#concurrent-input-mechanisms'
                },
                {
                  title: 'Understanding 2.5.6',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html'
                }
              ],
              special_cases: null,
              title: 'Concurrent Input Mechanisms',
              url: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms'
            }
          ],
          title: 'Input Modalities',
          url: 'https://www.w3.org/TR/WCAG21/#input-modalities'
        }
      ],
      ref_id: '2',
      title: 'Operable',
      url: 'https://www.w3.org/TR/WCAG21/#operable'
    },
    {
      description:
        'Information and the operation of user interface must be understandable.',
      guidelines: [
        {
          description: 'Make text content readable and understandable.',
          ref_id: '3.1',
          references: [
            {
              title: 'Understanding Guideline 3.1',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/readable.html'
            }
          ],
          success_criteria: [
            {
              description:
                'The default human language of each Web page can be programmatically determined.',
              level: 'A',
              notes: null,
              ref_id: '3.1.1',
              references: [
                {
                  title: 'How to Meet 3.1.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#language-of-page'
                },
                {
                  title: 'Understanding 3.1.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html'
                }
              ],
              special_cases: null,
              title: 'Language of Page',
              url: 'https://www.w3.org/TR/WCAG21/#language-of-page'
            },
            {
              description:
                'The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.',
              level: 'AA',
              notes: null,
              ref_id: '3.1.2',
              references: [
                {
                  title: 'How to Meet 3.1.2',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts'
                },
                {
                  title: 'Understanding 3.1.2',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html'
                }
              ],
              special_cases: null,
              title: 'Language of Parts',
              url: 'https://www.w3.org/TR/WCAG21/#language-of-parts'
            },
            {
              description:
                'A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.',
              level: 'AAA',
              notes: null,
              ref_id: '3.1.3',
              references: [
                {
                  title: 'How to Meet 3.1.3',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#unusual-words'
                },
                {
                  title: 'Understanding 3.1.3',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/unusual-words.html'
                }
              ],
              special_cases: null,
              title: 'Unusual Words',
              url: 'https://www.w3.org/TR/WCAG21/#unusual-words'
            },
            {
              description:
                'A mechanism for identifying the expanded form or meaning of abbreviations is available.',
              level: 'AAA',
              notes: null,
              ref_id: '3.1.4',
              references: [
                {
                  title: 'How to Meet 3.1.4',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#abbreviations'
                },
                {
                  title: 'Understanding 3.1.4',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html'
                }
              ],
              special_cases: null,
              title: 'Abbreviations',
              url: 'https://www.w3.org/TR/WCAG21/#abbreviations'
            },
            {
              description:
                'When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.',
              level: 'AAA',
              notes: null,
              ref_id: '3.1.5',
              references: [
                {
                  title: 'How to Meet 3.1.5',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#reading-level'
                },
                {
                  title: 'Understanding 3.1.5',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html'
                }
              ],
              special_cases: null,
              title: 'Reading Level',
              url: 'https://www.w3.org/TR/WCAG21/#reading-level'
            },
            {
              description:
                'A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.',
              level: 'AAA',
              notes: null,
              ref_id: '3.1.6',
              references: [
                {
                  title: 'How to Meet 3.1.6',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#pronunciation'
                },
                {
                  title: 'Understanding 3.1.6',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/pronunciation.html'
                }
              ],
              special_cases: null,
              title: 'Pronunciation',
              url: 'https://www.w3.org/TR/WCAG21/#pronunciation'
            }
          ],
          title: 'Readable',
          url: 'https://www.w3.org/TR/WCAG21/#readable'
        },
        {
          description: 'Make Web pages appear and operate in predictable ways.',
          ref_id: '3.2',
          references: [
            {
              title: 'Understanding Guideline 3.2',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/predictable.html'
            }
          ],
          success_criteria: [
            {
              description:
                'When any component receives focus, it does not initiate a change of context.',
              level: 'A',
              notes: null,
              ref_id: '3.2.1',
              references: [
                {
                  title: 'How to Meet 3.2.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#on-focus'
                },
                {
                  title: 'Understanding 3.2.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html'
                }
              ],
              special_cases: null,
              title: 'On Focus',
              url: 'https://www.w3.org/TR/WCAG21/#on-focus'
            },
            {
              description:
                'Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.',
              level: 'A',
              notes: null,
              ref_id: '3.2.2',
              references: [
                {
                  title: 'How to Meet 3.2.2',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#on-input'
                },
                {
                  title: 'Understanding 3.2.2',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-input.html'
                }
              ],
              special_cases: null,
              title: 'On Input',
              url: 'https://www.w3.org/TR/WCAG21/#on-input'
            },
            {
              description:
                'Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.',
              level: 'AA',
              notes: null,
              ref_id: '3.2.3',
              references: [
                {
                  title: 'How to Meet 3.2.3',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#consistent-navigation'
                },
                {
                  title: 'Understanding 3.2.3',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html'
                }
              ],
              special_cases: null,
              title: 'Consistent Navigation',
              url: 'https://www.w3.org/TR/WCAG21/#consistent-navigation'
            },
            {
              description:
                'Components that have the same functionality within a set of Web pages are identified consistently.',
              level: 'AA',
              notes: null,
              ref_id: '3.2.4',
              references: [
                {
                  title: 'How to Meet 3.2.4',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#consistent-identification'
                },
                {
                  title: 'Understanding 3.2.4',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html'
                }
              ],
              special_cases: null,
              title: 'Consistent Identification',
              url: 'https://www.w3.org/TR/WCAG21/#consistent-identification'
            },
            {
              description:
                'Changes of context are initiated only by user request or a mechanism is available to turn off such changes.',
              level: 'AAA',
              notes: null,
              ref_id: '3.2.5',
              references: [
                {
                  title: 'How to Meet 3.2.5',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#change-on-request'
                },
                {
                  title: 'Understanding 3.2.5',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html'
                }
              ],
              special_cases: null,
              title: 'Change on Request',
              url: 'https://www.w3.org/TR/WCAG21/#change-on-request'
            }
          ],
          title: 'Predictable',
          url: 'https://www.w3.org/TR/WCAG21/#predictable'
        },
        {
          description: 'Help users avoid and correct mistakes.',
          ref_id: '3.3',
          references: [
            {
              title: 'Understanding Guideline 3.3',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/input-assistance.html'
            }
          ],
          success_criteria: [
            {
              description:
                'If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.',
              level: 'A',
              notes: null,
              ref_id: '3.3.1',
              references: [
                {
                  title: 'How to Meet 3.3.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#error-identification'
                },
                {
                  title: 'Understanding 3.3.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html'
                }
              ],
              special_cases: null,
              title: 'Error Identification',
              url: 'https://www.w3.org/TR/WCAG21/#error-identification'
            },
            {
              description:
                'Labels or instructions are provided when content requires user input.',
              level: 'A',
              notes: null,
              ref_id: '3.3.2',
              references: [
                {
                  title: 'How to Meet 3.3.2',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions'
                },
                {
                  title: 'Understanding 3.3.2',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html'
                }
              ],
              special_cases: null,
              title: 'Labels or Instructions',
              url: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions'
            },
            {
              description:
                'If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.',
              level: 'AA',
              notes: null,
              ref_id: '3.3.3',
              references: [
                {
                  title: 'How to Meet 3.3.3',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#error-suggestion'
                },
                {
                  title: 'Understanding 3.3.3',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html'
                }
              ],
              special_cases: null,
              title: 'Error Suggestion',
              url: 'https://www.w3.org/TR/WCAG21/#error-suggestion'
            },
            {
              description:
                ' For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:',
              level: 'AA',
              notes: null,
              ref_id: '3.3.4',
              references: [
                {
                  title: 'How to Meet 3.3.4',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#error-prevention-legal-financial-data'
                },
                {
                  title: 'Understanding 3.3.4',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html'
                }
              ],
              special_cases: [
                {
                  description: 'Submissions are reversible.',
                  title: 'Reversible',
                  type: 'at_least_one'
                },
                {
                  description:
                    'Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.',
                  title: 'Checked',
                  type: 'at_least_one'
                },
                {
                  description:
                    'A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
                  title: 'Confirmed',
                  type: 'at_least_one'
                }
              ],
              title: 'Error Prevention (Legal, Financial, Data)',
              url: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data'
            },
            {
              description: 'Context-sensitive help is available.',
              level: 'AAA',
              notes: null,
              ref_id: '3.3.5',
              references: [
                {
                  title: 'How to Meet 3.3.5',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#help'
                },
                {
                  title: 'Understanding 3.3.5',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/help.html'
                }
              ],
              special_cases: null,
              title: 'Help',
              url: 'https://www.w3.org/TR/WCAG21/#help'
            },
            {
              description:
                'For Web pages that require the user to submit information, at least one of the following is true:',
              level: 'AAA',
              notes: null,
              ref_id: '3.3.6',
              references: [
                {
                  title: 'How to Meet 3.3.6',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#error-prevention-all'
                },
                {
                  title: 'Understanding 3.3.6',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all.html'
                }
              ],
              special_cases: [
                {
                  description: 'Submissions are reversible.',
                  title: 'Reversible',
                  type: 'at_least_one'
                },
                {
                  description:
                    'Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.',
                  title: 'Checked',
                  type: 'at_least_one'
                },
                {
                  description:
                    'A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
                  title: 'Confirmed',
                  type: 'at_least_one'
                }
              ],
              title: 'Error Prevention (All)',
              url: 'https://www.w3.org/TR/WCAG21/#error-prevention-all'
            }
          ],
          title: 'Input Assistance',
          url: 'https://www.w3.org/TR/WCAG21/#input-assistance'
        }
      ],
      ref_id: '3',
      title: 'Understandable',
      url: 'https://www.w3.org/TR/WCAG21/#understandable'
    },
    {
      description:
        'Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.',
      guidelines: [
        {
          description:
            'Maximize compatibility with current and future user agents, including assistive technologies.',
          ref_id: '4.1',
          references: [
            {
              title: 'Understanding Guideline 4.1',
              url: 'https://www.w3.org/WAI/WCAG21/Understanding/compatible.html'
            }
          ],
          success_criteria: [
            {
              description:
                'In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.',
              level: 'A',
              notes: [
                {
                  content:
                    'Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.'
                }
              ],
              ref_id: '4.1.1',
              references: [
                {
                  title: 'How to Meet 4.1.1',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#parsing'
                },
                {
                  title: 'Understanding 4.1.1',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing.html'
                }
              ],
              special_cases: null,
              title: 'Parsing',
              url: 'https://www.w3.org/TR/WCAG21/#parsing'
            },
            {
              description:
                'For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.',
              level: 'A',
              notes: [
                {
                  content:
                    'This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.'
                }
              ],
              ref_id: '4.1.2',
              references: [
                {
                  title: 'How to Meet 4.1.2',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#name-role-value'
                },
                {
                  title: 'Understanding 4.1.2',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html'
                }
              ],
              special_cases: null,
              title: 'Name, Role, Value',
              url: 'https://www.w3.org/TR/WCAG21/#name-role-value'
            },
            {
              description:
                'In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.',
              level: 'AA',
              notes: null,
              ref_id: '4.1.3',
              references: [
                {
                  title: 'How to Meet 4.1.3',
                  url: 'https://www.w3.org/WAI/WCAG21/quickref/#status-messages'
                },
                {
                  title: 'Understanding 4.1.3',
                  url: 'https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html'
                }
              ],
              special_cases: null,
              title: 'Status Messages',
              url: 'https://www.w3.org/TR/WCAG21/#status-messages'
            }
          ],
          title: 'Compatible',
          url: 'https://www.w3.org/TR/WCAG21/#compatible'
        }
      ],
      ref_id: '4',
      title: 'Robust',
      url: 'https://www.w3.org/TR/WCAG21/#robust'
    }
  ]
}
