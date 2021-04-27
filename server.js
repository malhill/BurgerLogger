const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const router = require("./controllers/burgers_controller.js");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", router);

app.listen(PORT, () => {
  console.log("App now listening at localhost:" + PORT);
});