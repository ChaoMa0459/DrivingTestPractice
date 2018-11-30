'use strict';
const mongoose = require('mongoose'),
  User = mongoose.model('user');

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
