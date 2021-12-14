/**
 * FROM: https://douglascayers.com/2019/08/01/how-to-export-and-import-github-issue-labels-between-projects/
 *
 * Inspired by @MoOx original script: https://gist.github.com/MoOx/93c2853fee760f42d97f
 * Adds file download per @micalevisk https://gist.github.com/MoOx/93c2853fee760f42d97f#gistcomment-2660220
 *
 * Changes include:
 *  - Get the description from the `title` attribute instead of `aria-label`
 *    (doesn't exist any more)
 *  - Use style.backgroundColor and parse the rgb(...) to hex (rather than
 *    regex parsing of 'style' string)
 *  - Downloads labels to a JSON file named after the webpage to know which
 *    GitHub repo they came from.
 *
 * Last tested 2019-July-27:
 *  - Chrome 75.0.3770.142
 *  - Safari 12.1.2
 *  - macOS 10.14.6
 *
 * Change made on @philsherry on Friday 28 May 2021
 *  - Adds `backgroundColour()` to handle GitHub changes
 *    - CSS selectors use `js` prefix: `s/.label-link/.js-label-link`
 *    - CSS variables now in use; first RGB, followed by HSL:
 *      - RGB: `--label-r:112;--label-g:87;--label-b:255;`
 *      - HSL: `--label-h:248;--label-s:100;--label-l:67;`
 *
 *  …or, if possible, just: `gh api /repos/elastic/$repo/labels`
 *
 * Run this in the console on the relevant `$repo/labels` page in your browser.
 * */

function backgroundColour(backgroundVariables) {
  // convert semi-colon-delimited string into array
  let cssVars = backgroundVariables.split(';');

  // get rid of `--label-X:`
  cssVars.forEach(function (colour, index) {
    this[index] = colour.substring(10);
  }, cssVars);

  // get rid of h, s, l values
  let rgb = cssVars.slice(0, 3);
  let hexValue;

  // reduce array of three numbers into single hex color
  let hex = rgb
    .map(
      (hexValue = (rgbValue) =>
        (+rgbValue < 16 ? '0' : '') + (+rgbValue).toString(16))
    )
    .join('');

  return hex;
}

function exportGitHubLabels() {
  let labels = [];

  [].slice
    .call(document.querySelectorAll('.js-label-link'))
    .forEach((element) => {
      labels.push({
        name: element.textContent.trim(),
        description: element.getAttribute('title'),
        color: backgroundColour(element.getAttribute('style')),
      });
    });
  return labels;
}

function saveDataAsJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'text/json',
  });
  const a = document.createElement('a');

  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
  a.click();
}

saveDataAsJSON(exportGitHubLabels(), document.title + '.json');
