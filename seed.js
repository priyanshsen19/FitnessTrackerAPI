const Activity = require('./models/Activity');
const db = require('./config/db');

const data = [
  {
    "name": "Advanced Mobility exercises",
    "category": "Athleticism",
    "frequency": "3x/Week",
    "duration": "Max",
    "suggestedDays": [1, 2, 8, 9, 10, 12, 14, 15, 19, 20, 22, 27]
  },
  {
    "name": "Knowledge Boosters (Follow daily plans)",
    "category": "Boosters",
    "frequency": "3x/Week",
    "duration": "30 sec",
    "suggestedDays": [1, 4, 14, 16, 17, 18, 19, 21, 22, 27, 28, 30]
  },
  {
    "name": "Visual Solfege",
    "category": "Music",
    "frequency": "3x/Week",
    "duration": "30 sec",
    "suggestedDays": [1, 3, 5, 7, 9, 16, 19, 20, 22, 23, 24, 26]
  },
  {
    "name": "Auditory Memory (Song 2)",
    "category": "Memory",
    "frequency": "3x/Week",
    "duration": "30 sec",
    "suggestedDays": [1, 3, 4, 5, 7, 11, 17, 18, 20, 21, 24, 30]
  },
  {
    "name": "Auditory Magic (Set 2)",
    "category": "Creativity",
    "frequency": "3x/Week",
    "duration": "60 sec",
    "suggestedDays": [2, 3, 5, 7, 8, 9, 11, 18, 19, 25, 27, 30]
  },
  {
    "name": "Talk, To Listen",
    "category": "Languages",
    "frequency": "3x/Week",
    "duration": "60 sec",
    "suggestedDays": [5, 6, 8, 12, 14, 15, 19, 21, 24, 26, 29, 30]
  },
  {
    "name": "Finger Skills",
    "category": "Athleticism",
    "frequency": "3x/Week",
    "duration": "60 sec",
    "suggestedDays": [1, 6, 9, 12, 13, 14, 15, 21, 23, 25, 27, 30]
  },
  {
    "name": "Stimulus Explosion",
    "category": "Creativity",
    "frequency": "3x/Week",
    "duration": "60 sec",
    "suggestedDays": [2, 4, 8, 9, 12, 18, 20, 22, 23, 25, 28, 29]
  },
  {
    "name": "Foundations of Logic (Quantity)",
    "category": "Logic",
    "frequency": "3x/Week",
    "duration": "60 sec",
    "suggestedDays": [6, 12, 13, 14, 15, 18, 23, 25, 26, 27, 29, 30]
  }
];

async function seedActivities() {
  await db();
  await Activity.deleteMany({});
  await Activity.insertMany(data);
  console.log('Full-month activity seed complete');
  process.exit();
}

seedActivities();