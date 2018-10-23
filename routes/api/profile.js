const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const User = require('../../models/User');
const Profile = require("../../models/Profile");
const validateProfileInput = require("../../validations/profiles");

// @route   GET profile
// @desc    Get current users profile
// @access  Private
router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.user.id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET profile/all
// @desc    Get all profiles
// @access  Public
router.get("/all", (req, res) => {
  const errors = {};

  Profile.find()
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors);
      }
      res.json(profiles);
    })
    .catch(err =>
      res.status(404).json({ profile: "There are no profiles" })
    );
});

// @route   GET profile/:profile_id
// @desc    Get profile by user ID
// @access  Public
router.post("/:profile_id", (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.params.user_id })
      .populate('user', ['name', 'avatar'])
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json({ profile: 'There is no profile for this user' }));
  }
);

// @route   POST profile
// @desc    Create user profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);

  // Check Validation
  if (!isValid) {
    // Return any errors with 404 status
    return res.status(400).json(errors);
  }

  // Get fields
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.thingsilove) profileFields.thingsilove = req.body.thingsilove;
  if (req.body.location) profileFields.location = req.body.location;
  if (req.body.bio) profileFields.bio = req.body.bio;
  if (req.body.phonenumber) profileFields.phonenumber = req.body.phonenumber;

  // Social
  profileFields.social = {};
  if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
  if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
  if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

  Profile.findOne({ user: req.user.id })
    .then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true })
          .then(profile => res.json(profile));
      } else {
        new Profile(profileFields).save().then(profile => res.json(profile));
      }
    });
});

// @route   DELETE profile
// @desc    Delete user and profile
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOneAndRemove({ user: req.user.id })
    .then(() => {
      User.findByIdAndRemove({ _id: req.user.id })
        .then(() => res.json({ success: true }));
    })
});

module.exports = router;
