const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    require: true
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
  dateCreated: {
    type: Date,
    default: Date.now
  },
  profilePicture: {
    data: Buffer,
    contentType: String
  }
});

module.exports = User = mongoose.model('users', UserSchema);
