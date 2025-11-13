/*

1) Create a schema -> employee schema
2) Create a model from employee schema

we will store details in that model

Model-> collection
Employee -> employees

*/

// Mongoose -> DOM
/*
const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    skills: {
        type: [String],
        default: []
    },
        
}, {timestamps: true})

const Employee = mongoose.model("Employee",employeeSchema)


module.exports = Employee

*/
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    skills: {
        type: [String],
        default: []
    },

    taskAssigned: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Task",
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);
