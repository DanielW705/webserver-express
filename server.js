const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8080;
require("./hbs/helper/helpers");
app.use(express.static(__dirname + "/public"));
// Express HBS engine
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Daniel",
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.listen(port);
