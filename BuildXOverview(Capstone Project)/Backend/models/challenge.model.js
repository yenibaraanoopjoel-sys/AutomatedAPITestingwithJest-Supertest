const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  reward: { type: String }, // e.g., "50 XP" or "$10"
  participants: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    score: { type: Number, default: 0 },
    submitted: { type: Boolean, default: false }
  }]
}, { timestamps: true });

module.exports = mongoose.model("Challenge", challengeSchema);
