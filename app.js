//npm requires//
var fs = require('fs');
var express = require('express');
var lessCSS = require('less-middleware');
var morgan = require('morgan');
// var bodyParser = require('body-parser');

//file requires//
// var routes = require('./routes/index');
// var pizza = require('./routes/pizza');
// var chickennuggets = require('./routes/chickennuggets');

//variables//
var app = express();

//settings//
app.set('port', process.env.PORT || 3000);
app.set('views' + '/views');
app.set('view engine', 'ejs');
app.set('case sensitive routing', true); //makes it case sensitive
app.set('strict routing', true);

//locals GOOD for Titles, All Templates have access to this!//
// app.locals.title = "My Awesome App";
// app.locals.title = 'aweso.me';

app.get('/', function(req, res) {
  res.send("hello visitor!");
});
//middlewares//
app.use(lessCSS('public')); //attach middleware that will handle request



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Express Server listening at http://%s:%s', host, port);
});
