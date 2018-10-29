const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zipcode: {
    type: Number
  },
  partyType: {
    type: String
  },
  musicType: {
    type: String
  },
  feel: {
    type: String
  },
  dress: {
    type: String
  },
  orientation: {
    type: String
  },
  description: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  eventDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Party = mongoose.model("parties", PartySchema);
