const MoodeastModel = require("../models/moodeast.model");


class MoodeastService{
     static async createMoodeast(userId, title, description) {
          const createMoodeast = new MoodeastModel({ userId, title, description });
          return await createMoodeast.save();
     }

    static async getUserMoodeastList(userId){
        const MoodeastList = await MoodeastModel.find({userId})
        return MoodeastList;
     }

     static async deleteMoodeast(id){
     const deleted = await MoodeastModel.findByIdAndDelete({_id:id})
     return deleted;
     }

     static async updateMoodeast(id, title, description) {
          const updatedMoodeast = await MoodeastModel.findByIdAndUpdate(
            { _id: id },
            { title, description },
            { new: true }
          );
          return updatedMoodeast;
        }

}

module.exports = MoodeastService;
