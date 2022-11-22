let http=require("http");
//createServer() is the function in http  module,helps to create the http server
let server = http.createServer((req,res)=>{
    res.write("Welcome to http server");
    res.end();
});

server.listen(8080)
console.log("server listing the port no:8080")
