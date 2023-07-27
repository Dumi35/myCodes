const express = require("express");

const app = express();

app.use("/", require("./routeFolder/user"));

app.listen(4000, () => {
    console.log("Server running on port 40000");
});