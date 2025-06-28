const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
  task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
  requester: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["pending", "accepted", "completed"], default: "pending" },
  karmaGiven: { type: Boolean, default: false }
});

module.exports = mongoose.model("Trade", tradeSchema);
