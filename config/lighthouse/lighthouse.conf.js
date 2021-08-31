module.exports = {
  chromeFlags: [
    '--disable-extensions',
    '--disable-gpu',
    '--headless',
    '--incognito',
    '--show-paint-rects',
    '--window-size=1440,900',
  ],
  extends: 'lighthouse:default',
  output: ['html', 'json'],
  settings: {
    logLevel: 'info',
    onlyCategories: ['accessibility', 'best-practices', 'performance'],
    outputPath: './reports/lighthouse',
    saveAssets: true,
  },
};
