const http = require("http");
const adminRoutes = require("./routes/admin");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000);
