const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: Number, ref: 'User' },
  activityId: { type: String, ref: 'Activity' },
  day: Number,
  isCompleted: { type: Boolean, default: false },
  completedAt: Date
});

module.exports = mongoose.model('UserActivityProgress', progressSchema);
