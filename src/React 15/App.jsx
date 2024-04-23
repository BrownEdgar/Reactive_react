import React, { createContext, useEffect, useState} from 'react'
import './App.scss'
import axios from 'axios'
import C from './C'


export const MyContext = createContext("asd")

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos?_limit=24')
    .then( res => setData(res.data))
  },[])
  
  return (
   <div className='App'>
     <MyContext.Provider value={data}>
      <C/>
     </MyContext.Provider>
   </div>
  )
}
