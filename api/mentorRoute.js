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
    let q =  Mentor.find({ username: req.query.name }).limit(1);
    q.exec(function(err, property) {
        if (err) res.send(err);
        res.json(property);
    });
});

MentorRoutes.route(RouteNames.unregister).get(function(req, res) {
    //res.send('helli');
    let name = req.query.name;
    let skill = req.query.skill;

    Mentor.update(
        {'username': name},
        {$pull:{"skills":{"skillname":skill}}},
        {new:true},
        function (err, result) {
            if (err) throw err;
            res.status(200).send('success')
        });
});

module.exports = MentorRoutes;