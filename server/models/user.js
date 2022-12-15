const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.model('User', userInfoSchema);

module.exports = User;
