const MoodeastService = require('../services/moodeast.service');


exports.createMoodeast =  async (req,res,next)=>{
    try {
        const { userId,title, description } = req.body;
        let MoodeastData = await MoodeastService.createMoodeast(userId,title, description);
        res.json({status: true,success:MoodeastData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.getMoodeastList = async (req, res, next) => {
    try {
        console.log('Request Body:', req.body);
        const { userId } = req.body;
        let MoodeastData = await MoodeastService.getUserMoodeastList(userId);
        res.header('Content-Type', 'application/json');
        res.json({ status: true, success: MoodeastData });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}


exports.deleteMoodeast =  async (req,res,next)=>{
    try {
        const { id } = req.body;
        let deleted = await MoodeastService.deleteMoodeast(id);
        res.json({status: true,success:deleted});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.updateMoodeast = async (req, res, next) => {
    try {
      const { id, title, description } = req.body;
      const updatedMoodeast = await MoodeastService.updateMoodeast(id, title, description);
      res.json({ status: true, success: updatedMoodeast });
    } catch (error) {
      console.log(error, 'err---->');
      next(error);
    }
};
