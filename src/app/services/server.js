let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');


  mongoose.connect('mongodb://localhost:27017/BBQ', {
    useMongoClient: true
  }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );
  mongoose.Promise = global.Promise;

  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  const port = process.env.PORT || 4000;

  const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
  });
