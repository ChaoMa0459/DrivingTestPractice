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

// exports.get = function (request, response) {
//   let callback = function (sticky) { // todo
//       response.status(200);
//       response.json(sticky);
//   };
//   questionService.get(request.params.stickyId, callback);
// };
