const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Party = require("../../models/Party");
const validatePartyInput = require("../../validations/parties");

router.get("/", (req, res) => {
  Party.find()
    .sort({ date: -1 })
    .then(parties => res.json(parties))
    .catch(err => res.status(404).json({ nopartiesfound: "No parties found" }));
});

router.get("/:id", (req, res) => {
  Party.findById(req.params.id)
    .then(party => res.json(party))
    .catch(err =>
      res.status(404).json({ nopartyfound: "No party found with that ID" })
    );
});

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { errors, isValid } = validatePartyInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newParty = new Party({
      title: req.body.title,
      address: req.body.address,
      partyType: req.body.partyType,
      musicType: req.body.musicType,
      feel: req.body.feel,
      dress: req.body.dress,
      orientation: req.body.orientation,
      date: req.body.date,
      user: req.user.id
    });

    newParty.save().then(party => res.json(party));
  }
);

module.exports = router;
