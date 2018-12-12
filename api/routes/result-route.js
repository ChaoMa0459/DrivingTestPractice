'use strict';
const express = require('express');


module.exports = function (app) {
  const resultController = require('../controllers/result-controller');
  // Sticky Routes for search and create.
  app.route('/history/add')
    .post(resultController.post);

  app.route('/history/list')
    .get(resultController.list);

};