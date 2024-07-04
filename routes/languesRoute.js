const express = require("express");
const router = express.Router();
const languesModel = require("../models/languesModel");

router.get("/langues", async (req, res) => {
  const langues = await languesModel.find();
  res.json(langues);
});
router.post("/langues", async (req, res) => {
  const langues = req.body;
  console.log(langues);
  await languesModel.create(langues);
  res.json({ message: `la langue${langues.name}a été ajouté` });
});
router.delete("/langues/:id", async (req, res) => {
  const { id } = req.params;
  await languesModel.findByIdAndDelete(id);
  res.json({ message: `la langue a été supprimée` });
});

module.exports = router;
