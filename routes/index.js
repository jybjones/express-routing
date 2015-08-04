var express = require('express');
var router = express.Router();

// router.get('/', function(req, res) {
//   res.send("hello visitor, this is the ROOT!");
// });

router.get('/', function (req, res) {
  res.render('templates/index');
});

////Get an error one here////
router.get('/thisshoulderror', function (req, res) {
  res.send(badVariable);
});

module.exports = router;
