'use strict';
const mongoose = require('mongoose'),
  User = mongoose.model('users');

let throwError = function (error) {
  if (error) {
    throw Error(error);
  }
};

exports.save = function (user, callback) {
  let newUser = new User(user),
    resultCallback = function (err, user) {
      throwError(err);
      callback(user);
    };
  newUser.save(resultCallback);
};

exports.search = function (params, callback) {
  let resultCallback = function (err, users) {
    throwError(err);
    callback(users);
  };
  User.find(params, resultCallback);
};


exports.get = function (username, callback) {
  let resultCallback = function (err, user) {
    throwError(err);
    callback(user);
  };
  User.findByUsername(username, resultCallback);
};

