const router = require("express").Router();
const MoodeastController = require('../controller/moodeast.controller')

router.post('/createMoodeast', MoodeastController.createMoodeast);

router.get('/getUserMoodeastList',MoodeastController.getMoodeastList)

router.post("/deleteMoodeast",MoodeastController.deleteMoodeast)

router.post('/getUserMoodeastList',MoodeastController.getMoodeastList)

router.post("/storeMoodeast",MoodeastController.createMoodeast);

router.put("/updateMoodeast", MoodeastController.updateMoodeast);

module.exports = router;
