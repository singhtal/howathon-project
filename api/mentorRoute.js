const express = require('express');
const MentorRoutes = express.Router();
let mentorskill = require("./schema/updateSkill");
const bcrypt = require('bcryptjs');
let Mentor = require('./schema/mentor');
let Relation = require('./schema/relation');
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
    console.log('hi')
    let name = req.query.name;
    let skill = req.query.skill;

    var query = {username: name, skills: skill};
    mentorskill.deleteOne(query,function(err, result) {
        if (err) console.log(err);
        let query2 = {MentorID: name, skillID: skill};
        Relation.deleteOne(query2, function(err1,result1) {
        if (err1) res.send(err1);
        console.log(result1);
            res.status(200).send('success');
         })
    });

});

    // Mentor.update(
    //     {'username': name},
    //     {$pull:{"skills":{"skillname":skill}}},
    //     {new:true},
    //     function (err, result) {
    //         if (err) throw err;
    //         res.status(200).send('success')
    //     });

module.exports = MentorRoutes;