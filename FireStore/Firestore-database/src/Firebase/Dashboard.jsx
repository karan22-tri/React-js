import React, { useEffect, useState } from 'react'
import { auth, firestore } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import './Dashboard.css'

export default function Dashboard() {
  
  const [user,Setuser]=useState("");

  useEffect(()=>{
    let unsub = onAuthStateChanged(auth,(currentUser)=>{
      if(currentUser){
        console.log(currentUser)
        fetchUser(currentUser)
        Setuser(currentUser)
      }else{
        Setuser("Guest")
      }
    })
  },[])

  const [user1,Setuser1] = useState("");

  const fetchUser = async() =>{
    let user = auth.currentUser;
    let data = await getDoc(doc(firestore,"users",user.uid))
    console.log(data.data());
    Setuser1(data.data())
    
  }
    return (
    <div className='info-hero container'>
      <div className="sec1">
        <font>Hello</font><br />
      <h1>
        Welcome <span style={{color:'red'}}> {user1.fname}</span> to the Dashboard
      </h1>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet quas magnam soluta? Eos est molestias alias quibusdam fugit ex.</p>
      <br />
      <button type="button" class="btn btn-secondary btn1">Download CV</button>
      </div>
      <div className="sec2">

      </div>
    </div>
  )
}
