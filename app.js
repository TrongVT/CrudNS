var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

//load employee route
var customers = require('./routes/employee'); 
var app = express();
// all environments
app.set('port', process.env.PORT || 1235);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//routes
app.get('/', routes.index);
app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Server listening on port ' + app.get('port'));
});