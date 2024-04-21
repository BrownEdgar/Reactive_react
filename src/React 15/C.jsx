import React, { useContext } from 'react'
import { MyContext } from './App'

export default function C() {
  const value = useContext(MyContext)
  return (
    <div>
      <h1>C commponents</h1>
      <MyContext.Consumer >
        <h1>
          {value.title}
        </h1>
      </MyContext.Consumer>
    </div>
  )
}
