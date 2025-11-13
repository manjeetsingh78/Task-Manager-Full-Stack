import { useState } from "react";
import axios from "axios";

const CreateEmployee = () => {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [skill, setSkill] = useState("");
  const [skillsAdded, setSkillsAdded] = useState([]);

  const handleAddingSkill = (e) => {
    e.preventDefault();

    if (skill.trim() === "") return alert("Skill cannot be empty");
    if (skillsAdded.includes(skill.trim())) return alert(`${skill} already added`);

    setSkillsAdded([...skillsAdded, skill.trim()]);
    setSkill("");
  };

  const handleCreateEmpl = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/create-empl", {
        username,
        email,
        skills: skillsAdded
      });

      if(response.data.employee){
            setUserName("")
            setEmail("")
            setSkillsAdded([])
            return alert("Employee Created")
        }

        console.log(response.data.employee)

      console.log("Employee created:", response.data);
      alert("Employee created successfully!");

    } catch (err) {
      console.log("Error creating employee:", err.message);
      alert("Failed to create employee");
    }
  };

  return (
    <div>
      <form 
        onSubmit={handleCreateEmpl}
        className="flex flex-col gap-4 items-center border border-black p-30 rounded-lg"
      >
        <h1 className="text-lg font-semibold italic">Create Employee</h1>

        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="border border-black p-2 rounded outline-none"
          type="text"
          placeholder="username"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-black p-2 rounded outline-none"
          type="email"
          placeholder="Enter Email"
        />

        <div>
          <input
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="border border-black p-2 w-34 rounded outline-none"
            type="text"
            placeholder="Enter Skills"
          />

          <button
            onClick={handleAddingSkill}
            className="ml-4 bg-green-800 text-white text-xs p-2 rounded"
            type="button"
          >
            Add Skills
          </button>
        </div>

        <div className="flex flex-wrap gap-2 w-full justify-center mt-2">
          {skillsAdded.map((item, idx) => (
            <span
              key={idx}
              className="bg-slate-800 text-white p-2 text-xs rounded-lg"
            >
              {item}
            </span>
          ))}
        </div>

        <button 
          type="submit"
          className="bg-slate-900 text-white rounded-lg p-3 cursor-pointer"
        >
          Create Employee
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
