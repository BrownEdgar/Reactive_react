import React, { useContext } from 'react'
import { MyContaxt } from './App'
import Interval2 from './Interval2'

export default function Interval1() {
  const value = useContext(MyContaxt) 
  console.log(value);
  return (
    <div>
      <Interval2/>
    </div>
  )
}
