'use strict';
const mongoose = require('mongoose'),
  Result = mongoose.model('result');

let throwError = function (error) {
  if (error) {
    throw Error(error);
  }
};

exports.save = function (result, callback) {
  let newResult = new Result(result),
    resultCallback = function (err, result) {
      throwError(err);
      callback(result);
    };
    newResult.save(resultCallback);
};


exports.search = function (params, callback) {
  let resultCallback = function (err, result) {
    throwError(err);
    callback(result);
  };
  Result.find(params, resultCallback);
};

