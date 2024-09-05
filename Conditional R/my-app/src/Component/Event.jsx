import React from 'react'
import { useState } from 'react'

function Event() {

    const[islogin,setlogin]=useState(false)

    function handleout()
    {
        setlogin(false)
    }
    
    function handlein()
    {
        setlogin(true)
    }

  return (
    <div className='lo'>{

 islogin ?(
 <>
 <img src="https://i2.wp.com/churchmediadrop.com/wp-content/uploads/2016/06/16.jpg?fit=1920%2C1080&ssl=1" alt="" />
   <center>
   <button onClick={handleout} style={{backgroundColor:'black',color:'white'}}>Log out</button>
   </center>
   
    </>
    ) : 

    (
        <center>
            
        <>
       <h1> Login is required...!</h1>
       <button onClick={handlein} style={{backgroundColor:'black',color:'white'}}>Log In </button>
        </>
        </center>
    )






        
        
        }
        </div>
  )
}

export default Event