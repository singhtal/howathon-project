const express = require('express');
const ChatRoutes = express.Router();
const bcrypt = require('bcryptjs');
let Chat = require('./schema/Chat');
let RouteNames = require("./constants/constants");

//NOTE  Registration route
// Get allData
ChatRoutes.route(RouteNames.data).get(function(req, res) {
    Chat.find((err, data) => err ? res.status(400).send("Error occured") : res.json(data));
});

ChatRoutes.route(RouteNames.mydata).get(function(req, res) {
    let q =  Chat.find({ username: req.query.name }).limit(1);
    q.exec(function(err, property) {
        if (err) res.send(err);
        res.json(property);
    });
});

module.exports = ChatRoutes;