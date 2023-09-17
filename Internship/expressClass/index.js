const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose.connect(process.env.mongoConnection).then(() => {
    console.log("Connected to database");
}).catch((e) => {
    console.log("An error occurred:", e);
});

app.use(express.json());

app.use("/hello", require("./routeFolder/user"));

// app.get('/',(req,res)=>{
//     res.send("helloB")
    
// })

// app.post('/',(req,res)=>{
//     res.send("POST hello")
    
// })

app.listen(4000, () => {
    console.log("Server running on port 4000");
});