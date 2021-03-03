const express = require('express');
const coursesRoutes = express.Router();
let Courses = require('./schema/courses');
const config = require('./DB.js');

coursesRoutes.route("/getCourses").get(function(req, res) {
    // Courses.find({ 'skillId' : "60336bb21b394166402ea00f" }, function (err, result) {
    //     if (err) throw err;
    //     res.send(200);
    // })

    Courses.find({ 'skillId' : "60336bb21b394166402ea00f" }, function(err, results) {
     if (err) console.log(err);
     res.send(results);   
    });
});

module.exports = coursesRoutes;