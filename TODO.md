# To do

## Components

- [ ] Component page template.
- [ ] HMRC Account header needs its own layout to work properly.
- [ ] Service timeout examples need their own pages in iframes.
- [ ] Error summary final example needs an iframe.
- [ ] Needs a form handler to return error states.
- [ ] Run all tests again once finished, for newer screenshots.
- [x] Split `components.js` up so that each component has its own `component.js` instead.
- [x] Add a `:target` class for the in-page navigation.
- [x] Move each component `id` from heading to `.component-section`

## Macros

Most of this has been my ADHD brain making things up as I go, so there are lots of areas which could be improved with macros.

- [ ] Page title
- [ ] Page header
- [ ] In-page navigation
- [ ] `figure`/`figcaption`
- [ ] “What we are testing in this component” (driven by data from `components.js`)

## Cypress tests

- [ ] Error summary: all links should have a valid target.
- [ ] Error state: “Error:” prefix should exist.
- [ ] Page title: First section should match the page heading.
- [ ] UTR: Does Cypress trigger the telephone helper?

## Project

- [ ] Split tests off into a plugin for service teams.
