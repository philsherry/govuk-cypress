const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get("/current/*", function (req, res, next) {
  var r = req.url.replace("/current/", "/" + config.currentSprint + "/");
  res.redirect(r);
});

// GENERIC NEXT PAGE ELEMENT
router.post("*", function (req, res, next) {
  // console.log('main routes')
  if (req.body["next-page"]) {
    res.redirect(req.body["next-page"]);
  } else if (req.body) {
    for (var propName in req.body) {
      if (req.body.hasOwnProperty(propName)) {
        eval("req.session." + propName + " = req.body." + propName);
      }
    }
    next();
  } else {
    next();
  }
});

module.exports = router;
