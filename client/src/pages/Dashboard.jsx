import React from 'react'
import CreateEmployee from '../components/create-employee/CreateEmployee'
import AssignTask from '../components/assign-task/AssignTask'
import axios from "axios"
import EmployeeList from '../components/employee-list/EmployeeList'



const Dashboard = () => {

  const [employees,setEmployees] = useState([]);
  return (
    <div>
        <h1 className='text-center font-semibold text-2xl mt-3'>Dashboard</h1>

        <div className='flex justify-center gap-20 mt-10'>
        <div>

            <CreateEmployee />

        </div>

        <div>

            <AssignTask />

        </div>
        <div>
        
          {
            employees.map((emp,index) => {
              <EmployeeList key = {index} username = {emp.username} email = {emp.email}
              skills = {emp.skills} tasksAssigned = {emp.tasksAssigned} />
            })
          }

        </div>
        </div>
    </div>
  )
}

export default Dashboard