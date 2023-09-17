const express = require('express');
const app = express();
const bodyParser = require("body-parser");
 
const port = 3000;

const mongoose = require("mongoose");
require("dotenv").config();
/* console.log("this ") */

const connection = mongoose.connect(process.env.MONGODB_URI);

connection.then(() => {
    console.log('Connected to Database Successfully')
}).catch((error) => {
    console.log(error);
});
 
/* XJBhHOAQM3sduayh */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
});

