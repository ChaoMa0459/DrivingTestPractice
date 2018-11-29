const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let question = new Schema({
  title: {
    type: String,
    required: "title is required"
  },
  selectionA: {
    type: String,
    required: "selection A is required"
  },
  selectionB: {
    type: String,
    required: "selection B is required"
  },
  selectionC: {
    type: String,
    required: "selection C is required"
  },
  selectionD: {
    type: String
  },
  answer: {
    type: String,
    required: "answer A is required"
  }
}, {
  collection: 'questions'
});

module.exports = mongoose.model('question', question);
