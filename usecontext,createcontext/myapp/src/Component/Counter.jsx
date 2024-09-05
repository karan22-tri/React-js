import React, { useContext } from 'react'
import { CounterContext } from './Context'


const Counter = () => {
    const Countt = useContext(CounterContext)
    const {count,inc,dec} = Countt
  return (<>
    <h1>Count:{count}</h1>
    <button onClick={inc}>Increment</button>
    <button onClick={dec} disabled={count==0}>Decrement</button>
    </>
  )
}

export default Counter