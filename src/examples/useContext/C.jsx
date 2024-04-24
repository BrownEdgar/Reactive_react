import React, { useContext } from 'react'
import { MyContext } from './App'

export default function C() {


  const value = useContext(MyContext)
  return (
    <div>
        <h1>component c</h1>
        <p>
            <mark>
                value: {value}
            </mark>
        </p>
    </div>
  )
}
