const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const registrationRoutes = require('./route');
const mentorRoutes = require('./mentorRoute');
const SkillUpdateRoutes = require('./routes/skillUpdateRoute');
const SkillsRoutes = require('./routes/skillRoute');
const relationRoutes = require('./relationRoute');
const ratingRoutes = require('./ratingRoute');
const dashboardRoutes = require('./routes/dashboard');


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
app.use("/dashboard", dashboardRoutes);

// if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('../build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build','index.html'));
  });
// }

module.exports = app