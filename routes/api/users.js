<<<<<<< HEAD
const express = require("express");
const router = express.Router();

// why is it only "/test"? Because "api/users" was included in the entery/server js file seen below
// const users = require( './routes/api/users');
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
=======
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
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { id: user.id, name: user.name };

                            jsonwebtoken.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
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

    const name = req.body.name;
    const password = req.body.password;

    User.findOne({ name }).then(user => {
        if (!user) {
            errors.name = "This user does not exist";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id, name: user.name };

                jsonwebtoken.sign(payload, keys.secretOrKeys, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
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
        email: req.user.email
    });
})

module.exports = router;
>>>>>>> bd31ae11c62aaa6a243cfbeca8836c49919f9261
