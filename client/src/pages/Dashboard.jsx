import React from 'react'
import CreateEmployee from '../components/create-employee/CreateEmployee'
import AssignTask from '../components/assign-task/AssignTask'

const Dashboard = () => {
  return (
    <div>
        <h1 className='text-center font-semibold text-2xl mt-3'>Dashboard</h1>

        <div>
            <CreateEmployee />
        </div>

        {/* <div>

            <AssignTask />

        </div>  */}
    </div>
  )
}

export default Dashboard