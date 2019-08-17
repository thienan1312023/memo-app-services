// app.js

var express = require('express');
var bodyParser = require('body-parser');

var memo = require('./routes/memo'); // Imports routes for the memos
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://testdb:password123@ds263927.mlab.com:63927/memodb';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/memos', memo);

var port = 3100;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
