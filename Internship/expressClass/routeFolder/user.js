const express = require("express");
const router = express.Router();
const taskCollection = require("../models/taskModel");

let users = [];

router.get("/", async function(req, res) {

    res.send(await taskCollection.find());
});

router.get("/:id", async function(req, res) {
    res.send(await taskCollection.findById(req.params.id));
});

router.post("/", async function(req, res) {
    const newUser = await taskCollection.create(req.body);
    res.send(newUser);
});

router.put("/:id", function(req, res) {
    users = users.map(user => {
        if(req.params.id == user.id) {
            return req.body;
        }
        return user;
    });
    res.send("Put");
});

router.delete("/:id", function(req, res) {
    users = users.filter(user => {
        return user.id != req.params.id;
    });
});

module.exports = router;