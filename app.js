//npm requires//
var fs = require('fs');
var express = require('express');
var lessCSS = require('less-middleware');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

//file requires//
var routes = require('./routes/index');
var about = require('./routes/about');
var contact = require('./routes/contact');

//variables//
var app = express();

//routes//
app.use('/', routes);
app.use('/about', about);
app.use('/contact', contact);

//settings//
app.set('port', process.env.PORT || 3000);
app.set('views' + '/views');
app.set('view engine', 'ejs');
app.set('case sensitive routing', true); //makes it case sensitive
app.set('strict routing', true);

app.locals.title = "Jennifer YB Jones";
//attach middleware that will handle request
app.use(lessCSS('public'));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false})); //this is for FORMS!!!



//errors//
app.use(function(req, res) {
  res.status(403).send('Unauthorized!!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Express Server listening at http://%s:%s', host, port);
})
