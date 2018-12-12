'use strict';
const express = require('express');


module.exports = function (app) {
  const questionController = require('../controllers/question-controller');
  // Sticky Routes for search and create.
  app.route('/addQuestions')
    // .get(questionController.list)
    .post(questionController.post);

  app.route('/answerQuestions/answer')
    .get(questionController.list);

  app.route('/adminQuestionsList/:questionId')
    .delete(questionController.delete)
    .put(questionController.put)

  app.route('/adminQuestionsList')
    .get(questionController.list)
};
