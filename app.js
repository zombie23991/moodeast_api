const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routes/user.routes");
const MoodeastRoute = require('./routes/moodeast.router');
const app = express();

app.use(bodyParser.json())

 app.use("/",UserRoute);
 app.use("/",MoodeastRoute);

module.exports = app;
