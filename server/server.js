
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration
// connnect to mongodb
mongoose.connect('mongodb://localhost/bbq'); // connect to local mongoDB database

mongoose.connection.once('open', function() {
    console.log('Connection has been made, now make fireworks...');
}).on('error', function(error) {
console.log('Connection error:', error);
});

app.get('/', (req, res) => {

});


app.post();
app.put();
app.delete();