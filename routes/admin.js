const express = require("express");
const path = require("path");
const router = express.Router();
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});
router.post("/products", (req, res) => {
  const data = req.body;
  console.log(data);
  res.redirect("/");
});
module.exports = router;
