const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    body: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        require: true
    }
});

module.exports = Message = mongoose.model("messages", MessageSchema);
