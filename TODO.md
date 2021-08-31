# To do

Not an exhaustive list, by any means; this is just as I remember to add things.

## Components

- [x] Component page template.
- [ ] HMRC Account header needs its own layout to work properly.
- [ ] Service timeout examples need their own pages in iframes.
- [ ] Error summary final example needs an iframe.
- [ ] Needs a form handler to return error states?
- [ ] Run all tests again once finished, for newer screenshots.
- [x] ~~Split `components.js` up so that each component has its own `component.js` instead.~~
  (*abandoned the idea for now, but a PR is welcome if you’re up for it*)
- [x] Add a `:target` class for the in-page navigation.
- [x] Move each component `id` from heading to `.component-section`

## Macros

Most of this has been my ADHD brain making things up as I go, so there are lots of areas which could be improved with macros.

- [x] Page title
- [x] Page header
- [x] In-page navigation
- [x] `figure`/`figcaption`
- [x] “What we are testing in this component” (driven by data from `components.js`)

## Cypress tests

- [x] Error summary: all links should have a valid target.
- [ ] Error message: “Error:” prefix should exist.
- [x] Page title: First section should match the page heading.
- [ ] UTR: Does Cypress trigger the telephone helper?

## Project

- [ ] Split tests off into a plugin repo for service teams.