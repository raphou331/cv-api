const mongoose = require("mongoose");
const languesShema = new mongoose.Schema({
  name: String,
  img: String,
  level: String,
});
const Langues = mongoose.model("Langue", languesShema);
module.exports = Langues;
