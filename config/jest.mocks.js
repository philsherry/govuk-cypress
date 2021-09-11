// // https://jestjs.io/docs/en/api.html
// import '@testing-library/jest-dom/extend-expect'
// import 'jest-extended'

// https://stackoverflow.com/a/41434763/6246995
class LocalStorageMock {
  constructor () {
    this.store = {}
  }

  clear () {
    this.store = {}
  }

  getItem (key) {
    return this.store[key] || null
  }

  setItem (key, value) {
    this.store[key] = value.toString()
  }

  removeItem (key) {
    delete this.store[key]
  }
}

global.localStorage = new LocalStorageMock()

// https://jestjs.io/docs/en/manual-mocks#mocking
window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn()
  }
})

window.getComputedStyle =
  window.getComputedStyle ||
  function () {
    return { getPropertyValue: () => {} }
  }
