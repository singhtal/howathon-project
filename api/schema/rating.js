const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SECTION  collection and schema for Registration
let RatingSchema = new Schema(
  {
    MentorID: {
      type: String,
    },
    MenteeID: {
      type: String,
    },
    SkillID: {
       type: String, 
    },
    Dated: {
      type: Date,
      required: true,
      default: Date.now
    },
    status: {
       type: String, 
       default: 'active'
    },
    Rating: {
        type: Number,
        required: true
    },
    Review: {
        type: String
    }
  },
  {
    collection: "ratings",
  }
);

module.exports = mongoose.model("ratingSchema", RatingSchema);
