const express = require('express');
// const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const users = require('./routes/api/users');
const parties = require("./routes/api/parties");
const ratings = require("./routes/api/ratings");
const messages = require("./routes/api/messages");

const passport = require("passport");
require("./config/passport")(passport);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose 
.connect(db)
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// app.use((req,res) => {
//     debugger
// });

app.use(passport.initialize());

app.get('/', (req, res) => res.send("backend server"));
// app.get('/test', (req, res) => res.send("test page") );

app.use('/api/users', users);
app.use("/api/parties", parties);
app.use("/api/ratings", ratings);
// app.use("/api/messages", messages);

app.listen(5000, () => console.log('ready'));
