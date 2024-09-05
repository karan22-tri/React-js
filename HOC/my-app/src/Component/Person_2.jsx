import React, { useState } from 'react'

import Updated_Component from './Updated_component'

function Person_2({money,handleincrease}) {
  

  return (
    <>

    <h1> BIRLA  Share Price: ${money}</h1>
    <button onClick={handleincrease}>Click Here!!!!</button>
    
    </>
  )
}

export default Updated_Component(Person_2)