import React, { useContext } from 'react'
import { MyContenxt } from './contexts/Contexts'

function C() {
    const value = useContext(MyContenxt)
    console.log(value)
  return (
    <div>
        <h1>Component C</h1>
        <h1>
            <mark>value: {JSON.stringify(value)}</mark>
        </h1>
        <button onClick={value.handleClick}>PLUS</button>
    </div>
  )
}

export default C