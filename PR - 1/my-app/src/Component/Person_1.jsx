import React, { useState } from 'react'

import Updated_Component from './Updated_Component'

function Person_1({money,handleincrease}) {

  return (
    <>
    <center>

    <h1 style={{color:'red'}}>Today's Market</h1>

    </center>

    <div style={{border:'1px solid grey'}}>
      
    <h1> TATA STEEL Share price : ${money}</h1>
    <button onClick={handleincrease} style={{backgroundColor:"green",color:"white",border:"none",marginLeft:'10px',marginBottom:'10px'}}>Purchase</button>

    </div>
    </>
  )
}

export default Updated_Component(Person_1)