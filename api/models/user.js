const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
  username: {
    type: String,
    required: "username is required"
  },
  password: {
    type: String,
    required: "password is required"
  },
  userType: {
    type: String,
    required: "user type is required"
  }
}, {
  collection: 'user'
});

module.exports = mongoose.model('users', user);
