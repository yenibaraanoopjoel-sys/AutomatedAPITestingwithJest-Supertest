const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending"
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  requiredSkills: {
    type: [String],
    default: []
  },
  collaborationPreferences: {
    type: String,
    default: ""
  },
  members: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    role: {
      type: String,
      default: "contributor"
    }
  }],
  githubRepo: {
    type: String,
    default: ""
  },
  tasks: [{
    title: String,
    description: String,
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Done"],
      default: "To Do"
    }
  }],
  contributions: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    description: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  earnings: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    amount: Number
  }]
},
{ timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
