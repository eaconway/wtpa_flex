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

const Message = require("./models/Message");
const User = require("./models/User");

//SOCKET.IO SETUP
const app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

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

app.use(passport.initialize());


app.get('/', (req, res) => res.send("backend server"));

app.use('/api/users', users);
app.use("/api/parties", parties);
app.use("/api/ratings", ratings);
app.use("/api/messages", messages);

// SOCKET.IO SETUP
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // socket.on('chat message', function (msg) {
    //     io.emit('chat message', msg);
    // });

    socket.on("seed chat", (partyId) => {
        Message.find({ party: partyId })
            .populate('user')
            .limit(20)
            .then(messages => {
                let results = [];
                // console.log('these are the results');

                messages.forEach(message => {
                    // console.log(`uploading message ${message.user}`);
                    // console.log(results);
                    if (message.user === undefined || message.user === null) {
                        results.push({
                          msg: message.body,
                          name: "Anonymous"
                        });
                    } else {
                        results.push({
                            msg: message.body,
                            name: message.user.name
                        });
                    }
                });
                
                io.emit("seed chat", results);
            })
            .catch(err => {
                // res.status(404).json({ nomessagefound: "No rating found with that ID" })
                io.emit("seed chat", []);
            });

        // io.emit("seed chat", messages);
    });

    socket.on("chat message", payload => {
        // const { errors, isValid } = validateMessageInput(payload);
        let isValid = true;

        if (!isValid) {
            console.log('Couldn\'t save message');
            console.log(errors);
        } else {
            const newMessage = new Message({
                body: payload.body,
                party: payload.partyId,
                user: payload.userId
            });
            
            newMessage.save();
            let name = '';
            if (newMessage.user === null) {
                name = 'Anonymous'
            } else {
                name = User.find({ _id: newMessage.user }).name;
            }

            io.emit("chat message", { msg: newMessage.body, name: name});
        }
    
    });
    
});

http.listen(5000, function () {
    console.log('listening on *:3000');
});


// SERVER LISTENING
// app.listen(5000, () => console.log('ready'));
