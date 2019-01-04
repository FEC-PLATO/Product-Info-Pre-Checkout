var express = require ('express');
var app = express();
var bodyParser = require('body-parser');

var db = require('../db')
var path = require('path');

app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../client/dist'));

app.use('/', express.static('./client/dist/'));
app.use(/\/\d+\//, express.static('./client/dist/'));

//will redirect user to the proper endpoint
app.get('/', function(req, res) {
  res.send('Please enter id in url for item');
});

//get request route to retrieve one item by id
app.get('/api/item/:id', function(req, res) {
  db.getItemById(req.params.id, function(err, result) {
    if (err) {
      console.log('There was an error: ', err);
      res.status(404).send('Error!');
    } else {
      console.log('Here is the item: ', result)
      res.json(result);
    }
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});
