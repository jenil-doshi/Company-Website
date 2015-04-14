
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.mobile = function(req, res){
  res.render('Mobile');
};

exports.bigData = function(req, res){
  res.render('BigData');
};

exports.iot = function(req, res){
  res.render('IoT');
};

exports.aboutUs = function(req, res){
  res.render('aboutUs');
};

exports.location = function(req, res){
  res.render('location');
};