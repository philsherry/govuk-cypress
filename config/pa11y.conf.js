const pa11yConfig = {
  options: {
    chromeLaunchConfig: {
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    },
    concurrency: 4,
    hideElements: 'body > div.app-cookie-banner, body > div.app-cookie-banner__message',
    includeNotices: true,
    includeWarnings: true,
    log: {
      debug: console.log,
      error: console.error,
      info: console.info
    },
    rootElement: '#main-content',
    runners: ['axe', 'htmlcs'],
    standard: 'WCAG2AA',
    threshold: 9,
    timeout: 2147483647,
    useIncognitoBrowserContext: true,
    userAgent: 'A11Y TESTS',
    viewport: {
      deviceScaleFactor: 2,
      height: 480,
      isMobile: true,
      width: 320
    }
  }
}

module.exports = pa11yConfig
