"use strict";
exports.__esModule = true;
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ message: 'welcome to dibya nodeJS...!' });
});
accounts.post("/acc", function (req, res) {
    res.status(200).json({ message: 'Accounts add soon..!' });
});
exports["default"] = accounts;
