const path = require("path");
const adminData = require("./routes/admin");
const bodyParser = require("body-parser");
const express = require("express");
const shopRoutes = require("./routes/shop");
const { engine } = require("express-handlebars");
const app = express();

app.engine(
  "hbs",
  engine({
    layoutsDir: "views/layout",
    defaultLayout: "main-layout",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res) => {
  res.render("404", { pageTitle: "not found" });
});

app.listen(3000);
