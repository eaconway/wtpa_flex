const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require("passport");

const validateRegisterInput = require("../../validations/register");
const validateLoginInput = require("../../validations/login");

router.get('/test', (req, res) => res.send('users routes'));

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ name: req.body.name }).then(user => {
        if (user) {
            errors.name = "User already exists";
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                thingsilove: req.body.thingsilove,
                location: req.body.location,
                bio: req.body.bio,
                social: {
                    facebook: req.body.facebook,
                    twitter: req.body.twitter,
                    instagram: req.body.instagram,
                    linkedin: req.body.linkedin,
                    youtube: req.body.youtube
                },
                dateCreated: Date.now()
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { id: user.id, name: user.name, email: user.email };

                            jsonwebtoken.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token,
                                    payload
                                });
                            });
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});


router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            errors.email = "This user does not exist";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id, email: user.email, name: user.name };

                jsonwebtoken.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    console.log(token);
                    res.json({
                        success: true,
                        token: "Bearer " + token,
                        payload
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});

router.get('/current', passport.authenticate('jsonwebtoken', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        phone: req.body.phone,
        thingsilove: req.body.thingsilove,
        location: req.body.location,
        bio: req.body.bio,
        social: {
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            instagram: req.body.instagram,
            linkedin: req.body.linkedin,
            youtube: req.body.youtube
        }
    });
})

router.get("/", (req, res) => {
    User.find()
        .then(users => {
            let results = {};
            users.forEach(user => {
                results[user.id] = user
            });
            res.json(results);
        })
        .catch(err => res.status(404).json({ nousersfound: "No users found" }));
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with that ID" })
    );
});

router.patch("/:id", (req, res) => {
    console.log(req.body);
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(user => res.json(user))
        .catch(err =>
            res.status(404).json({ nouserfound: "No user found with that ID" })
        );
});

router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findOneAndRemove({ id: req.user.id })
      .then(() => {
        User.findOneAndRemove({ _id: req.user.id })
          .then(() => res.json({ success: true }));
      })
  });

module.exports = router;