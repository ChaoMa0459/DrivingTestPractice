'use strict';
const resultService = require('../services/result-service');

exports.list = function (request, response) {
  let callback = function (result) {
    response.status(200);
    response.json(result);
  };
  resultService.search({}, callback);
};

exports.post = function (request, response) {
  let newResult = Object.assign({}, request.body),
    callback = function (result) {
      response.status(200);
      response.json(result);
    };
    resultService.save(newResult, callback);
};
