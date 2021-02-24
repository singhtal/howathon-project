const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const registrationRoutes = require('./route');
const mentorRoutes = require('./mentorRoute');
const SkillUpdateRoutes = require('./routes/skillUpdateRoute');
const SkillsRoutes = require('./routes/skillRoute');
const relationRoutes = require('./relationRoute');
const ratingRoutes = require('./ratingRoute');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/registration", registrationRoutes);
app.use("/relation", relationRoutes);
app.use("/mentor", mentorRoutes);
app.use("/updateskill", SkillUpdateRoutes);
app.use("/skills", SkillsRoutes);
app.use("/rating", ratingRoutes);

module.exports = app