const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["deposit", "withdrawal", "earning"], required: true },
  status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" }, // If earned from project
  paymentMethod: { type: String } // e.g., PayPal, UPI
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);
