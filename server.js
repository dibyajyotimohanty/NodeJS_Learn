"use strict";
exports.__esModule = true;
var express = require("express");
var transaction_1 = require("./transaction");
var accounts_1 = require("./accounts");
var app = express();
app.use("/module1", transaction_1["default"]);
app.use("/module2", accounts_1["default"]);
app.listen(8080, function () {
    console.log("Server started..!");
});
//http://localhost:8080/module1
//http://localhost:8080/module1/pierre
//http://localhost:8080/module2
//http://localhost:8080/module2/dibya
