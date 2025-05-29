const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  email: { type: String, unique: true }
});

module.exports = mongoose.model('User', userSchema);
