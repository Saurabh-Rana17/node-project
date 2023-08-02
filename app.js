const http = require("http");
const adminRoutes = require("./routes/admin");
const bodyParser = require("body-parser");
const express = require("express");
const shopRoutes = require("./routes/shop");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  res.sendFile(__dirname + "/views/pg404.html");
});

app.listen(3000);
