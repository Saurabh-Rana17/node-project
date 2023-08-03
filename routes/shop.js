const path = require("path");
const express = require("express");
const router = express.Router();
const adminData = require("./admin");
router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    docTitle: "shop",
    pageTitle: "shop",
    prods: products,
    path: "/",
  });
});

module.exports = router;
