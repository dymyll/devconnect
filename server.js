//Create variables that will call other requirements for the app
const express = require("express");
const mongoose = require("mongoose");

//pass urls to the api routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//app using express
const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB through mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  //If there is an issue with Authentication in Mongo
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello!"));

//Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//creates a port for Heroku or for local port which is 5000
const port = process.env.PORT || 5000;

//looks for the variable port to see what it is currently running on
app.listen(port, () => console.log(`Server running on port ${port}`));
