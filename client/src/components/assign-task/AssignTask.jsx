import { useState,useEffect } from "react";
import axios from "axios";


const AssignTask = () =>{ 

  console.log("Employees in Employee list",)

  const [formData, setFormData] = useState({
    taskName: "",
    description: ""
  })


  const [employees,setEmployees] = useState([]);

  console.log("All employees",employees)
  


const getAllEmployees = async() => {
  try{
    const response = await axios.get("http://localhost:5001/employees");
    //console.log(response.data)

    setEmployees(response.data.employees)
  }catch(err){
    console.log("Error Creating empl: ", err.message)
  }
}

useEffect(() => {
  getAllEmployees()
},[])

//  Assign task fn

const AssignTask = async(e) => {
  e.preventDefault();

  try{
    const response = await axios.post("http://localhost:5001/assign-task", {
      taskName: formData.taskName,
      description: formData.description,
      selectedEmplID: formData.selectedEmpl
    });
    
    if(response.data.employee.tasksAssigned){
      setFormData({
        taskName: "",
        description: "",
        selectedEmpl: ""
      })
      return alert(`Task assigned to ${response.data.employee.email}`); 
    }
    
  }catch(err){
    console.log("Error assigning task: ",err);
  }
}



  return (
    <div>
      <form 
        className="flex flex-col gap-4 items-center border border-black px-30 py-30 rounded-lg"
      >
        <h1 className="text-lg font-semibold italic">Assign Task</h1>

        <select name="Selet Person" className="border border-black rounded-ls" placeholder="Select Employee" 
        onChange={(e) => setFormData({
          ...formData,
          selectedEmpl : e.target.value
        })}>


          <option value="">Select Employee</option>


          {
            employees.map((empl,idx) => (
              <option value={empl._id} key={idx}>{empl.email}</option>
            ))
          }

        </select>

        <input
          value={formData.taskName}
          className="border border-black p-2 rounded outline-none"
          type="text"
          placeholder="Enter Task Name"
          onChange={(e) => setFormData({
            ...formData,
            taskName: e.target.value
          })}
        />

        <textarea value={formData.AssignTask} className="border border-black px-5 py-5 rounded outline-none" type="text" placeholder="Enter Task Description" 
        onChange={(e) => setFormData({
            ...formData,
            description : e.target.value
          })}
          />

        <button 
          className="bg-slate-900 text-white rounded-lg p-3 cursor-pointer"
        >
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default AssignTask;
