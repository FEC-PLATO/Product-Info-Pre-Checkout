var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// // mongoose.connect();
// var db = mongoose.connection;
var db = require('../db')

app.get('/', function(req, res) {
  res.send('Hello World!!!!');
});

app.get('/api/item', function(req, res) {
  db.getAllItems(function(err, results) {
    if (err) {
      console.log('There was an error: ', err);
    } else {
      res.json(results);
    }
  });
});

app.get('/api/item/:id', function(req, res) {
  db.getItemById(req.params.id, function(err, result) {
    if (err) {
      console.log('There was an error: ', err);
    } else {
      res.json(result);
    }
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});