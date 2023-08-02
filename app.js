const http = require("http");
const adminRoutes = require("./routes/admin");
const bodyParser = require("body-parser");
const express = require("express");
const shopRoutes = require("./routes/shop");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
