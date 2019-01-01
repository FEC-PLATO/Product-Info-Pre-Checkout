var Item = require('../db/index.js');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productSelection');


var items = [

  new Item.Item ({
    "_id": 1,
    "price": "$100.00",
    "totalRatings": 203,
    "averageRating": 1.09,
    "totalQuestions": 79,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),

  new Item.Item ({
    "_id": 2,
    "price": "$322.26",
    "totalRatings": 208,
    "averageRating": 2.08,
    "totalQuestions": 58,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 2
  }),

  new Item.Item ({
    "_id": 3,
    "price": "$210.32",
    "totalRatings": 210,
    "averageRating": 1.4,
    "totalQuestions": 55,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 7
  }),

  new Item.Item ({
    "_id": 4,
    "price": "$1,032.77",
    "totalRatings": 236,
    "averageRating": 2.68,
    "totalQuestions": 69,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 5,
    "price": "$1,161.89",
    "totalRatings": 69,
    "averageRating": 0.48,
    "totalQuestions": 26,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 10
  }),
  new Item.Item ({
    "_id": 6,
    "price": "$578.44",
    "totalRatings": 43,
    "averageRating": 0.04,
    "totalQuestions": 68,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 7,
    "price": "$562.38",
    "totalRatings": 218,
    "averageRating": 4.16,
    "totalQuestions": 32,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 8,
    "price": "$1,010.83",
    "totalRatings": 207,
    "averageRating": 1.17,
    "totalQuestions": 18,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 8
  }),
  new Item.Item ({
    "_id": 9,
    "price": "$1,414.77",
    "totalRatings": 181,
    "averageRating": 2.68,
    "totalQuestions": 66,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 2
  }),

  new Item.Item ({
    "_id": 10,
    "price": "$1,235.34",
    "totalRatings": 71,
    "averageRating": 1.7,
    "totalQuestions": 92,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 10
  }),

  new Item.Item ({
    "_id": 11,
    "price": "$924.46",
    "totalRatings": 28,
    "averageRating": 0.21,
    "totalQuestions": 88,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 7
  }),
  new Item.Item ({
    "_id": 12,
    "price": "$996.79",
    "totalRatings": 30,
    "averageRating": 1.11,
    "totalQuestions": 31,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 13,
    "price": "$1,471.72",
    "totalRatings": 204,
    "averageRating": 2.76,
    "totalQuestions": 94,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 4
  }),
  new Item.Item ({
    "_id": 14,
    "price": "$1,044.76",
    "totalRatings": 169,
    "averageRating": 1.42,
    "totalQuestions": 24,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 15,
    "price": "$216.28",
    "totalRatings": 166,
    "averageRating": 3.06,
    "totalQuestions": 55,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 16,
    "price": "$941.21",
    "totalRatings": 37,
    "averageRating": 3.64,
    "totalQuestions": 77,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 7
  }),
  new Item.Item ({
    "_id": 17,
    "price": "$708.56",
    "totalRatings": 75,
    "averageRating": 0.01,
    "totalQuestions": 15,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),
  new Item.Item ({
    "_id": 18,
    "price": "$767.58",
    "totalRatings": 188,
    "averageRating": 3.86,
    "totalQuestions": 0,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 8
  }),
  new Item.Item ({
    "_id": 19,
    "price": "$1,420.94",
    "totalRatings": 91,
    "averageRating": 0.14,
    "totalQuestions": 67,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),

  new Item.Item ({
    "_id": 20,
    "price": "$1,084.85",
    "totalRatings": 176,
    "averageRating": 4.97,
    "totalQuestions": 42,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 4
  }),
  new Item.Item ({
    "_id": 21,
    "price": "$1,125.90",
    "totalRatings": 191,
    "averageRating": 4.2,
    "totalQuestions": 6,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),
  new Item.Item ({
    "_id": 22,
    "price": "$214.38",
    "totalRatings": 10,
    "averageRating": 3.81,
    "totalQuestions": 28,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 2
  }),
  new Item.Item ({
    "_id": 23,
    "price": "$602.67",
    "totalRatings": 10,
    "averageRating": 1.44,
    "totalQuestions": 57,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 1
  }),
  new Item.Item ({
    "_id": 24,
    "price": "$362.59",
    "totalRatings": 246,
    "averageRating": 4.47,
    "totalQuestions": 18,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 2
  }),
  new Item.Item ({
    "_id": 25,
    "price": "$380.85",
    "totalRatings": 242,
    "averageRating": 3.81,
    "totalQuestions": 89,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 9
  }),
  new Item.Item ({
    "_id": 26,
    "price": "$195.34",
    "totalRatings": 227,
    "averageRating": 4.46,
    "totalQuestions": 99,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 1
  }),
  new Item.Item ({
    "_id": 27,
    "price": "$682.76",
    "totalRatings": 89,
    "averageRating": 3.96,
    "totalQuestions": 48,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 9
  }),
  new Item.Item ({
    "_id": 28,
    "price": "$1,375.83",
    "totalRatings": 99,
    "averageRating": 4.49,
    "totalQuestions": 95,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 7
  }),
  new Item.Item ({
    "_id": 29,
    "price": "$877.24",
    "totalRatings": 49,
    "averageRating": 2.79,
    "totalQuestions": 33,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 8
  }),
  new Item.Item ({
    "_id": 30,
    "price": "$241.22",
    "totalRatings": 101,
    "averageRating": 3.92,
    "totalQuestions": 60,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 30,
    "price": "$241.22",
    "totalRatings": 101,
    "averageRating": 3.92,
    "totalQuestions": 60,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 31,
    "price": "$1,042.64",
    "totalRatings": 149,
    "averageRating": 0.85,
    "totalQuestions": 79,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 8
  }),
  new Item.Item ({
    "_id": 32,
    "price": "$919.29",
    "totalRatings": 195,
    "averageRating": 1.88,
    "totalQuestions": 92,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 10
  }),
  new Item.Item ({
    "_id": 33,
    "price": "$399.33",
    "totalRatings": 88,
    "averageRating": 0.98,
    "totalQuestions": 32,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),
  new Item.Item ({
    "_id": 34,
    "price": "$156.06",
    "totalRatings": 121,
    "averageRating": 4.91,
    "totalQuestions": 6,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 1
  }),
  new Item.Item ({
    "_id": 35,
    "price": "$1,426.62",
    "totalRatings": 134,
    "averageRating": 3.59,
    "totalQuestions": 6,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 36,
    "price": "$277.64",
    "totalRatings": 204,
    "averageRating": 1.27,
    "totalQuestions": 64,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 10
  }),
  new Item.Item ({
    "_id": 37,
    "price": "$759.72",
    "totalRatings": 227,
    "averageRating": 4.81,
    "totalQuestions": 7,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 38,
    "price": "$1,297.60",
    "totalRatings": 78,
    "averageRating": 3.49,
    "totalQuestions": 20,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 9
  }),
  new Item.Item ({
    "_id": 39,
    "price": "$263.32",
    "totalRatings": 74,
    "averageRating": 2.32,
    "totalQuestions": 44,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 1
  }),
  new Item.Item ({
    "_id": 40,
    "price": "$477.47",
    "totalRatings": 164,
    "averageRating": 1.81,
    "totalQuestions": 82,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 4
  }),
  new Item.Item ({
    "_id": 41,
    "price": "$1,376.33",
    "totalRatings": 112,
    "averageRating": 4.75,
    "totalQuestions": 24,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 2
  }),
  new Item.Item ({
    "_id": 42,
    "price": "$1,069.37",
    "totalRatings": 246,
    "averageRating": 3.39,
    "totalQuestions": 78,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 1
  }),
  new Item.Item ({
    "_id": 43,
    "price": "$1,120.40",
    "totalRatings": 84,
    "averageRating": 3.05,
    "totalQuestions": 74,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),
  new Item.Item ({
    "_id": 44,
    "price": "$1,019.66",
    "totalRatings": 48,
    "averageRating": 1.02,
    "totalQuestions": 30,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 3
  }),
  new Item.Item ({
    "_id": 45,
    "price": "$945.11",
    "totalRatings": 197,
    "averageRating": 2.66,
    "totalQuestions": 46,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 1
  }),
  new Item.Item ({
    "_id": 46,
    "price": "$917.60",
    "totalRatings": 207,
    "averageRating": 3.6,
    "totalQuestions": 35,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 10
  }),
  new Item.Item ({
    "_id": 47,
    "price": "$1,294.57",
    "totalRatings": 194,
    "averageRating": 4.39,
    "totalQuestions": 2,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 10
  }),
  new Item.Item ({
    "_id": 48,
    "price": "$270.05",
    "totalRatings": 69,
    "averageRating": 4.56,
    "totalQuestions": 27,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 4
  }),
  new Item.Item ({
    "_id": 49,
    "price": "$129.77",
    "totalRatings": 34,
    "averageRating": 3.95,
    "totalQuestions": 55,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),
  new Item.Item ({
    "_id": 50,
    "price": "$252.45",
    "totalRatings": 234,
    "averageRating": 0.36,
    "totalQuestions": 97,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),
  new Item.Item ({
    "_id": 51,
    "price": "$408.48",
    "totalRatings": 143,
    "averageRating": 3.23,
    "totalQuestions": 24,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 1
  }),
  new Item.Item ({
    "_id": 52,
    "price": "$778.59",
    "totalRatings": 11,
    "averageRating": 2.22,
    "totalQuestions": 9,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 10
  }),
  new Item.Item ({
    "_id": 53,
    "price": "$847.70",
    "totalRatings": 121,
    "averageRating": 2.6,
    "totalQuestions": 54,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 8
  }),
  new Item.Item ({
    "_id": 54,
    "price": "$587.57",
    "totalRatings": 206,
    "averageRating": 3.55,
    "totalQuestions": 12,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 7
  }),
  new Item.Item ({
    "_id": 55,
    "price": "$1,224.82",
    "totalRatings": 172,
    "averageRating": 1.34,
    "totalQuestions": 2,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 56,
    "price": "$978.91",
    "totalRatings": 51,
    "averageRating": 4.04,
    "totalQuestions": 93,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 3
  }),
  new Item.Item ({
    "_id": 57,
    "price": "$558.47",
    "totalRatings": 99,
    "averageRating": 1.77,
    "totalQuestions": 96,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 2
  }),
  new Item.Item ({
    "_id": 58,
    "price": "$165.18",
    "totalRatings": 121,
    "averageRating": 5,
    "totalQuestions": 17,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 8
  }),
  new Item.Item ({
    "_id": 59,
    "price": "$801.24",
    "totalRatings": 124,
    "averageRating": 4.28,
    "totalQuestions": 6,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 8
  }),
  new Item.Item ({
    "_id": 60,
    "price": "$226.80",
    "totalRatings": 90,
    "averageRating": 4.45,
    "totalQuestions": 84,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 4
  }),
  new Item.Item ({
    "_id": 61,
    "price": "$268.78",
    "totalRatings": 110,
    "averageRating": 3.16,
    "totalQuestions": 66,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 4
  }),
  new Item.Item ({
    "_id": 62,
    "price": "$348.41",
    "totalRatings": 65,
    "averageRating": 0.63,
    "totalQuestions": 62,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 7
  }),
  new Item.Item ({
    "_id": 63,
    "price": "$137.44",
    "totalRatings": 147,
    "averageRating": 2.04,
    "totalQuestions": 5,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 9
  }),
  new Item.Item ({
    "_id": 64,
    "price": "$825.43",
    "totalRatings": 22,
    "averageRating": 1.57,
    "totalQuestions": 84,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 65,
    "price": "$1,098.83",
    "totalRatings": 173,
    "averageRating": 4.93,
    "totalQuestions": 39,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 7
  }),
  new Item.Item ({
    "_id": 66,
    "price": "$698.37",
    "totalRatings": 187,
    "averageRating": 3.49,
    "totalQuestions": 7,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 67,
    "price": "$1,093.90",
    "totalRatings": 104,
    "averageRating": 4.47,
    "totalQuestions": 5,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 9
  }),
  new Item.Item ({
    "_id": 68,
    "price": "$972.70",
    "totalRatings": 170,
    "averageRating": 0.61,
    "totalQuestions": 31,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 7
  }),
  new Item.Item ({
    "_id": 69,
    "price": "$481.51",
    "totalRatings": 70,
    "averageRating": 2.86,
    "totalQuestions": 50,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 9
  }),
  new Item.Item ({
    "_id": 70,
    "price": "$1,110.66",
    "totalRatings": 135,
    "averageRating": 4.52,
    "totalQuestions": 10,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 10
  }),
  new Item.Item ({
    "_id": 71,
    "price": "$665.19",
    "totalRatings": 97,
    "averageRating": 0.2,
    "totalQuestions": 70,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 1
  }),
  new Item.Item ({
    "_id": 72,
    "price": "$744.61",
    "totalRatings": 71,
    "averageRating": 0.55,
    "totalQuestions": 49,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 2
  }),
  new Item.Item ({
    "_id": 73,
    "price": "$724.35",
    "totalRatings": 90,
    "averageRating": 3.3,
    "totalQuestions": 33,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),
  new Item.Item ({
    "_id": 74,
    "price": "$1,130.59",
    "totalRatings": 168,
    "averageRating": 0.81,
    "totalQuestions": 4,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 4
  }),
  new Item.Item ({
    "_id": 75,
    "price": "$86.38",
    "totalRatings": 98,
    "averageRating": 4.84,
    "totalQuestions": 72,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 8
  }),
  new Item.Item ({
    "_id": 76,
    "price": "$445.93",
    "totalRatings": 50,
    "averageRating": 4.8,
    "totalQuestions": 73,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 9
  }),
  new Item.Item ({
    "_id": 77,
    "price": "$942.33",
    "totalRatings": 232,
    "averageRating": 2.23,
    "totalQuestions": 93,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),
  new Item.Item ({
    "_id": 78,
    "price": "$976.75",
    "totalRatings": 101,
    "averageRating": 3.7,
    "totalQuestions": 60,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 2
  }),
  new Item.Item ({
    "_id": 79,
    "price": "$747.86",
    "totalRatings": 20,
    "averageRating": 1.28,
    "totalQuestions": 52,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 8
  }),
  new Item.Item ({
    "_id": 80,
    "price": "$255.24",
    "totalRatings": 91,
    "averageRating": 3.92,
    "totalQuestions": 78,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 81,
    "price": "$1,367.46",
    "totalRatings": 185,
    "averageRating": 0.07,
    "totalQuestions": 57,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 7
  }),
  new Item.Item ({
    "_id": 82,
    "price": "$155.44",
    "totalRatings": 34,
    "averageRating": 2.98,
    "totalQuestions": 63,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 2
  }),
  new Item.Item ({
    "_id": 83,
    "price": "$622.97",
    "totalRatings": 108,
    "averageRating": 1.29,
    "totalQuestions": 27,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 7
  }),
  new Item.Item ({
    "_id": 84,
    "price": "$197.57",
    "totalRatings": 125,
    "averageRating": 1.88,
    "totalQuestions": 86,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 10
  }),
  new Item.Item ({
    "_id": 85,
    "price": "$508.78",
    "totalRatings": 150,
    "averageRating": 4.57,
    "totalQuestions": 90,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 4
  }),
  new Item.Item ({
    "_id": 86,
    "price": "$1,457.97",
    "totalRatings": 11,
    "averageRating": 0.71,
    "totalQuestions": 69,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 7
  }),
  new Item.Item ({
    "_id": 87,
    "price": "$752.65",
    "totalRatings": 122,
    "averageRating": 4.81,
    "totalQuestions": 50,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 3
  }),
  new Item.Item ({
    "_id": 88,
    "price": "$205.23",
    "totalRatings": 223,
    "averageRating": 1.35,
    "totalQuestions": 3,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),
  new Item.Item ({
    "_id": 89,
    "price": "$1,047.80",
    "totalRatings": 233,
    "averageRating": 2.28,
    "totalQuestions": 13,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 6
  }),
  new Item.Item ({
    "_id": 90,
    "price": "$935.86",
    "totalRatings": 157,
    "averageRating": 2.75,
    "totalQuestions": 8,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 3
  }),
  new Item.Item ({
    "_id": 91,
    "price": "$1,340.10",
    "totalRatings": 88,
    "averageRating": 1.86,
    "totalQuestions": 76,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 1
  }),
  new Item.Item ({
    "_id": 92,
    "price": "$508.65",
    "totalRatings": 57,
    "averageRating": 3.33,
    "totalQuestions": 29,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 2
  }),
  new Item.Item ({
    "_id": 93,
    "price": "$757.57",
    "totalRatings": 10,
    "averageRating": 2.09,
    "totalQuestions": 31,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),
  new Item.Item ({
    "_id": 94,
    "price": "$1,418.97",
    "totalRatings": 18,
    "averageRating": 4.85,
    "totalQuestions": 10,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 3
  }),
  new Item.Item ({
    "_id": 95,
    "price": "$98.42",
    "totalRatings": 148,
    "averageRating": 1.9,
    "totalQuestions": 66,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),
  new Item.Item ({
    "_id": 96,
    "price": "$173.22",
    "totalRatings": 183,
    "averageRating": 4.57,
    "totalQuestions": 96,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 5
  }),
  new Item.Item ({
    "_id": 97,
    "price": "$605.15",
    "totalRatings": 194,
    "averageRating": 3.41,
    "totalQuestions": 21,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 3
  }),
  new Item.Item ({
    "_id": 98,
    "price": "$979.65",
    "totalRatings": 65,
    "averageRating": 2.85,
    "totalQuestions": 65,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 4
  }),
  new Item.Item ({
    "_id": 99,
    "price": "$363.55",
    "totalRatings": 99,
    "averageRating": 0.36,
    "totalQuestions": 62,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 2
  }),
  new Item.Item ({
    "_id": 100,
    "price": "$1,300.85",
    "totalRatings": 246,
    "averageRating": 2.56,
    "totalQuestions": 67,
    "colors": [
      "black",
      "silver",
      "gold",
      "pink"
    ],
    "sizes": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "quantityCanBuy": 7
  })
]

var done = 0;

for (var i = 0; i < items.length; i++) {
  items[i].save(function(err, result) {
    done++;
    if (done === items.length) {
      mongoose.disconnect();
    }
  });
}



