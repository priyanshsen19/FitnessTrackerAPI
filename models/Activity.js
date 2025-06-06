const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  _id: String,
  title: String,
  category: String,
  frequency: String,
  duration: String,
  suggestedDays: [Number],
}, { timestamps: true });

module.exports = mongoose.model('Activity', activitySchema);
