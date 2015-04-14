
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var bodyParser = require('body-parser');
var mysql = require('mysql');
var mysql1 = require('./routes/mysql');
var app = express();
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/mobile', routes.mobile);
app.get('/bigData', routes.bigData);
//app.post('/bigData', routes.bigData);
app.get('/iot', routes.iot);
app.get('/aboutUs', routes.aboutUs);
app.get('/location', routes.location);

app.post('/save', function(req, res) {
    
var data = req.body;
console.log(data);
var fname = data.fname;
var lname = data.lname;
var email = data.email;
var insertData = "insert into user values('"+fname+"','"+lname+"','"+email+"')";
	mysql1.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			res.send({"save":"success"});
		}
	},insertData);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
