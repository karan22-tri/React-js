import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Addtodo from './Addtodo'
import Todolist from './Todolist'



function Allrouter() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/Addtodo' element={<Addtodo/>}></Route> 
        <Route path='/Todolist' element={<Todolist/>}></Route>
        </Routes>
    </>
  )
}

export default Allrouter
