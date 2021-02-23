const express = require('express');
const RelationRoutes = express.Router();
let Relation = require('./schema/relation');
let skills = require("./schema/skill");
let RouteNames = require("./constants/constants");
const config = require('./DB.js');


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
            err ? res.status(400).send("Error occured") : res.json(results)
        })
    });

module.exports = RelationRoutes;