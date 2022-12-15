const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://127.0.0.1:27017/suncheck')
  .then(() => 'Database Connected')
  .catch((error) => error);

module.exports = mongoose;
