const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product ",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res) => {
  let product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchall();
  res.render("shop", {
    pageTitle: "shop",
    path: "/",
    prods: products,
    hasProducts: products.length > 0,
    activeShop: true,
    produuctCSS: true,
  });
};
