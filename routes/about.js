var express = require('express');
var router = express.Router();

//get function want a new template!//
router.get('/', function (req, res) {
  res.render('templates/about');
});


////Get an error one here////
router.get('/thisshoulderror', function (req, res) {
  res.send(badVariable);
});

module.exports = router;
