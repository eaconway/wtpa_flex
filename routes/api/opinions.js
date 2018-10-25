const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const passport = require("passport");

const Opinion = require("../../models/Opinion");
const validateOpinionInput = require("../../validations/opinions");

router.get("/", (req, res) => {
    Opinion.find()
        .then(opinions => {
            let results = {};
            opinions.forEach(opinion => {
                results[opinion.id] = opinion
            });
            res.json(results);
        })
        .catch(err => res.status(404).json({ noopinionsfound: "No opinions found" }));
});

router.post("/", (req, res) => {
    // console.log(req.params)
    // const { errors, isValid } = validateRatingInput(req.body);

    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    const newOpinion = new Opinion({
      rating: req.body.rating,
      feeling: req.body.feeling,
      music: req.body.music,
      author: req.body.authorId,
      party: req.body.partyId
    });

    newOpinion.save().then(opinion => res.json(opinion));
}
);

// router.get("/:id", (req, res) => {
//     Rating.findById(req.params.id)
//         .then(rating => res.json(rating))
//         .catch(err =>
//             res.status(404).json({ noratingfound: "No rating found with that ID" })
//         );
// });

// NOT CURRENTLY UPDATING
// router.patch("/:id", (req, res) => {
//     console.log(req.body);
//     Rating.updateOne({ _id: req.params.id }, req.body)
//         .then(rating => {

//             console.log(rating);
//             res.json(rating);
//         })
//         .catch(err =>
//             res.status(404).json({ noratingfound: "No rating found with that ID" })
//         );
// });

// router.patch("/:id", (req, res) => {
//     console.log(req.body);
//     Party.findOneAndUpdate({ id: req.params.id }, req.body)
//         .then(party => res.json(party))
//         .catch(err =>
//             res.status(404).json({ nopartyfound: "No party found with that ID" })
//         );
// });

// router.delete("/:id", (req, res) => {
//     Rating.findById(req.params.id)
//         .then(rating => {
//             rating.remove();
//             res.status(200).json({ successDelete: "Successfully removed rating" });
//         })
//         .catch(err =>
//             res.status(404).json({ noratingfound: "No rating found with that ID" })
//         );
// });

// Get average ratings for 
// router.get("/party/:partyId", (req, res) => {
//     Rating.find({ party: req.params.partyId })
//         .then(ratings => {
//             let avg = 0;
//             ratings.forEach(rating => {
//                 avg += rating.rating
//             })
//             avg = Math.ceil((avg) / ratings.length);
//             console.log(avg)
//             res.json(avg);
//         })
//         .catch(err =>
//             res.status(404).json({ noratingfound: "No rating found with that ID" })
//         );
// });

module.exports = router;
