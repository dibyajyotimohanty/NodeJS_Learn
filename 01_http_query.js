//import http module
let http = require("http");

//import url module
//url module used to read the query parameters
//url module also predefind module
//url module available along with the node software
let url = require("url")

//create the http server
let server = http.createServer((req,res)=>{
    // set the MIME Type
    //communication language between client and server called as MIME
    res.writeHead(200,{'Content-Type':'text/html'});
    //parse the request
    let obj=url.parse(req.url,true).query;
    if (obj.uname==="ashokit" && obj.upwd === "ashokit"){
        res.write("<h1>Login Success</h1>")
    }else{
        res.write("<h1>Login Fail</h1>")
    }
    res.end();
});

server.listen(8080)
console.log("server listing the port no:8080")
