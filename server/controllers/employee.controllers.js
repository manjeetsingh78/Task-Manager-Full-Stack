// Controller -> Business Logic
/*
const Employee = require("../models/Employee.model");

const createEmpl = async(req, res) => {
    try{
        const {username,email,skills} = req.body;

        const newEmployee = new Employee({
            username,
            email,
            skills
        });

        await newEmployee.save();

        return res.json({
            message: "Employee created successfully",
            employee: newEmployee,
        });
    }catch(err){
        console.log("error",err);
        return res.json({message : "Internal Server Error"})
    }
};


module.exports = {createEmpl}
*/

const Employee = require("../models/employee.model");

const createEmpl = async (req, res) => {
    try {
        const { username, email, skills } = req.body;

        const newEmployee = new Employee({
            username,
            email,
            skills
        });

        await newEmployee.save();

        res.status(201).json({
            message: "Employee created successfully",
            employee: newEmployee
        });

    } catch (err) {
        console.error("Error creating employee:", err);
        if (err.code === 11000) {
        return res.status(400).json({
            message: "Email already exists"
        });
    }
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
};


// to get all employees


const getAllEmp = async(req,res) => {
    try{
        const employees = await Employee.find();

        return res.json({message: "Employee fetched Successfully",employees})
    }catch(err){
        console.log("Error: ",err.message)
    }
}

module.exports = { createEmpl, getAllEmp };

