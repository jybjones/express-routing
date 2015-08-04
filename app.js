//npm requires//
var fs = require('fs');
var express = require('express');
var lessCSS = require('less-middleware');
var morgan = require('morgan');
var bodyParser = require('body-parser');

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

//create a stream//
// var logStream = fs.createWriteStream('access.log', {flags: 'a'});
// app.use(morgan('combined', {stream: logStream})); //outputs to file
// app.use(morgan('dev')); //terminal


// app.use(function (req, res, next) {
//   var client = require('./lib/loggly')('incoming');
//    client.log({
//     ip: req.ip,
//     date: new Date(),
//     url: req.url,
//     status: res.statusCode,
//     method: req.method,
//   });
//   next();
// });


//errors//
app.use(function(req, res) {
  res.status(403).send('Unauthorized!!');
});

///////LOGGLY to test ERRORS/////
// app.use(function (err, req, res, next) {
//   var client = require('./lib/loggly')('error');
//     client.log({
//       ip: req.ip,
//       date: new Date(),
//       url: req.url,
//       status: res.statusCode,
//       method: req.method,
//       stackTrace: err.stack
//   });

////NEED to pass 4 ARGUMENTS to create an error handling!!!
// app.use(function (err, req, res, next) {
//   console.log('ERRRRRR', err.stack);
//   res.status(500).send('My Bad')
// });


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Express Server listening at http://%s:%s', host, port);
})
