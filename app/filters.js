module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  const filters = {}
  const regex = /^([1-4]{1})\.([1-5]{1})\.([0-9]{1,2})$/g
  const tags = require('../app/tags.js')
  const {
    bestPractice,
    wcagTag
  } = require('../app/views/macros/app-tagify/script.js')

  /**
   * @description Takes a success criteria number (like 2.4.7) and returns a dashed tag for use in CSS.
   * @param {*} tag
   * @param {*} sc
   * @returns {String}
   */
  filters.wcagDashes = function (str) {
    return str.replace(/\./g, '-')
  }

  /**
   * @function tagify
   * @description Creates the WCAG 2.1 tags from the `wcag` object if the string matches the regex, otherwise creates the Best Practices tags.
   * @param {*} string
   * @returns {Object}
   * @example tagify("1.4.11");
   * @example tagify("labels-legends-headings");
   */
  filters.tagify = (str) => {
    if (str.match(regex)) {
      return wcagTag(str)
    } else {
      return bestPractice(str)
    }
  }

  return filters
}
