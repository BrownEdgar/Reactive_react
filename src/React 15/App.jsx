import React, { createContext, useEffect, useState} from 'react'
import './App.scss'
import A from './A'
import axios from 'axios'


export const MyContext = createContext()

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos?_limit=2')
    .then(data => setData(data))
    console.log(data);
  })
  return (
    <div>
      <MyContext.Provider value={data}>
         
      </MyContext.Provider>
      <A/>
    </div>
  )
}
