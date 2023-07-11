const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  role: Number,
});

const user = mongoose.model("users", userSchema);
module.exports = user;
