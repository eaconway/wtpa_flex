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
    address: {
        type: String,
        required: true
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
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Party = mongoose.model("parties", PartySchema);
