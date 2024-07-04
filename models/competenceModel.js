const mongoose = require("mongoose");
const competenceShema = mongoose.Schema({
  skill: String,
  img: String,
});

const Competence = mongoose.model("Competence", competenceShema);
module.exports = Competence;
