const path = require("path");
// const adminRoutes = require("./routes/admin");
const bodyParser = require("body-parser");
const express = require("express");
// const shopRoutes = require('./routes/shop');
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  res.render("404", { pageTitle: "not found", path: "" });
});

app.listen(3000);
