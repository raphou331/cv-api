const mongoose = require("mongoose");
const experienceShema = mongoose.Schema({
  name: String,
  lieu: String,
  date: String,
});

const experience = mongoose.model("experience", experienceShema);
module.exports = experience;
