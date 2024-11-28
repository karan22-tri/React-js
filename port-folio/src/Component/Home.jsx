import React from 'react'
import './Home.css'
import '../Component/mediaqueries.css'
import Navbar from './Navbar'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'
import Profile from './Profile'

export default function App() {
      
  return (
    <>
    <Navbar/>
    <Profile/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}
