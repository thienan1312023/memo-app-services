var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    createdAt:{type: Date, default: Date.now(),required: true}
});

module.exports = mongoose.model('user', userSchema);

