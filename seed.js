const mongoose = require('mongoose');
const connectDB = require('./config/db');
const User = require('./models/User');
const Activity = require('./models/Activity');

const seed = async () => {
  await connectDB();
  await User.deleteMany({});
  await Activity.deleteMany({});

  const user = await User.create({
    _id: 1001,
    name: 'Priyansh',
    email: 'Priyansh.sen@example.com'
  });

  const activities = await Activity.insertMany([
    { _id: 'ACT1001', title: '5-min Meditation', category: 'Mindfulness', frequency: '1x/Day', duration: '5 min', suggestedDays: [15, 20, 25, 30] },
    { _id: 'ACT1002', title: 'Jumping Jacks', category: 'Cardio', frequency: '1x/Day', duration: '30 sec', suggestedDays: [14, 15, 16, 17, 18] },
    { _id: 'ACT1003', title: 'Deep Breathing', category: 'Relaxation', frequency: '2x/Day', duration: '3 min', suggestedDays: [15, 20, 30] },
    { _id: 'ACT1004', title: 'Push Ups', category: 'Strength', frequency: '1x/Day', duration: '5 min', suggestedDays: [14, 16, 18, 20] },
    { _id: 'ACT1005', title: 'Lunges', category: 'Strength', frequency: '2x/Week', duration: '5 min', suggestedDays: [15, 20, 25, 30] },
    { _id: 'ACT1006', title: 'Neck Rolls', category: 'Stretching', frequency: '1x/Day', duration: '2 min', suggestedDays: [14, 16, 18, 20, 22] },
    { _id: 'ACT1007', title: 'High Knees', category: 'Cardio', frequency: '2x/Week', duration: '1 min', suggestedDays: [14, 17, 20, 23] },
    { _id: 'ACT1008', title: 'Plank Hold', category: 'Core', frequency: '1x/Day', duration: '60 sec', suggestedDays: [15, 18, 21, 24] },
    { _id: 'ACT1009', title: 'Toe Touch Stretch', category: 'Flexibility', frequency: '1x/Day', duration: '2 min', suggestedDays: [14, 16, 19, 22] }
  ]);

  console.log('Seeded successfully. User ID:', user._id);
  process.exit();
};

seed();
