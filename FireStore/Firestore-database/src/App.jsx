import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Firebase/Signup'
import Login from './Firebase/Login'
import Dashboard from './Firebase/Dashboard'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Signup}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}
