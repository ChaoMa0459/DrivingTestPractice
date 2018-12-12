const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let result = new Schema({
  username: {
    type: String,
    required: "username is required"
  },
  rightNum: {
    type: String,
    required: "selection A is required"
  }
},
{
  collection: 'questions'
});

module.exports = mongoose.model('result', result);
