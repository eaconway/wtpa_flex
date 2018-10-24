const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-double")(mongoose);

const RatingSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  party: {
    type: Schema.Types.ObjectId,
    ref: "parties"
  },
  rating: {
    type: Number,
    required: true
  }
});

module.exports = Rating = mongoose.model("ratings", RatingSchema);
