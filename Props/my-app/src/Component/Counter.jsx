import React from 'react'
import { useState } from 'react'


function Counter() {

  const [count, setCount] = useState(0)
  
  const handleAddition = () => {
    setCount(count + 5)
  }
  const handleSubtraction = () => {
    setCount(count - 5)
  }
  const handleMultiplication = () => {
    setCount(count * 5)
  }
  const handleDivision = () => {
    setCount(count / 5)
  }
  const handleReset = () => {
    setCount(0) 
  }

  return (
    <>
      <div className="main">
        <div className="center">
         <div className="c1">
          <h1>{count}</h1>
          <button onClick={handleReset}>reset</button>
          </div>
          <div className="c2">
            <button onDoubleClick={handleAddition}>addition of 5</button>
            <button onClick={handleSubtraction}>subtraction of 5</button>
            <button onClick={handleMultiplication}>multiplication of 5</button>
            <button onClick={handleDivision}>division of 5</button>
          </div>
       
        </div>   
      </div>
    </>
  )
}

export default Counter