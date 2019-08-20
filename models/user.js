var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcryptjs');
// const getToken = require('../utils/getTokenForUser');
var userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    createdAt:{type: Date, default: Date.now(),required: true},
    updatedAt: {type: Date, required: false}
});

module.exports = mongoose.model('user', userSchema);

