const express = require('express');
const router = express.Router();
const controller = require('../controllers/activityController');
const apiKeyAuth = require('../middleware/apiKeyAuth');

router.get('/day/:day', controller.getActivitiesByDay);
router.post('/:activityId/complete', controller.markActivityComplete);
router.get('/progress', controller.getUserProgressByDay);
router.get('/summary', apiKeyAuth, controller.getUserSummary);
router.get('/today', controller.getTodayActivities);

module.exports = router;
