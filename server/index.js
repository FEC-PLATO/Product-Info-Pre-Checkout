var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// // mongoose.connect();

// var db = mongoose.connection;

app.get('/', function(req, res) {
  res.send('Hello Ryan');
});

app.get('/api/item/:id', function(req, res) {

});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});