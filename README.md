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



---

## 🔐 API Key Protection

To access secure routes like `/summary`, include this header:

```
x-api-key: supersecretkey123
```

---

## 📊 GET `/api/activities/summary?userId=1001`

Returns a summary of the user's completion status:

**Headers:**
```
x-api-key: supersecretkey123
```

**Response:**
```json
{
  "userId": 1001,
  "totalActivities": 10,
  "completed": 7,
  "completionRate": "70%"
}
```


---

## 📆 GET `/api/activities/today?userId=1001`

Returns activities suggested for **today’s calendar date**.

**Example response:**
```json
{
  "day": 29,
  "activities": [
    {
      "title": "Push Ups",
      "isCompleted": false
    },
    ...
  ]
}
```

> Automatically calculates today's day and shows the relevant activity list.