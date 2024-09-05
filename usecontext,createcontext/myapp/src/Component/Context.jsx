import React, { createContext, useState } from 'react'

export const CounterContext = createContext()
export const Context = ({children}) => {

    const[count,setCount] = useState(0)

    const inc =()=>{
        setCount(count+1)
    }

    const dec =()=>{
        setCount(count-1)
    }
  return (
   <CounterContext.Provider value={{count,inc,dec}}>

    {children}
   </CounterContext.Provider>
  )
}
