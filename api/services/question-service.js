'use strict';
const mongoose = require('mongoose'),
  Question = mongoose.model('questions');

let throwError = function (error) {
  if (error) {
    throw Error(error);
  }
};

exports.save = function (question, callback) {
  let newQuestion = new Question(question),
    resultCallback = function (err, question) {
      throwError(err);
      callback(question);
    };
  newQuestion.save(resultCallback);
};
