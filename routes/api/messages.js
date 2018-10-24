const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Party = require("../../models/Party");
const validatePartyInput = require("../../validations/parties");

router.get("/", (req, res) => {
    Party.find()
        .sort({ date: -1 })
        .then(parties => {
            let results = {};
            parties.forEach(party => {
                results[party.id] = party
            });
            res.json(results);
        })
        .catch(err => res.status(404).json({ nopartiesfound: "No parties found" }));
});