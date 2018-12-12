let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb://localhost:27017/BBQProject').then(
  () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
    );
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


let initApp = require('./api/app');
initApp(app);

app.use(cors());

let fileRoutes = require('./api/routes/file');
app.use('/file', fileRoutes);

const port = process.env.PORT || 4000;
const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

