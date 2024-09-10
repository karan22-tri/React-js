import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, firestore } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore';
import './Signup.css'

export default function Signup() {

  const [fname, Setfname] = useState("");
  const [lname, Setlname] = useState("");
  const [email, Setemail] = useState("");
  const [pass, Setpass] = useState("");

  const navigate = useNavigate();

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        console.log(user.user.uid);
        setDoc(doc(firestore, "users", user.user.uid), {
          fname, lname, email
        })
        navigate("/dashboard")
      })
      .catch((err) => {
        console.log(err);

      })
  }
  return (
    <>
      <div className="hero1">
        {/* <div className="main1"> */}
          <div className='blur1'></div>

        {/* </div> */}
        <div className='mini1'>
          <h1 className='sig'>Sign up</h1>
          <input className='text11' type="text" placeholder='Enter Your Firstname' onChange={(e) => Setfname(e.target.value)} />
          <input className='text11' type="text" placeholder='Enter Your Lastname' onChange={(e) => Setlname(e.target.value)} />
          <input className='text11' type="text" placeholder='Enter username' onChange={(e) => Setemail(e.target.value)} />
          <input className='text11' type="text" placeholder='Enter Password' onChange={(e) => Setpass(e.target.value)} />
          <button className='btn btn-secondary btn11' onClick={signup}>Sign up</button><br /><br />
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </>
  )
}
