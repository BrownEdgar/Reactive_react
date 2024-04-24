import React from 'react'
import Todos from './Todos/Todos'
import  { useContext } from 'react'
import { MyContaxt } from './App'

export default function Interval2() {
  const data = useContext(MyContaxt) 
  return (
    <div>
      <Todos/>
    </div>
  )
}
