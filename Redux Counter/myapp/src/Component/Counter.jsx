import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../Redux/action'

const Counter = () =>{
  
  const count = useSelector((state)=>state.count)
  const dispatch =useDispatch()
  const increment =()=>{
    dispatch(inc())
  }
  
  const decrement =()=>{
    dispatch(dec())
  }
  
    return (
   <>
   <h1>Count:{count}</h1>
   <button onClick={increment}>Increment</button>
   <button onClick={decrement} disabled={count==0}>Decrement</button>
   </>
  )
}

export default Counter