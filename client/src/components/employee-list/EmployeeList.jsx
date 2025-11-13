import React from "react";

const EmployeeList = ({ username,email,skills,tasksAssigned }) => {

    console.log(username,email,skills)
  return (
    <div>
      
        <h4>Username: {username}</h4>
        <h6>Email: {email}</h6>
        <div>
            Skills: {
                skills.map((skill,idx) => {
                    <span key={idx}>{skill}</span>
                })
            }
        </div>
        
        <div>
            Assigned Tasks: {tasksAssigned.map((task,idx)=>{
                <span key={idx}>{task}</span>
            })}
        </div>

    </div>
  );
};

export default EmployeeList;
