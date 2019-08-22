const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./routes/api'); // Imports routes for the memos
const cors = require('cors');
const PORT = process.env.PORT || 3009;
//const { mongoose } = require('./db.js');
mongoose.connect('mongodb://testdb:password123@ds263927.mlab.com:63927/memodb', { useNewUrlParser: true }, function(error){
  if(!error){
    console.log("Connect Server mLab memodb Successfully");
  }else{
    console.log("Has error when connect");
  }
}); 
mongoose.set('useFindAndModify', false);
const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(PORT, () => console.log('Server started at port in env'));
app.use('/api', api);
