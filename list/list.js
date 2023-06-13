const express = require("express");
const router = express.Router();

var v = {
  list: [],
};

router.use(express.text());

router.post("/", (req, res) => {
  v.list.push(req.body.text);
  console.log(v);
  res.send(v);
});

router.get("/", (req, res) => {
  console.log(v);
  res.json(v);
});

module.exports = router;
