const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  skills: [String],
  karma: { type: Number, default: 0 }
});

module.exports = mongoose.model("User", userSchema);
