import React, { createContext, useEffect, useState } from 'react'
import Interval1 from './Interval1'
import axios from "axios"
import "./App.scss"


export const MyContaxt = createContext("Something went wrong 😢, please advise until the administrator corrects the situation 🙏")

export default function App() {

  const [data, setData] = useState([])
  const [limit, setLimit] = useState(10)

  const seeMore = () => {
    setLimit(limit + 10)
    
  }

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    .then(res => setData(res.data))
    console.log(limit);
  }, [limit] )

  
  

  return (

    <div className='App'>
      <h1>Your todos</h1>
      <MyContaxt.Provider value={{ data, limit, seeMore }}>
        <Interval1/>
      </MyContaxt.Provider>
    </div>
  )
}
