let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb://localhost:27017/BBQ', {
  useMongoClient: true
}).then(
  () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
    );
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

let initApp = require('./api/app');
initApp(app);

app.use(cors());
const port = process.env.PORT || 4000;
const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

