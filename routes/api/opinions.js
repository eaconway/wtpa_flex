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
      author: req.body.author,
      party: req.body.party
    });
    
    newOpinion.save().then(opinion => res.json(opinion));
}
);

router.delete("/:id", (req, res) => {
    Opinion.findById(req.params.id)
        .then(opinion => {
            opinion.remove();
            res.status(200).json({ successDelete: "Successfully removed opinion" });
        })
        .catch(err =>
            res.status(404).json({ noopinionfound: "No opinion found with that ID" })
        );
});

router.get("/party/:partyId", (req, res) => {
    console.log('inside opinion party route', req.params.partyId);
    Opinion.find({ party: req.params.partyId })
        .then(opinions => {
            if (opinions.length === 0) {
                return "nothing was found";
            }
            let countFeels = {};
            let countRatings = [];
            let countMusic = {};
            console.log('opinions' ,opinions);
            
            // console.log(countFeels['hype']);
            // let avg = 0;
            opinions.forEach(opinion => {
                countRatings.push(opinion.rating);
                // Count instances of party description
                if (countFeels[opinion.feeling] === undefined) {
                    countFeels[opinion.feeling] = 1;
                } else {
                    countFeels[opinion.feeling] = countFeels[opinion.feeling] + 1;
                }

                if (countMusic[opinion.music] === undefined) {
                    countMusic[opinion.music] = 1;
                } else {
                    countMusic[opinion.music] = countMusic[opinion.music] + 1;
                }
            })

            // avg = Math.ceil((avg) / ratings.length);
            // console.log(avg)
            // res.json(avg);

            //get average rating
            // let avgRating = countRatings.reduce((acc, el) => acc += el)/countRatings.length;



            let upVotes = countRatings.filter(el => el > 0)
            let downVotes = countRatings.filter(el => el < 0)
            let upvotePercentage = 0;
            let downvotePercentage = 0;
            if (upVotes.length > 0 && downVotes.length > 0) {
                let totalVotes = upVotes.reduce((acc, el) => (acc += el)) + (downVotes.reduce((acc, el) => (acc += el)) * -1);
                upvotePercentage = (upVotes / totalVotes) * 100; 
                downvotePercentage = ((-1 * downVotes) / totalVotes) * 100; 
            } else if (upVotes.length > 0) {
                upvotePercentage = 100;
                downvotePercentage = 0;
            } else if (downVotes.length > 0) {
                upvotePercentage = 0;
                downvotePercentage = 100;                
            }
            // console.log(upvotePercentage);
            // console.log(downvotePercentage);

            let highestVal = 0;
            let feelKey = '';
            Object.keys(countFeels).forEach(key => {
                if (countFeels[key] > highestVal){
                    highestVal = countFeels[key];
                    feelKey = key;
                }
            });

            highestVal = 0;
            let musicKey = '';
            Object.keys(countMusic).forEach(key => {
                if (countMusic[key] > highestVal) {
                    highestVal = countMusic[key];
                    musicKey = key;
                }
            });

            res.send({
              upvotePercentage,
              downvotePercentage,
              feelKey,
              musicKey,
              countRatings
            });
        })
        .catch(err =>
            res.status(404).json({ noratingfound: "No rating found with that ID" })
        );
});

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
