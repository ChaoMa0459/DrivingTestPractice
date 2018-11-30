var mongoose = require('mongoose');
 
// configuration
// connnect to mongodb
mongoose.connect('mongodb://localhost/bbq'); // connect to local mongoDB database

mongoose.connection.once('open', function() {
    console.log('Connection has been made, now make fireworks...');
}).on('error', function(error) {
console.log('Connection error:', error);
});