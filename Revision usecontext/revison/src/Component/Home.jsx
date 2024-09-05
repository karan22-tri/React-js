// import React, { createContext, useState } from 'react';
// import Footer from './Footer'; 
// export const MyContext = createContext();

// export default function Home() {
//   const [name, setName] = useState('');

//   return (
//     <MyContext.Provider value={name}>
//       <div>
//         <input type="text" onChange={(e) => setName(e.target.value)} />
//         <Footer />
//       </div>
//     </MyContext.Provider>
//   );
// }

import React, { createContext, useState } from 'react'
import Footer from './Footer'
import About from './About'
import Service from './Service'

export const mycontext = createContext()

export default function Home() {

  const [name,setName] = useState("")
  
  return (
    <mycontext.Provider value={name}>

    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
    </div>
    <Footer/>
    <Service/>
    </mycontext.Provider>
  )
}
