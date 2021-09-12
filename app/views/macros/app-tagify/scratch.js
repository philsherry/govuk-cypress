/* eslint-disable no-unused-vars */
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
const tags = require('../../../tags');
const regex = /^([1-4]{1})\.([1-5]{1})\.([0-9]{1,2})$/g;

/** ^ That regex is there just for tagify() at the bottom, otherwise I’ll
 * forget to include it when I copy things over into the main file 🥴
 **/

const wcagTag = (str) => {
  const regex = /^([1-4]{1})\.([1-5]{1})\.([0-9]{1,2})$/g;
  // {1-4}.{1-5}.{1-13} (these are the WCAG 2.1 levels)
  if (!str.match(regex)) {
    throw new Error(`${str} is jarg.`);
  }

  let currentLevel;
  const matches = str.match(regex);

  // WCAG structure:
  // 'principles'.'guidelines'.'success_criteria'
  const wcagInput = str.split('.');
  const principles = wcagInput[0];
  const guidelines = wcagInput[1];
  const success = wcagInput[2];

  // PRINCIPLES.
  // Find a match for `principles` with the `ref_id` at the primary level
  const primary = tags.wcag.find((p) => p.ref_id === principles);
  currentLevel = primary.ref_id;

  // GUIDELINES.
  // Find a match for `guidelines` with the `ref_id` at the secondary level
  const secondary = primary.guidelines;
  const guideline = secondary.find(
    (s) => s.ref_id === `${principles}.${guidelines}`
  );
  currentLevel = guideline.ref_id;

  // SUCCESS CRITERIA.
  // Find a match for `success_criteria` with the `ref_id` at the tertiary level
  const tagWcag = {};
  secondary.forEach((criterion) => {
    if (criterion.ref_id === currentLevel) {
      const tertiary = criterion.success_criteria;
      const sc = tertiary.find(
        (f) => f.ref_id === `${principles}.${guidelines}.${success}`
      );
      currentLevel = sc.ref_id;
      tagWcag.level = sc.level;
      tagWcag.ref_id = sc.ref_id;
      tagWcag.url = sc.url;
      tagWcag.references = sc.references;

      return tagWcag;
    }
  });

  // SC structure:
  const level = tagWcag.level;
  const ref_id = tagWcag.ref_id;
  const references = tagWcag.references;
  const url = tagWcag.url;

  console.log({ matches });
  console.log({ tagWcag });

  return {
    level,
    ref_id,
    references,
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
  const regex = /^([\w-]+)$/g;
  if (!str.match(regex)) {
    throw new Error(`${str} is jarg.`);
  }

  const tagBest = tags.best.find((b) => b.ref_id === str);

  const level = tagBest.level;
  const ref_id = tagBest.ref_id;
  const title = tagBest.title;
  const url = tagBest.url;

  console.log({ tagBest });

  return {
    level,
    ref_id,
    title,
    url,
  };
};

/**
 * @function tagify
 * @description Creates the WCAG 2.1 tags from the `wcag` object if the string matches the regex, otherwise creates the Best Practices tags.
 * @param {*} string
 * @returns {Object}
 * @example tagify("1.4.11");
 */
const tagify = (str) => {
  if (str.match(regex)) {
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

bestPractice('labels-legends-headings');
// tagify("2.4.7");
// tagify("4.1.2");
// tagify("2.4.7");
// tagify("focus-states");
// tagify("labels-legends-headings");
// wcagTag("1.1.1");
// wcagTag("3.3.3");

// tagify('1.4.3')
// tagify('1.4.11')
// tagify('2.4.7')

wcagTag('9.9.99');
