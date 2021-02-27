const express = require("express");
const dashboardRoutes = express.Router();
let RelationSchema = require("../schema/relation");
let UserSchema = require("../schema/User");
let SkillSchema = require("../schema/skill");

//NOTE  Skills route
dashboardRoutes.get("/mentor", async (req, res) => {
    try {
        const mentors = await RelationSchema.find({ MenteeID: req.query.id })
        res.json(mentors)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
});

//NOTE  Skills route
dashboardRoutes.get("/mentee", async (req, res) => {
  console.log(req.query.id)
  try {
      const mentors = await RelationSchema.find({ MentorID: req.query.id })
      console.log(mentors);
      res.json(mentors)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
});

module.exports = dashboardRoutes;
