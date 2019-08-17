var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemoSchema = new Schema({
    title: { type: String, required: true, default: '' },
    content: { type: String, required: true, default: '' },
    date: { type: Date, required: true, default: Date.now() },
    color: { type: String },
    createBy: { type: String, required: true }
});


// Export the model
module.exports = mongoose.model('memo', MemoSchema);