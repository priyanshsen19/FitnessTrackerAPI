const express = require('express');
const connectDB = require('./config/db');
const activityRoutes = require('./routes/activityRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/activities', activityRoutes);

module.exports = app;
