'use strict';
const questionService = require('../services/question-service');

exports.list = function (request, response) {
  let callback = function (questions) {
    response.status(200);
    response.json(questions);
  };
  questionService.search({}, callback);
};

exports.post = function (request, response) {
  let newQuestion = Object.assign({}, request.body),
    callback = function (question) {
      response.status(200);
      response.json(question);
    };
  questionService.save(newQuestion, callback);
};

exports.delete = function (request, response) {
  let callback = function (question) {
    response.status(200);
    response.json({
      message: 'Question Successfully deleted'
    });
  };
  questionService.delete(request.params.questionId, callback);
};

exports.put = function (request, response) {
  let question = Object.assign({}, request.body),
    callback = function (question) {
      response.status(200);
      response.json(question);
    };
  question._id = request.params.questionId;
  questionService.update(question, callback);
};
