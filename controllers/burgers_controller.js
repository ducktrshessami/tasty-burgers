const express = require("express");
const burger = require("../models/burger");

var router = express.Router();

// index
router.get("/", function(req, res) {
    burger.list()
        .then(data => {
            res.status(200).render("index", { burgers: data });
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.get("/assets/:type/:file", function(req, res) {

});

router.post("/api/burgers", function(req, res) {

});

router.put("/api/bugers/:id", function(req, res) {

});

module.exports = router;
