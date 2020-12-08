const express = require("express");
const burger = require("../models/burger.js");
var router = express.Router();

router.get("/burgers", function (req, res) {
    return burger.selectAll()
});

router.post("/burger/:name", function (req, res) {
    burger.insertOne(req.params.name);
})

router.put("/burgers/:id", function (req, res) {
    burger.updateOne(req.params.id);
});

module.exports = router;
