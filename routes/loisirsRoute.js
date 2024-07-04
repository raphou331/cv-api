const express = require("express");
const router = express.Router();
const loisirsModel = require("../models/loisirsModel");

router.get("/loisirs", async (req, res) => {
  const loisirs = await loisirsModel.find();
  res.json(loisirs);
});
router.post("/loisirs", async (req, res) => {
  const loisirs = req.body;
  await loisirsModel.create(loisirs);
  res.json({ message: `un loisir${loisirs.skill}a été ajouté` });
});
router.delete("/loisirs/:id", async (req, res) => {
  const { id } = req.params;
  await loisirsModel.findByIdAndDelete(id);
  res.json({ message: `un loisir a été supprimée` });
});

module.exports = router;
