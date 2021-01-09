const express = require("express");
const fs = require("fs");
const path = require("path");
const burger = require("../models/burger");

const assetsDir = path.resolve(__dirname, "..", "public", "assets");

var router = express.Router();

// index
router.get("/", function(req, res) {
    burger.list()
        .then(data => res.status(200).render("index", { burgers: data }))
        .catch(err => res.status(500).json(err));
});

// add a new burger
router.post("/api/burgers", function(req, res) {
    burger.add(req.body.burger_name)
        .then(console.log)
        .then(() => res.status(200).end())
        .catch(err => res.status(500).json(err));
});

router.put("/api/bugers/:id", function(req, res) {
    burger.devour(req.params.id)
        .then(() => res.status(200).end())
        .catch(err => res.status(500).json(err));
});

module.exports = router;
