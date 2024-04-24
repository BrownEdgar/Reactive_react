import React, { useState } from 'react'
import A from './A'
import { MyContext } from './contexts/Contexts'


export default function App() {

  const [data, setdata] = useState(155)
  const handleClick = () => {
    setdata(data + 1)
  }

  return (
    <div>
      <h1>Component App</h1>
      <MyContext.Provider value={{ data, handleClick }}>
        <A />
      </MyContext.Provider>

    </div>
  )
}
