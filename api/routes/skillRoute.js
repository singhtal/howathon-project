const express = require("express");
const SkillUpdateRoutes = express.Router();
let skillSchema = require("../schema/skill");

//NOTE  Skills route
SkillUpdateRoutes.get("/", async (req, res) => {
    try {
        const skills = await skillSchema.find()
        console.log(skills);
        res.json(skills)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
});

module.exports = SkillUpdateRoutes;
