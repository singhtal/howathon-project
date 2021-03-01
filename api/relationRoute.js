const express = require('express');
const RelationRoutes = express.Router();
let Relation = require('./schema/relation');
let skills = require("./schema/skill");
let RouteNames = require("./constants/constants");
const config = require('./DB.js');
let ratings = require("./schema/rating");


//NOTE  Registration route
// Get allData
RelationRoutes.route(RouteNames.mydata).get(function(req, res) {

    // Relation.find((err, data) => err ? res.status(400).send("Error occured") : res.json(data));

    // Relation.aggregate([
    //     { "$match": { "MentorID": "tal01" } },
    //     { "$unwind": "$tal.skills" },
    //     {
    //         "$lookup": {
    //             "from": "skills",
    //             "localField": "id",
    //             "foreignField": "skillID",
    //             "as": "kuchbhi"
    //         }
    //     }
    // ]).exec(function(err, results){
    //     console.log(results);
    // })
    let name =  req.query.name;
    Relation.aggregate([{
        $match: {
        "MentorID": name //can change match parameters
        }
    }, {
        $group: {
        _id: "$skillID",
        fields: {
            $push: "$$ROOT"
        }
       }
    }
    ]).exec(function(err, results){
            if(err) {
                 res.status(400).send("Error occured")
             }
             var count1 = 0;
             let matrix = [];

            //  for(var i=0; i<results.length; i++){
            //      element = results[i];
             results.map((element, ind) => {
                // RelationRoutes.route("/getRatings").get(function(req, res) {
                var myitem = element['fields'].map(async (item, index) => {      
                    let q =  ratings.find({ MentorID: item['MentorID'], MenteeID: item['MenteeID'], SkillID: item['skillID'] }, {Rating: 1} );
                    await  q.exec(function(err1, property) {
                        item['rating'] = property[0] ? property[0]['Rating']: null;
                        
                        (function defined_plus_call(item) {
                         skills.find({_id: item.skillID}).exec(function(err2, prop2) {
                            if(err2) console.log(err2);
                            item['skillName'] = prop2[0] ? prop2[0]['name']: null;
                            //item['skillName'] = prop2[0].name; 
                         })
                         }(item));

                        matrix[ind] = [];
                        matrix[ind][index] = item;
                        if((ind == results.length - 1) && (index == element['fields'].length - 1)) {
                            setTimeout(function () {
                                res.json(results);
                            }, 2000);
                        }
                        return item;
                    });
                });
              });
        })
    });


RelationRoutes.route(RouteNames.requestMentor).get(function(req, res) {


  var myobj = { 
        MentorID: req.query.mentor, 
        MenteeID: req.query.mentee,
        skillID: req.query.skillCode,
        searchText: req.query.skillName,
        status: "pending",
        data: null
      };

  Relation.create(myobj, function(err, res) {
    if (err) throw err;
  });    
    // res.status(200).send(
    //     'hello'
    // )
});

RelationRoutes.route(RouteNames.updateRequest).get(function(req, res) {
    Relation.update(
    { 'MentorID' : req.query.mentor, 'MenteeID': req.query.mentee, 'skillID': req.query.skillCode }, 
    { $set: { 'status': req.query.status } },
    function (err, result) {
        if (err) throw err;
        res.send(200);
    })
});
module.exports = RelationRoutes;