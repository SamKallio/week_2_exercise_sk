const express = require("express");
const router = express.Router();

const dog = {
  id: "dog",
};

router.get("/:id", (req, res) => {
  res.json(dog);
});

module.exports = router;
