const express = require("express");
const burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(data => res.render("index", {burger : data}));
});

router.post("/burger/", function (req, res) {
    burger.insertOne(req.body.name, data => res.json(data));
})

router.put("/burger/:id", function (req, res) {
    burger.updateOne(req.params.id, data => res.json(data));
});

module.exports = router;
