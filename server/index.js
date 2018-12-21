var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// // mongoose.connect();
// var db = mongoose.connection;
var db = require('../db')

//will redirect user to the proper endpoint
app.get('/', function(req, res) {
  res.send('Please visit /api/item for items');
});

//get request route to retrieve all items
app.get('/api/item', function(req, res) {
  db.getAllItems(function(err, results) {
    if (err) {
      console.log('There was an error: ', err);
    } else {
      console.log('Here are the items.')
      res.json(results);
    }
  });
});

//get request route to retrieve one item by id
app.get('/api/item/:id', function(req, res) {
  db.getItemById(req.params.id, function(err, result) {
    if (err) {
      console.log('There was an error: ', err);
    } else {
      console.log('Here is the item.')
      res.json(result);
    }
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});