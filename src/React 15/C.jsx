import React, { useContext } from 'react'
import { MyContext } from './App'

export default function C() {
  const value = useContext(MyContext)
  console.log(value);
  return (
    <div>
      {
        value.map(elem => {
          return (
            <div key={elem}>
             <h1>{elem.title}</h1>
            </div>
          )
        })
      }
    </div>
  )
}
