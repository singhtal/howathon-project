const express = require('express');
const RatingRoutes = express.Router();
// let Relation = require('./schema/relation');
let ratings = require("./schema/rating");
let RouteNames = require("./constants/constants");
const config = require('./DB.js');


//NOTE  Registration route
// Get allData
// RatingRoutes.route("/getRatings").get(function(req, res) {
//     let q =  ratings.find({ MentorID: req.query.name, SkillID: req.query.skillID });
//     q.exec(function(err, property) {
//         if (err) res.send(err);
//         res.json(property);
//     });
// });

module.exports = RatingRoutes;