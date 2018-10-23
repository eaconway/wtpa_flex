const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  phonenumber: {
    type: Number
  },
  thingsilove: {
    type: String
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  social: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    instagram: {
      type: String
    },
    linkedin: {
      type: String
    },
    youtube: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);