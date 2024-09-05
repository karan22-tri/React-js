

import React from 'react'
import { useState } from 'react'


function Validation_form() {

    const [formdata, setformdata] = useState({
        username: '',
        email: '',
        password: ''

    })

    function handleinput(e) {
        const { name, value } = e.target

        setformdata({
            ...formdata,
            [name]: value
        })

    }

    const [errors, setErrors] = useState({})



    function handlesubmit(e) {
        e.preventDefault()
        console.log(formdata)
        let err = validate(formdata)
        setErrors(err)
        if (Object.keys(err).length === 0) {
            alert("Submmited")
        }
        else {
            setErrors(err)
        }
    }

    function validate(value) {

        let err = {}
        let regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!value.username) {
            err.username = "Username is Requried";
        }
        if (!regx.test(value.email)) {
            err.email = "Email  is not vaild";
        }
        if (!value.password) {
            err.password = "Password is Requried"
        }
        else if (value.password.length < 8) {
            err.password = "Password must be more than 8 characters"
        }

        return err

    }

    return (
        <>
            <center>

                <h3> CONTACT  US</h3>
                <div className='main' style={{overflow:"hidden"}}>
                    <div className='p1'></div>
                    <div className='p2'>
                        <form action="" onSubmit={handlesubmit}>
                            <h1>Get Started</h1>
                            <p>Already have an account?</p>

                            <h4>Log In</h4>
                            <button name='sign up1' className='btn1 btn'>sign up</button>
                            <button name='sign up2' className='btn2 btn'>sign up</button>
                            <br />
                            <h2>Or</h2>
                            <label htmlFor="" style={{display:"block"}}> Name  </label>
                            <input type="text" name='username' value={formdata.username} onChange={handleinput} />
                           
                            <p>{errors.username}</p>

                            <label htmlFor="" style={{display:"block"}}>Email  </label>
                           
                            <input type="text" name='email' value={formdata.email} onChange={handleinput} />
                            
                            <p>{errors.email}</p>
                            <label htmlFor=" " style={{display:"block"}}>Password </label>
                           
                            <input type="text" name='password' value={formdata.password} onChange={handleinput} />
                            
                            <p>{errors.password}</p>
                           
                            <button type='submit' name='submit' className='btn3 btn'>Submit</button>
                        </form>
        
                    </div>
                </div>
            </center>
        </>
    )
}

export default Validation_form