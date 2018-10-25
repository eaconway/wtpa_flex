const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const passport = require("passport");

const Message = require("../../models/Message");
// const validatePartyInput = require("../../validations/parties");

router.get("/", (req, res) => {
    Message.find()
        .then(messages => {
            let results = {};
            messages.forEach(message => {
                results[message.id] = message
            });
            res.json(results);
        })
        .catch(err => res.status(404).json({ nomessagesfound: "No messages found" }));
});

router.get("/deleteAll" , (req,res) => {
    Message.deleteMany({ __v: 0})
})

module.exports = router;