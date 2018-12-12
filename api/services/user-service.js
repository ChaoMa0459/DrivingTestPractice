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


exports.update = function (user, callback) {
  let resultCallback = function (err, user) {
    throwError(err);
    callback(user);
  };
  user.modified_date = new Date();
  User.findOneAndUpdate({
    _id: user._id
  }, user, {
    new: true
  }, resultCallback);
};

