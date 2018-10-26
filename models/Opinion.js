const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-double")(mongoose);

const OpinionSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  party: {
    type: Schema.Types.ObjectId,
    ref: "parties"
  },
  rating: {
    type: Number
  },
  feeling: {
    type: String
  },
  music: {
    type: String
  }
});

module.exports = Opinion = mongoose.model("option", OpinionSchema);
