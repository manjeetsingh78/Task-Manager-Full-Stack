import React from 'react'

function Navbar() {
  return (
    <nav className="h-20 bg-slate-900 flex justify-between items-center px-20">
        <div className="text-white text-2xl font-semibold ">Task Manager APP</div>
        <div>
            <div>
                <img className='w-14 bg-white rounded-full' 
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" 
                alt="user_rofile" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar