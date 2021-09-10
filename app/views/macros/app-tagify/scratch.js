/**
 * @function wcagTag
 * @description Creates a WCAG 2.1 tag from the given parameters.
 * @param {Array} best - Best practices.
 * @param {Array} wcag - WCAG Principles.
 * @param {Array} guidelines - WCAG Guidelines.
 * @param {Array} success_criteria - Success Criteria.
 * @param {String} ref_id - Level (A, AA, AAA).
 * @returns {Object}
 */

/**
 * In here purely for development purposes so Quokka can crawl it as I work on it.
 */
const tags = require("../../../tags")

const wcagTag = (str) => {
  const regex = /^([1-4]{1})\.([1-5]{1})\.([0-9]{1,2})$/g;
  // {1-4}.{1-5}.{1-13}
  if (!str.match(regex)) {
    return null;
  }

  const matches = str.match(regex);
  // console.log(matches);

  // WCAG structure:
  // 'principles'.'guidelines'.'success_criteria'
  const wcagInput = str.split(".");
  const principles = wcagInput[0];
  const guidelines = wcagInput[1];
  const success = wcagInput[2];
  let sc = "";

  // PRINCIPLES.
  // Find a match for `principles` with the `ref_id` at the primary level
  const primary = tags.wcag.find((p) => p.ref_id === principles);

  // GUIDELINES.
  // Find a match for `guidelines` with the `ref_id` at the secondary level
  const secondary = primary.guidelines;
  const guideline = secondary.find(
    (s) => s.ref_id === `${principles}.${guidelines}`
  );

  // SUCCESS CRITERIA.
  // Find a match for `success_criteria` with the `ref_id` at the tertiary level
  secondary.forEach((criterion) => {
    if (
      criterion.ref_id === `${principles}.${guidelines}`
    ) {
      sc = criterion;
      return sc;
    }
  });

  // SC structure:
  const level = sc.level;
  const ref_id = sc.ref_id;
  const url = sc.url;
  const references = sc.references;

  return {
    sc,
    ref_id,
    level,
    url,
  };
};

/**
 * @function bestPractice
 * @description Creates the Best Practices tags from the `best` object.
 * @param {*} string
 * @returns {Object}
 * @example bestPractice("labels-legends-headings")
 */

const bestPractice = (str) => {
  const best = tags.best.find((b) => b.ref_id === str);

  const description = best.description;
  const level = best.level;
  const ref_id = best.ref_id;
  const title = best.title;
  const url = best.url;

  return {
    description,
    level,
    ref_id,
    title,
    url,
  };
};

/**
 * @function tagify
 * @description Creates the WCAG 2.1 tags from the `wcag` object if the string starts with digits, otherwise creates the Best Practices tags.
 * @param {*} string
 * @returns {Object}
 * @example tagify("1.4.11");
 */
const tagify = (str) => {
  if (str.match(/^\d+/)) {
    return wcagTag(str);
  } else {
    return bestPractice(str);
  }
};

/**
 * @example tagify("2.4.7") // Returns the correct items
 * @example tagify("9.1.1") // Returns null because it's not a valid WCAG 2.1 tag
 * @example tagify("focus-states") // Returns the correct items
 * @example tagify("2-live-crew") // Returns null because it's not a valid WCAG 2.1 tag
 */

bestPractice("labels-legends-headings");
tagify("2.4.7");
tagify("4.1.2");
tagify("9.1.1");
tagify("focus-states");
tagify("labels-legends-headings");
wcagTag("1.1.1");
wcagTag("3.3.3");
wcagTag("9.9.99");
