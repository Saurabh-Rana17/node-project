const express = require("express");
const path = require("path");
const router = express.Router();
const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product ",
    path: "/admin/add-product",
  });
});
router.post("/add-product", (req, res) => {
  const data = {
    title: req.body.title,
  };
  products.push(data);
  // console.log(products);
  res.redirect("/");
});
exports.routes = router;
exports.products = products;
