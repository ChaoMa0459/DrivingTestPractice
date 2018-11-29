'use strict';
module.exports = function (app) {
  //Initialize models
  let questionModel = require('./models/question');

  //Initialize routes
  let questionRoutes = require('./routes/question-route');
  questionRoutes(app);
};
