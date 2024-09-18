import React, { useEffect } from 'react'
import { useState } from 'react'
import { auth, provider } from '../../firebaseConfig';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import "./Login.css"

export default function Login() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        let Sub = onAuthStateChanged(auth, (currentuser) => {
            if (currentuser) {
                console.log(currentuser)
                setUser(currentuser)
            }
        })
    }, [])

    const handleLogin = async () => {
        let user = await signInWithPopup(auth, provider);
        console.log(user);
        setUser(user)
    }

    const handleSignout = async () => {
        await signOut(auth);
        setUser(null);
    }
    return (
        <div>
            {
                user ?
                    <div className="main2">
                        <div className="col-6" style={{marginLeft:"10px"}}>
                            <img src={user.photoURL} width="20%" style={{marginLeft:"30px",marginTop:"40px"}}/>
                        </div>
                        <div className="col-6"><br /><br />
                            <span style={{fontWeight:"bold"}}>HELLO EVERYBODY, I AM </span>
                            <h1 style={{fontWeight:"bold",fontSize:"88px"}}>{user.displayName} </h1><br />
                            <span style={{fontWeight:"700"}}> FULL STACK DEVELOPER</span><br /><br />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet veniam laudantium ullam ipsum perferendis, eum dolore optio ea, hic aliquid incidunt rerum repudiandae. Dolore iste nihil, id nulla voluptate nesciunt.</p>
                           <br />
                           <label htmlFor="" style={{marginTop:"5px"}}><i class="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;31st December, 2004</label>  <br />
                           <label htmlFor=""style={{marginTop:"5px"}}><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;8347991153</label>  <br />
                           <label htmlFor=""style={{marginTop:"5px"}}><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;{user.email}</label>  <br /><br />
                           <span style={{padding:"10px 15px",backgroundColor:"gray",color:"white",marginLeft:"5px",borderRadius:"5px"}}><i class="fa-brands fa-facebook-f"></i></span>
                           <span style={{padding:"10px 15px",backgroundColor:"gray",marginLeft:"5px",color:"white",borderRadius:"5px"}}><i class="fa-brands fa-twitter"></i></span>
                           <span style={{padding:"10px 15px",backgroundColor:"gray",marginLeft:"5px",color:"white",borderRadius:"5px"}}><i class="fa-brands fa-linkedin-in"></i></span>
                           <br /><br />
                            <button onClick={handleSignout} style={{backgroundColor:"gray",color:"white",height:"40px",border:"none",width:"120px",borderRadius:"8px"}}>SignOut</button>
                        </div>
                    </div>
                    :
                    <div className="main">

                        <button onClick={handleLogin} className='google-log' style={{border:"none",color:"white"}}>Log In</button>
                    </div>
            }
        </div>
    )
}
