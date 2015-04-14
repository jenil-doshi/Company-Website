 var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

var client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'test'
});

app.post('/save', function(req, res) {
    'use strict';
client.connect();
var data = req.body;
console.log(data);
//var values = data.fname,data.lname,data.email,data.password;
var fname = data.fname;
var lname = data.lname;
var email = data.email;
var sql = client.query("INSERT INTO user values('"+fname+"', '"+lname+"', '"+email+"')", function(err, result) {
 if(err){
      console.log(err.message);
    }else{
      console.log('success');

    }

});
client.query(sql);
res.sendStatus(200);
});