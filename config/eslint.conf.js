// https://robots.thoughtbot.com/testing-your-style-with-eslint-and-mocha
// "pretest": "eslint --fix './app/assets/javascripts/**/*.js'"

const glob = require('glob')
const ESLint = require('eslint').ESLint
const chai = require('chai')
const assert = chai.assert
const paths = glob.sync('./app/assets/javascripts/**/*.js')
const engine = new ESLint({
  envs: [
    'node',
    'mocha'
  ],
  useEslintrc: true
})

const results = engine.executeOnFiles(paths).results

function formatMessages (messages) {
  const errors = messages.map(message => {
    return `${message.line}:${message.column} ${message.message.slice(0, -1)} - ${message.ruleId}\n`
  })

  return `\n${errors.join('')}`
}

function generateTest (result) {
  const {
    filePath,
    messages
  } = result

  it(`validates ${filePath}`, function () {
    if (messages.length > 0) {
      assert.fail(
        false, true, formatMessages(messages)
      )
    }
  })
}

describe('ESLint', function () {
  results.forEach(result => generateTest(result))
})
