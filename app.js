const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/products' method='POST'><input type='text' name='i1'><button type='submit'>submit</button></form>"
  );
});
app.post("/products", (req, res) => {
  const data = req.body;
  console.log(data);
});
app.use("/", (req, res, next) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(3000);
