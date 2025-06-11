
const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  frequency: { type: String, required: true },
  duration: { type: String, required: true },
  suggestedDays: [{ type: Number }]
}, { timestamps: true });

module.exports = mongoose.model('Activity', activitySchema);
