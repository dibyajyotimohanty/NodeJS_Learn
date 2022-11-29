"use strict";
exports.__esModule = true;
//create the sub module
var express = require("express");
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({ message: "transaction soon...!" });
});
transactions.get("/pierre", function (req, res) {
    res.status(200).json({ message: "wel come to pieree for nodejs" });
});
exports["default"] = transactions;
