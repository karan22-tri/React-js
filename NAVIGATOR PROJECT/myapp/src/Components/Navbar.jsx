import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <div className="navbar top-0 fixed w-full border border-transparent flex justify-evenly text-2xl py-4 ">
        <Link to="/home" className='hover:text-green-900 font-semibold hover:text-[26px]'>Home</Link>    
        <Link to="/Addtodo" className='hover:text-green-900 font-semibold hover:text-[26px]'>ADD-TODO</Link>    
        <Link to="/Todolist" className='hover:text-green-900 font-semibold hover:text-[26px]'>TODO-LIST</Link>    
    </div> 
    </>
  )
}

export default Navbar
