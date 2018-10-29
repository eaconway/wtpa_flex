const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-double")(mongoose);

const OpinionSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  party: {
    type: Schema.Types.ObjectId,
    ref: "parties",
    required: true
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
OpinionSchema.index({ author: 1, party: 1 }, { unique: true });

module.exports = Opinion = mongoose.model("option", OpinionSchema);
