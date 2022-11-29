import * as express from "express";

let accounts:any =express.Router();

accounts.get("/",(req:any,res:any):any=>{
    res.status(200).json({message:'welcome to dibya nodeJS...!'})
});

accounts.post("/acc",(req:any,res:any):any=>{
    res.status(200).json({message:'Accounts add soon..!'})
});

export default accounts;