const express = require("express");
const burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {

});

router.get("/assets/:type/:file", function(req, res) {

});

router.post("/api/burgers", function(req, res) {

});

router.put("/api/bugers/:id", function(req, res) {

});

module.exports = router;
