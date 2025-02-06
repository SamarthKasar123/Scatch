const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");

if (process.env.NODE_ENV === "development") {
    router.post("/create", function (req,res) {
        res.send("hey its working");
    });
}

router.get("/", function (req,res) {
    res.send("hey its working");
});


module.exports = router;


