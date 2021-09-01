const mongoose = require('mongoose');
const db = mongoose.connection;
const URI = process.env.MONGO_URL;

mongoose.connect(URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false 
})

db.once('open', _ => {
  console.log('Database is connected');
})

db.on('error', err => {
  console.log(err);
})