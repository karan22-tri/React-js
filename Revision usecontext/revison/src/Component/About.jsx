import React, { createContext, useState } from 'react'
import Service from './Service'
export const context =createContext()
export default function About() {

  const [type,settype] = useState("")
  return (
    <context.Provider value={type}>
  <div>
  <input type="text" onChange={(e)=>settype(e.target.value)}/>
  </div>
  <Service/>
    </context.Provider>
  )
}
