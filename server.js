const express = require("express");
const handlebars = require("express-handlebars");
const burgersController = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 8080;

var app = express();

// app config
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars init
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes
app.use(burgersController);

// go
app.listen(PORT);
