const express = require('express');
const MentorRoutes = express.Router();
let mentorskill = require("./schema/updateSkill");
let skillCollection = require("./schema/skill");
const bcrypt = require('bcryptjs');
let Mentor = require('./schema/mentor');
let Relation = require('./schema/relation');
let RouteNames = require("./constants/constants");
let ratings = require("./schema/rating");
let Courses = require('./schema/courses');

//NOTE  Registration route
// Get allData

MentorRoutes.route(RouteNames.getSkill).get(function(req, res) {
    skillCollection.find({name: {$regex: req.query.data, '$options' : 'i'}}, (err, data) => { 
        if(err) { res.status(400).send("Error occured") }
        let response = data.map(item => {
            return item['_id']
        });
        var fullData = [];
        var dataWithRating = [];

        mentorskill.find({ skills: { $in: response }}, (err1, data1) => {
            if(err1) { res.status(400).send("Error occured") }
            //res.json(data1);
            let count = 0;
            // data1.foreach(element => { 
                for(i=0; i<data1.length;i++){
                   var element = data1[i];
                    (function defined_plus_call(element) {
                    let q =  ratings.find({ MentorID: element.username,  SkillID: element.skills }, {Rating: 1} );
                    q.exec(function(err1, property) {
                        
                        if(err1) {console.log(err1)}
                        sum = 0;
                        const ratingss = property.map(itm => itm.Rating);
                         averageRating = ratingss.reduce(function (avg, value, _, { length }) {
                            return avg + value / length;
                        }, 0);
                        var item = {};
                        item = element.toObject();
                        item['avgRating'] =  averageRating;
                        dataWithRating.push(item);
                        // console.log('inside', count, data1.length-1);
                        if(count == data1.length-1) {
                            console.log('*************************');
                                                        // console.log(fullData);
                            /* get courses */

                            Courses.find({ 'skillId' : "60336bb21b394166402ea00f" }, function(err, results) {
                                if (err) console.log(err);
                                dataWithRating.push(results);
                                res.send(dataWithRating);
                            });

                            /* get courses ends */
                            // res.send(dataWithRating);
                        }
                        count++;   
                    });

                    }(element));

            }

            // dataWithRating[dataWithRating.length-1]
            // .then((ress) => { console.log(ress); return ress; })
        });

    });
});

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

    var query = {username: name, skills: skill};
    mentorskill.deleteOne(query,function(err, result) {
        if (err) console.log(err);
        let query2 = {MentorID: name, skillID: skill};
        Relation.deleteOne(query2, function(err1,result1) {
        if (err1) res.send(err1);
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