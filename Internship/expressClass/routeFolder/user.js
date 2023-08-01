const express = require("express");
const router = express.Router();

let users = [];

router.get("/", function(req, res) {
    res.send(users);
});

router.get("/:id", function(req, res) {
    res.send(req.params.id);
});

router.post("/", function(req, res) {
    const id = Math.ceil(Math.random() * 10);
    const newUser = {
        id,
        ...req.body
    };
    users.push(newUser);
});

module.exports = router;