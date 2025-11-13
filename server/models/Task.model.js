const mongoose = require("mongoose");

// task schema

const taskSchema = new mongoose.Schema({
    taskName:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Task = mongoose.model("Task",taskSchema);
module.exports = Task