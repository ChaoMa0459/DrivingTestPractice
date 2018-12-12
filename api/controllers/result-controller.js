'use strict';
const questionService = require('../services/result-service');

exports.list = function (request, response) {
  let callback = function (result) {
    response.status(200);
    response.json(result);
  };
  questionService.search({}, callback);
};

exports.post = function (request, response) {
  let newResult = Object.assign({}, request.body),
    callback = function (result) {
      response.status(200);
      response.json(result);
    };
  questionService.save(newResult, callback);
};
