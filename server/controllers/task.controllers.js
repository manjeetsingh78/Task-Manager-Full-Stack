const Task = require("../models/Task.model");
const Employee = require("../models/Employee.model");

//  Assign Task

const assignTask = async(req, res) =>{
    try{
        const {selectEmplID,taskName,description} = req.body;

        //  create a task and save it

        const newTask = new Task({
            taskName,
            description
        })

        await newTask.save();

        console.log(newTask)

        //assign this task to selected empl

        const employee = await Employee.findById(selectEmplID)

        console.log(employee)


        //push the new task assigned ti taskAsssigned Array
        employee.taskAssigned.push(newTask._id);

        await employee.save();

        return res.json({message: "Task Assigned",employee})


    }catch(err){
        console.log("Error Message: ",err);
    }
};


module.exports = {assignTask}