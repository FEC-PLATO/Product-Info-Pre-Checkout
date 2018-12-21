var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productSelection');

var itemSchema = mongoose.Schema({
  _id: Number,
  price: String,
  totalRatings: Number,
  averageRating: Number,
  totalQuestions: Number,
  colors: [String],
  sizes: [String],
  quantityCanBuy: Number
});

var Item = mongoose.model('Item', itemSchema);

var getItemById = function (id, callback) {
  Item.findById(id, callback);
}

var getAllItems = function(callback) {
  Item.find(callback);
}

module.exports.getItemById = getItemById;
module.exports.getAllItems = getAllItems;
