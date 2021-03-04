const mongoose = require('mongoose');

await mongoose.connect('mongodb://localhost/Auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});