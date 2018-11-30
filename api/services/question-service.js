'use strict';
const mongoose = require('mongoose'),
  Question = mongoose.model('question');

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

// exports.get = function (stickyId, callback) {
//   let resultCallback = function (err, sticky) {
//     throwError(err);
//     callback(sticky);
//   };
//   Sticky.findById(stickyId, resultCallback);
// };

exports.search = function (params, callback) {
  let resultCallback = function (err, question) {
    throwError(err);
    callback(question);
  };
  Question.find(params, resultCallback);
};