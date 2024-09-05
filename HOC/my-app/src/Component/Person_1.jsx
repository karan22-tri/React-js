import React, { useState } from 'react'

import Updated_Component from './Updated_component'

function Person_1({money,handleincrease}) {

  return (
    <>
    <h1> TATA STEEL Share price : ${money}</h1>
    <button onClick={handleincrease}>Click Here!!!</button>
    </>
  )
}

export default Updated_Component(Person_1)