const mongoose = require("mongoose");
const loisirsShema = mongoose.Schema({
  skill: String,
});

const loisirs = mongoose.model("loisirs", loisirsShema);
module.exports = loisirs;
