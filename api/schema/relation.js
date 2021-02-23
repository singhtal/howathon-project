const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SECTION  collection and schema for Registration
let RelationSchema = new Schema(
  {
    MentorID: {
      type: String,
    },
    MenteeID: {
      type: String,
    },
    skillID: {
        type: String
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    active: {
        type: String
    }
  },
  {
    collection: "table-relation",
  }
);

module.exports = mongoose.model("relation", RelationSchema);
