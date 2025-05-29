# FitnessTrackerAPI
For Tracking Fitness activities using Rest APIs
This is a RESTful API for a 5-minute-per-day habit tracker app. It allows users to view daily activities, mark them as complete, and track progress. Designed for consumption by a mobile app or website.

---

## Tech Stack

- **Node.js** + **Express**
- **MongoDB** (with Mongoose)
- **dotenv** for environment configuration

---

## Setup Instructions
npm install express 
node seed.js
node server.js
Your server will be running at: http://localhost:5000

## Testing the API
Use Postman, Insomnia, or curl to interact with the following endpoints:

GET /api/activities/day/:day?userId=<user_id>

POST /api/activities/<activity_id>/complete

GET /api/activities/progress?userId=<user_id>&day=<number_of_days>

