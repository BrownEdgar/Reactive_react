import React, { createContext, useEffect, useState} from 'react'
import './App.scss'
import axios from 'axios'


export const MyContext = createContext("asd")

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then( data => setData(data))
  },[])
  
  return (
   <div className='App'>

   </div>
  )
}
