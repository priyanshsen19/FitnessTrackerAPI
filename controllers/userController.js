const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { _id, name, email } = req.body;

    if (!_id || !name || !email) {
      return res.status(400).json({ error: 'Missing _id, name, or email' });
    }

    const existingUser = await User.findById(_id);
    if (existingUser) {
      return res.status(409).json({ error: 'User with this _id already exists' });
    }

    const user = await User.create({ _id, name, email });

    res.status(201).json(user);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Email must be unique' });
    }
    res.status(500).json({ error: 'Server Error' });
  }
};
