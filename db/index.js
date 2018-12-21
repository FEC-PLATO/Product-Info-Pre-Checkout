var mongoose = require('mongoose');

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

var getItemById = function (callback) {

}

module.exports.getItem = getItem;

