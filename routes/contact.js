var express = require('express');
var router = express.Router();

//get function want a new template!//
router.get('/', function (req, res) {
  res.render('templates/contact');
});

exports.contact = function(req, res){
    res.render('contact', { title: 'Raging Flame Laboratory - Contact',
      page: 'contact' })
};

router.post('/submit', function (req, res) {
  console.log(req.body);
  res.send('Thanks for sending an email!');
  // res.redirect('/'); ////redirected to Hello World after placing order
});


module.exports = router;
