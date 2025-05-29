const Activity = require('../models/Activity');
const UserActivityProgress = require('../models/UserActivityProgress');

exports.getActivitiesByDay = async (req, res) => {
  try {
    const { day } = req.params;
    const userId = req.query.userId;

    const activities = await Activity.find({ suggestedDays: parseInt(day) });
    const progress = await UserActivityProgress.find({
      userId,
      day
    });

    const result = activities.map(activity => {
      const status = progress.find(p => p.activityId === activity._id);
      return {
        ...activity._doc,
        isCompleted: status?.isCompleted || false
      };
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.markActivityComplete = async (req, res) => {
  try {
    const { activityId } = req.params;
    const { userId, day } = req.body;

    let existing = await UserActivityProgress.findOne({ userId, activityId, day });

    if (existing) {
      existing.isCompleted = true;
      existing.completedAt = new Date();
      await existing.save();
    } else {
      await UserActivityProgress.create({
        userId,
        activityId,
        day,
        isCompleted: true,
        completedAt: new Date()
      });
    }

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getUserProgressByDay = async (req, res) => {
  try {
    const { userId } = req.query;
    const { day } = req.query;
    const activities = await Activity.find({ suggestedDays: parseInt(day) });
    const progress = await UserActivityProgress.find({
      userId,
      day
    });
    const result = activities.map(activity => {
      const status = progress.find(p => p.activityId === activity._id);
      return {
        ...activity._doc,
        isCompleted: status?.isCompleted || false
      };
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
