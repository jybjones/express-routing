var express = require('express');
var router = express.Router();

//get function want a new template!//
router.get('/', function (req, res) {
  res.render('templates/about');
});

router.get('/about', function (req, res) {

  // setTimeout(function (){
  //   var aboutMe = [
  //   'Pizza',
  //   'Bacon',
  //   '2nd Amendment',
  //   'Pluto',
  //   'Space Jam'
  // ];

  res.render('templates/about')
  //   {  welcome: 'Thanks for coming by!',
  //      aboutMe: aboutMe
  //    }
  //   );
  // }, 5000);
});

////Get an error one here////
router.get('/thisshoulderror', function (req, res) {
  res.send(badVariable);
});

module.exports = router;
