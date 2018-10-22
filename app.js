const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const parties = require("./routes/api/parties");

const passport = require("passport");
require("./config/passport")(passport);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongoose
//   .connect(db)
//   .then(() => console.log("Connected to MongoDB successfully"))
//   .catch(err => console.log(err));

// app.use((req,res) => {
//     debugger
// });

app.use(passport.initialize());

app.get("/", (req, res) => res.send("Hello World"));
app.get("/test", (req, res) => res.send("test page"));

app.use("/api/users", users);
app.use("/api/parties", parties);

app.listen(3000, () => console.log("ready"));
