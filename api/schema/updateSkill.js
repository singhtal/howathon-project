const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SECTION  collection and schema for Registration
let SkillUpdateSchema = new Schema(
  {
    username: {
      type: String,
    },
    volunteer: {
      type: Boolean,
    },
    certifications: {
      type: String,
    },
    description: {
      type: String,
    },
    skills: {
      type: String,
    },
    updateDate: {
      type: Date,
      required: true,
      default: Date.now
    }
  },
  {
    collection: "mentorskill",
  }
);

module.exports = mongoose.model("mentorskill", SkillUpdateSchema);
