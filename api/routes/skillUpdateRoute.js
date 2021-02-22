const express = require("express");
const SkillUpdateRoutes = express.Router();
let mentorskill = require("../schema/updateSkill");
let skillSchema = require("../schema/skill");

//NOTE  Skills route
SkillUpdateRoutes.post("/", (req, res) => {
  //find skill s
  skillSchema.findOne({ name: req.body.skills }).then((skill) => {
    if (!skill) {
      const newSkill = new skillSchema({ name: req.body.skills });
      //skill added if not present
      newSkill.save((err, addedskill) => {
        req.body.skills = addedskill._id;
        const skillupdate = new mentorskill(req.body);
        try {
          const skillMentor = skillupdate.save();
          res.status(201).json(skillMentor);
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      });
    } else {
      req.body.skills = skill._id;
      const skillupdate = new mentorskill(req.body);
      try {
        const skillMentor = skillupdate.save();
        res.status(201).json(skillMentor);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  });
});

module.exports = SkillUpdateRoutes;
