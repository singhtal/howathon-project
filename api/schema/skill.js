const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SECTION  collection and schema for Registration
let SkillSchema = new Schema(
  {
    name: {
      type: String,
    },
    Date: {
      type: Date,
      required: true,
      default: Date.now
    }
  },
  {
    collection: "skills",
  }
);

module.exports = mongoose.model("skillSchema", SkillSchema);
