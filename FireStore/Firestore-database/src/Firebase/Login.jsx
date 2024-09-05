import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [email, Setemail] = useState("")
  const [pass, Setpass] = useState("")

  const navigate = useNavigate();

  const Login = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        console.log(user);
        navigate("/dashboard")
      })
      .catch((err) => {
        console.log(err);

      })
  }

  return (<>
    <div className="hero">
      <div className="main">
        <div className='blur'></div>

      </div>
      <div className='mini'>
        <h1 className='sig' >Sign In</h1>
        <input type="text" placeholder='Enter username' onChange={(e) => Setemail(e.target.value)} className='text' /> <br />
        <input type="password" placeholder='Enter Password' onChange={(e) => Setpass(e.target.value)} className='text1' /> <br />
        <button onClick={Login} className='btn btn-secondary btn1'>Log in</button>
        <Link to="/"></Link>
      </div>
    </div>
  </>
  )
}
