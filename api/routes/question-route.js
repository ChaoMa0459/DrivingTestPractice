'use strict';
const express = require('express');


module.exports = function (app) {
  const questionController = require('../controllers/question-controller');
  // Sticky Routes for search and create.
  app.route('/stickies')
    // .get(questionController.list)
    .post(questionController.post);

};
