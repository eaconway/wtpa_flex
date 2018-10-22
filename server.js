const express = require('express');
const mongoose = require('mongoose');
const app = express(); 

app.get('/', (req,res) => res.send('Hello'));

// Database Config, see config/key.js to see MongoURI 
const db = require('./config/keys').mongoURI; 

// connect to MongoDB
mongoose.connect(db).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// pushing to the port. process.env.port is for heroku push
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port: ${port}`));