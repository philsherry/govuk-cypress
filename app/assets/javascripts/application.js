/* global $ */

$(document).ready(function () {
  window.GOVUKFrontend.initAll();

  $(function () {
    const current = location.pathname;
    $('#section-navigation .govuk-link').each(function () {
      var $this = $(this);
      // if the current path is like this link, make it active
      if ($this.attr('href').indexOf(current) !== -1) {
        $this.addClass('is-active');
      }
    });
  });
});
