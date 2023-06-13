const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  let { numbers } = req.body;

  let sum = numbers.reduce((acc, curVal) => acc + curVal, 0);

  console.log(sum);

  res.send({ sum });
});

module.exports = router;
