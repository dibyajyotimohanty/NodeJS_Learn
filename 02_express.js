//express
//express is the 3rd module in nodejs
//express is the framework(rest framework)
//express framework used to develope the rest services Ex. GET,POST,PUT,DELETE...
//express module we will download by using either 'yarn' tool or 'npm' tool
/*
Ex.
npm install express --save
    or
yarn add  express  --save
*/
//all the module downloads to 'node_modules' folder in current path

let express = require("express");

//create the rest object
let app = express();
//where app object is the rest  object
//where app object used to develope the rest services
//GET,POST,PUT,DELETE,HEAD,OPTIONS,TRACE.....


//get request
app.get("/",(req,res)=>{
    res.status(200).json({"message":"default get request...!"});
});

app.get("/demo",(req,res)=>{
    res.status(200).json({"message":"data from mongodb data soon..."});
});


app.post("/",(req,res)=>{
    res.status(200).json({"message":"default post request....!"});
});

app.post("/demo",(req,res)=>{
    res.status(200).json({"message":"data from cassandradb database data soon....!"});
});

app.listen(8080,()=>{
    console.log("server started");
});

//http://localhost:8080/ (get) (post)
//http://localhost:8080/demo  (get) (post)