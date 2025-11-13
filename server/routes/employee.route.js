/*
const express = require("express")
const {createEmpl} = require("../controllers/employee.controllers")

// setup the router

const router = express.Router();

// Create employee api

router.post("/create-empl", createEmpl)

module.exports = router

*/

const express = require("express");
const { createEmpl, getAllEmp } = require("../controllers/employee.controllers");

const router = express.Router();

router.post("/create-empl", createEmpl)

router.get("/employees",getAllEmp)

module.exports = router;
