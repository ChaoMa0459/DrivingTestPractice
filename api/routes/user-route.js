'use strict';
const express = require('express');


module.exports = function (app) {
  const userController = require('../controllers/user-controller');

  app.route('/registration/add')
  // .get(questionController.list)
   .post(userController.post);

  app.route('/login/:username')
    .get(userController.get);

};
