import * as express from "express";
import  transaction  from "./transaction"
import  accounts  from "./accounts"

let app:any = express();
app.use("/module1",transaction);
app.use("/module2",accounts);

app.listen(8080,()=>{
    console.log("Server started..!")
});

//http://localhost:8080/module1
//http://localhost:8080/module1/pierre
//http://localhost:8080/module2
//http://localhost:8080/module2/dibya