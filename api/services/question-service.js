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
8
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

exports.delete = function (questionId, callback) {
  let resultCallback = function (err, question) {
    throwError(err);
    callback();
  };
  Question.deleteOne,({
    _id: questionId
  }, resultCallback);
};

exports.update = function (question, callback) {
  let resultCallback = function (err, question) {
    throwError(err);
    callback(question);
  };
  question.modified_date = new Date();
  Question.findOneAndUpdate({
    _id: question._id
  }, question, {
    new: true
  }, resultCallback);
};
