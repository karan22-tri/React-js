import React from 'react'
import { useContext } from 'react'
import { mycontext } from './Home'

export default function Service() {
  const type = useContext(mycontext)
  return (
   <h2>{type} That is Our Service Center</h2>
  )
}
