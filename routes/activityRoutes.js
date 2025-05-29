const express = require('express');
const router = express.Router();
const controller = require('../controllers/activityController');

router.get('/day/:day', controller.getActivitiesByDay);
router.post('/:activityId/complete', controller.markActivityComplete);
router.get('/progress', controller.getUserProgressByDay);

module.exports = router;
