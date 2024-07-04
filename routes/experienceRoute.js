const express = require("express");
const router = express.Router();
const experienceShema = require("../models/experienceModel");

router.get("/experience", async (req, res) => {
  const experience = await experienceShema.find();
  console.log(experience);
  res.json(experience);
});

router.post("/experience", async (req, res) => {
  const newExperience = req.body;
  await experienceShema.create(newExperience);
  res.json(newExperience);
});

router.delete("/experience/:id", async (req, res) => {
  const { id } = req.params;
  await experienceShema.findByIdAndDelete(id);
  res.json({ message: `l experience a été supprimée` });
});

module.exports = router;
