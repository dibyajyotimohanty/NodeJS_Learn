"use strict";
exports.__esModule = true;
//import express module
var express = require("express");
var app = express();
//app object used to develop the rest services
//Ex. GET,POST,PUT,DELETE
//get request
app.get("/", function (req, res) {
    res.status(200).json({ "message": "Welcome to typescript with nodejs" });
});
//assign the port no
app.listen(8080, function () {
    console.log("server started successfully !!!");
});
