const express = require("express");
const dashboardRoutes = express.Router();
let RelationSchema = require("../schema/relation");
let UserSchema = require("../schema/User");
let SkillUpdateSchema = require("../schema/updateSkill");
let skillSchema = require("../schema/skill");
let ratings = require("../schema/rating");


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
      console.log(err, "err userFound");
      res.status(400).json({ message: "There is some error" });
    } else {
      if (!user) {
        res.status(400).json({ message: "user is deleted or wrong entry" });
      } else {
        console.log(user, "userFound");
        profile.firstName = user.first_name;
        profile.lastName = user.last_name;
        SkillUpdateSchema.find(
          { username: req.query.id },
          async (err, skills) => {
            if (err) {
              console.log(err, "error skillFound");
              res.status(400).json({ message: "There is some error" });
            } else {
              profile.skills = skills;
              const skillsRefer = profile.skills.map(async (skill, i) => {
                const skillName = await skillSchema.findOne({_id: skill.skills});
                if (skillName) {
                  profile.skills[i].skills = skillName.name;
                }
                
              });

              await Promise.all(skillsRefer);
              res.json(profile);
            }
          }
        );
      }
    }
  });
});
module.exports = dashboardRoutes;
