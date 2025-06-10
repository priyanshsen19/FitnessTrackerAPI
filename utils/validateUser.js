const User = require('../models/User');

async function validateUserExists(userId, res) {
  if (!userId) {
    res.status(400).json({ error: 'Missing userId' });
    return false;
  }

  const user = await User.findById(userId);
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return false;
  }

  return true;
}

module.exports = validateUserExists;
