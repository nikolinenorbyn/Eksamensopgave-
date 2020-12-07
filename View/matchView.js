const express = require("express");
const router = express.Router();
const matchView = require("../Model/matchMod");

//gennem dette får jeg informationer om mathcet
router.get("/", (req, res) => {
    res.json(matchView.myMatch)
});

//Gør sådan så at jeg kan slette matchet
router.delete("/", (req, res) => {
    
    matchView.myMatch = []
    res.json({"message": "Du har slettet dit match"})
});

module.exports = matchView;