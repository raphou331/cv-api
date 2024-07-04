const mongoose = require("mongoose");
const contactShema = mongoose.Schema({
  nom: { type: String },
  prenom: { type: String },
  email: { type: String },
  tel: { type: String },
  adresse: { type: String },
});

const Contact = mongoose.model("Contact", contactShema);
module.exports = Contact;
