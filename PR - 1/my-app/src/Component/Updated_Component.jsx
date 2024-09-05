import React from 'react'
import { useState } from 'react'

function Updated_Component(Original_Component) {

    function New_Component()
    {
        const[money,setMoney]=useState(10)

        function handleincrease()
        {
         setMoney(money*2)
        }
        
        return <Original_Component money={money} handleincrease={handleincrease }/>
        
    }
    return New_Component 

 
}

export default Updated_Component