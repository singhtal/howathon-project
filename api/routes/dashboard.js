const express = require("express");
const dashboardRoutes = express.Router();
let RelationSchema = require("../schema/relation");
let UserSchema = require("../schema/User");
let SkillUpdateSchema = require("../schema/updateSkill");
let skillSchema = require("../schema/skill");

//NOTE  Skills route
dashboardRoutes.get("/mentor", async (req, res) => {
  try {
    const mentors = await RelationSchema.find({ MenteeID: req.query.id });
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//NOTE  Skills route
dashboardRoutes.get("/mentee", async (req, res) => {
  console.log(req.query.id);
  try {
    const mentors = await RelationSchema.find({ MentorID: req.query.id });
    console.log(mentors);
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//NOTE  Skills route
dashboardRoutes.get("/profile", (req, res) => {
  console.log(req.query.id);
  let profile = {};
  UserSchema.findOne({ user_name: req.query.id }, function(err, user) {
    if (err) {
      res.status(400).json({ message: "There is some error" });
    } else {
      profile.firstName = user.first_name;
      profile.lastName = user.last_name;
      SkillUpdateSchema.find(
        { username: req.query.id }, (err, skills) => {
          if (err) {
            res.status(400).json({ message: "There is some error" });
          } else {
            profile.skills = skills;
            profile.skills.map(async (skill,i) => {              
              const skillName = await skillSchema.findOne({ _id: skill.skills })

              if(skillName)
                profile.skills[i].skills = skillName.name;

              console.log(profile.skills,'new')
            });
            res.json(profile);
          }
        }
      );
    }
  });
});

module.exports = dashboardRoutes;
