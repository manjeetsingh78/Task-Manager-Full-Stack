const express = require("express");
const { assignTask } = require("../controllers/task.controllers");
const { model } = require("mongoose");


//  router 

const router = express.Router();

// api

router.post("/assign-task",assignTask);

module.exports = router