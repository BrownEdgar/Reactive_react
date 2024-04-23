import React, { useContext } from 'react'
import { MyContext } from './App'

import './C.scss'
export default function C() {
  const value = useContext(MyContext)

  return (
    <div className='App'>
      {
        value.map(elem => {
          return (
            <div key={elem} className='App__content'>
              <h1>{elem.id}</h1>
              <p>{elem.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}
