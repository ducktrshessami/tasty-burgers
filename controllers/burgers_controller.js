const express = require("express");
const fs = require("fs");
const path = require("path");
const burger = require("../models/burger");

const assetsDir = path.resolve(__dirname, "..", "public", "assets");

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

// index assets
router.get("/assets/:type/:file", function(req, res) {
    let filePath = path.join(assetsDir, req.params.type, req.params.file);
    if (fs.existsSync(filePath)) {
        res.status(200).sendFile(filePath);
    }
    else {
        res.status(404).end();
    }
});

router.post("/api/burgers", function(req, res) {

});

router.put("/api/bugers/:id", function(req, res) {

});

module.exports = router;
