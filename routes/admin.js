const express = require("express");
const router = express.Router();
router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/products' method='POST'><input type='text' name='i1'><button type='submit'>submit</button></form>"
  );
});
router.post("/products", (req, res) => {
  const data = req.body;
  console.log(data);
});
module.exports = router;
