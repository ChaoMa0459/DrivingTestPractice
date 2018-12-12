'use strict';
module.exports = function (app) {
  //Initialize models
  let questionModel = require('./models/question');
  let userModel = require('./models/user');
  let resultModel = require('./models/result');

  //Initialize routes
  let questionRoutes = require('./routes/question-route');
  questionRoutes(app);
  let userRoutes = require('./routes/user-route');
  userRoutes(app);
  let resultRoutes = require('./routes/result-route');
  resultRoutes(app);
};



