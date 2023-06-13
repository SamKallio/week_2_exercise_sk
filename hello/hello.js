const express = require("express");
const router = express.Router();

const hello = {
  msg: "Hello world",
};

router.get("/", (req, res) => {
  res.json(hello);
});

module.exports = router;
