const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let result = new Schema({
  username: {
    type: String,
    required: "username is required"
  },
  rightNum: {
    type: Number,
    required: "rightNum is required"
  },
  totalNum: {
    type: Number,
    required: "totalNum is required"
  }
},
{
  collection: 'results'
});

module.exports = mongoose.model('result', result);
