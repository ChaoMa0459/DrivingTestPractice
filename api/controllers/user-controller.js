'use strict';
const userService = require('../services/user-service');

// exports.list = function (request, response) {
//   let callback = function (questions) {
//     response.status(200);
//     response.json(questions);
//   };
//   questionService.search({}, callback);
// };

exports.post = function (request, response) {
  let newUser = Object.assign({}, request.body),
    callback = function (user) {
      response.status(200);
      response.json(user);
    };
  userService.save(newUser, callback);
};

exports.list = function (request, response) {
  let callback = function (users) {
    response.status(200);
    response.json(users);
  };
  userService.search({}, callback);
};

exports.get = function (request, response) {
  let callback = function (user) {
    response.status(200);
    response.json(user);
  };
  userService.search({username: request.params.username}, callback);
};

exports.put = function (request, response) {
  let user = Object.assign({}, request.body),
    callback = function (user) {
      response.status(200);
      response.json(user);
    };
  user._id = request.params.userId;
  userService.update(user, callback);
};
