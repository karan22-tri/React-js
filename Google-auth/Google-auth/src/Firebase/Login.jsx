import React, { useEffect } from 'react'
import { useState } from 'react'
import { auth, provider } from '../../firebaseConfig';
import { onAuthStateChanged,signInWithPopup,signOut } from 'firebase/auth';

export default function Login() {
  
        const [user,setUser] = useState(null);

        useEffect(()=>{
            let Sub = onAuthStateChanged(auth,(currentuser)=>{
                if(currentuser){
                    console.log(currentuser)
                    setUser(currentuser)
                }
            })
        },[])

        const handleLogin = async()=>{
            let user = await signInWithPopup(auth,provider);
            console.log(user);
            setUser(user)
        }

        const handleSignout = async()=>{
            await signOut(auth);
            setUser(null);
        }
    return (
    <div>
      {
        user ?
        <div>
            <h1>Hey...! <br />{user.displayName} <br />  WELCOME On Our Page</h1>
            <h1>That's Your <br />{user.email} <br /> email</h1>
            {/* <img src={user.photoURL} width="20%" alt="" /> */}
            <img  src={user.photoURL} width="20%" />
            <button onClick={handleSignout}>SignOut</button>
        </div>
        :
        <button onClick={handleLogin}>Log In</button>
      }
    </div>
  )
}
