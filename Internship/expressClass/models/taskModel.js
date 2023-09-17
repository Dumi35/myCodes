const mongoose = require("mongoose");

let taskModel =  new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        default: "Heavy task"
    }
}, {
    timestamps: true
});

const taskCollection = mongoose.model("task", taskModel);

module.exports = taskCollection;
