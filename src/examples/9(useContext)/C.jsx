import React, { useContext } from 'react'
import { MyContext } from './contexts/Contexts'


export default function C() {
  const value = useContext(MyContext)
  return (
    <div>
      <h1>Component c</h1>

      <h1>
        <mark>value: {JSON.stringify(value)}</mark>
      </h1>
      <button onClick={value.handleClick}>PLUS</button>




    </div>
  )
}
