const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const obj = { id: req.params.id };
  res.json(obj);
});

module.exports = router;
