// import React, { useContext } from 'react'
// import { MyContext } from './Home'

// export default function Footer() {
//   const name = useContext(MyContext)

//   return (
// <h1>{name}   Welcome on Footer  Page </h1>
//   )
// }


import React, { useContext } from 'react'
import { mycontext } from './Home'

export default function Footer() {
   const name = useContext(mycontext)
  return (
    <h1>{name}That is Footer</h1>
  )
}
