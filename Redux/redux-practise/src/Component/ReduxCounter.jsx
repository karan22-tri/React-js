import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../Features/CounterSlice'

export default function ReduxCounter() {
   const [counter,Setcounter] = useState("")

   const count = useSelector((state)=>{
    return state.counterkey
   })

   const dispatch = useDispatch()
   const handleClick =()=>{
        dispatch(addData(counter))
   }
    return (
    <div>
        <input type="text" onChange={(e)=>Setcounter(e.target.value)} />
        <button onClick={handleClick}>asda</button>
        {
            count && <h1>{count.value}</h1>
        }
    </div>
  )
}
