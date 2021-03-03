const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SECTION  collection and schema for Registration
let coursesSchema = new Schema(
  {
    name: {
      type: String,
    },
    url: {
      type: String,
    },
    rating: {
        type: String
    },
    skillID: {
        type: String
    }
  },
  {
    collection: "courses",
  }
);

module.exports = mongoose.model("courses", coursesSchema);
