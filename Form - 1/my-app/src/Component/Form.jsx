import React from 'react'
import { useState } from 'react'
function Form() {

    const [formdata,setformdata]=useState({

        username:'',
        email : '',
        password : ''
    })
  
    const handlesubmit =(e)=>
    { 
      e.preventDefault()
      
      console.log(formdata)
      alert("Form Submitted...!")
    }
    const handleinput =(e) =>
    {
      const{name,value}=e.target
      setformdata({
        ...formdata,
        [name]:value

      })
     
      }
     function res() {

      setformdata({

        username:'',
        email : '',
        password : ''
    })
       
      }
  return (
    <div>
      <center>
          <form action="" onSubmit={handlesubmit}>
            <label>Enter the Username :~  </label>
            <input type="text" name='username' value={formdata.username} onChange={handleinput}/>
            <br />
            <label htmlFor="">Enter your Email :~ </label>
            <input type="text" name='email' value={formdata.email} onChange={handleinput}/>
            <br />
            <label htmlFor="">Enter your password  :~ </label>
            <input type="text" name='password' value={formdata.password} onChange={handleinput}/>
            <br />
            <button type='submit' name='submit' onClick={res}>Submit</button>
        </form>
        </center>
    </div>
  )
}

export default Form