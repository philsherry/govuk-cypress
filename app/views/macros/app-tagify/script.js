/**
 * @function wcagTag
 * @description Creates a WCAG 2.1 tag from the given parameters.
 * @param {Array} wcag - WCAG Principles: Perceivable, Operable, Understandable, Robust.
 * @param {Array} guidelines - WCAG Guidelines, such as Text Alternatives.
 * @param {Array} success_criteria - Success Criteria, such as 1.1.1 Non-text Content (Level A).
 * @param {String} ref_id - Level (A, AA, AAA).
 * @returns {Object}
 * @example wcagTag("1.1.1");
 */

const tags = require("../../../../app/tags.js");

exports.wcagTag = (str) => {
  const regex = /^([1-4]{1})\.([1-5]{1})\.([0-9]{1,2})$/g;
  // {1-4}.{1-5}.{1-13} (these are the WCAG 2.1 levels)
  if (!str.match(regex)) {
    throw new Error(`${str} is jarg.`);
  }

  const matches = str.match(regex);
  /**
   * ☝️ Gotta be honest, I don't remember how I was going to use this,
   * but it’s still here because it came in handy debugging things.
   * 🤷‍♂️ I wrote a lot of this while I was migraining very heavily.
   */

  // WCAG structure:
  // 'principles'.'guidelines'.'success_criteria'
  const wcagInput = str.split(".");
  const principles = wcagInput[0];
  const guidelines = wcagInput[1];
  const success = wcagInput[2];
  let currentLevel;

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
  let tagWcag = {};
  secondary.forEach((criterion, index) => {

    if (criterion.ref_id === currentLevel) {

      const sc = criterion.success_criteria[index];

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

exports.wcagTagFunction = function (env) {
  env.addGlobal("wcagTag", wcagTag);
};

/**
 * @function bestPractice
 * @description Creates Best Practice tags from the `best` object.
 * @param {Array} best - Best Practices; things that are not in WCAG but are solid usability guidelines.
 * @param {String} ref_id - Best Practices ID.
 * @param {String} url - Link to a resource, preferably a Design System or Pattern Library.
 * @returns {Object}
 * @example bestPractice("labels-legends-headings")
 */

exports.bestPractice = (str) => {
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

exports.bestPracticeFunction = function (env) {
  env.addGlobal("bestPractice", bestPractice);
};
