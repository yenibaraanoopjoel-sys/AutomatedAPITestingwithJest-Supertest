const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    default: ""
  },
  profilePicture: {
    type: String,
    default: ""
  },
  skillsKnown: {
    type: [String],
    default: []
  },
  skillsToLearn: {
    type: [String],
    default: []
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  walletBalance: {
    type: Number,
    default: 0
  },
  githubLinked: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
