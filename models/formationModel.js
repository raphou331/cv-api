const mongoose = require("mongoose");
const formationShema = mongoose.Schema({
  annees: String,
  diplome: String,
  etablissement: String,
});

const formation = mongoose.model("Formation", formationShema);
module.exports = formation;
