const express = require("express");
const router = express.Router();
const competenceModel = require("../models/competenceModel");

router.get("/competence", async (req, res) => {
  const competences = await competenceModel.find();
  res.json(competences);
});

router.post("/competence", async (req, res) => {
  const competence = req.body;
  console.log(competence);
  const newCompetence = await competenceModel.create(competence);
  res.json(newCompetence);
});

router.delete("/competence/:id", async (req, res) => {
  const { id } = req.params;
  /*  const competence = await competenceModel.findById(id); */

  await competenceModel.findByIdAndDelete(id);
  res.json({ message: `la competence a été suupprimée` });
});
module.exports = router;
