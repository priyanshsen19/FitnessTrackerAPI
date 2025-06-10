const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const activityRoutes = require('./routes/activityRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/activities', activityRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
