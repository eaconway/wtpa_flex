const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    party: {
        type: Schema.Types.ObjectId,
        ref: "parties"
    },
    body: {
        type: String,
        required: true 
    },
    dateCreated: {
        type: Date,
        require: true
    }
});

module.exports = Message = mongoose.model("messages", MessageSchema);
