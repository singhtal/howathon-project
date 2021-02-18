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

MentorRoutes.route(RouteNames.mydata).get(function(req, res) {
    var ok = Mentor.findOne({ username: req.query.name });

       let q =  Mentor.find({ username: req.query.name }).limit(1);

        q.exec(function(err, property) {
            if (err) res.send(err);
            res.json(property);
        });

        //.then(user => user ? res.sendStatus(204) : res.sendStatus(200))
});

module.exports = MentorRoutes;