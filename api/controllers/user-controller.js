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
    callback = function (question) {
      response.status(200);
      response.json(user);
    };
  userService.save(newUser, callback);
};
