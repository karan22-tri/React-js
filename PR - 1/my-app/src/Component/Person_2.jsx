import React, { useState } from 'react'

import Updated_Component from './Updated_Component'

function Person_2({money,handleincrease}) {
  

  return (
    <>
   <div style={{border:'1px solid grey',marginTop:'10px'}}>
   <h1> BIRLA  Share Price: ${money}</h1>
    <button onClick={handleincrease} style={{backgroundColor:"green",color:"white",border:"none",marginLeft:'10px',marginBottom:'10px'}}>Purchase</button>
    </div>
    
    </>
  )
}

export default Updated_Component(Person_2)