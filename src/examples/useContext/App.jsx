import React, { createContext, useEffect, useState } from 'react'
import A from './A'
import axios from 'axios'

export const MyContext = createContext(8)

export default function App() {
    const [data, setData] = useState([])
    
    useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/todos', {
      }).then(res => setData(res.data))
  }, [])
  
  return (
    <div>
        <h1>Component App</h1>
        <MyContext.Provider value={data}>
        <A />
        </MyContext.Provider>
       
    </div>
  )
}
