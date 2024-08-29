const mongoose = require('mongoose');
const dotenv = require("dotenv");

exports.connect=()=>{
  mongoose.connect('mongodb+srv://goutamsahu602:heFEljZh96ehNuOs@cluster0.yf7o4r2.mongodb.net/helpCenterDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
}

