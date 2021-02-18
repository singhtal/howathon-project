const express = require('express');
const MentorRoutes = express.Router();
const bcrypt = require('bcryptjs');
let Mentor = require('./schema/mentor');
let RouteNames = require("./constants/constants");

//NOTE  Registration route
// Get allData
MentorRoutes.route(RouteNames.data).get(function(req, res) {
    Mentor.find((err, data) => err ? res.status(400).send("Error occured") : res.json(data));
});

module.exports = MentorRoutes;