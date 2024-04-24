import React, { useContext } from 'react'
import { MyContaxt } from './App'
import Interval2 from './Interval2'

export default function Interval1() {
  const data = useContext(MyContaxt) 
  return (
    <div>
      <Interval2/>
    </div>
  )
}
