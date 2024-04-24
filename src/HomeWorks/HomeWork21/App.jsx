import React, { createContext, useEffect, useState } from 'react'
import Interval1 from './Interval1'
import axios from "axios"
import "./App.scss"


export const MyContaxt = createContext("Something went wrong 😢, please advise until the administrator corrects the situation 🙏")

export default function App() {

  const [data, setData] = useState([])
  const [limit, setLimit] = useState(12)
  const [deleteById, setDeleteByid] = useState(null)

  const seeMore = () => {
    setLimit(limit + 12)
    
  }

  const deleteTodo = (id) => {
    setDeleteByid(data.filter(item => item.id !== id))
  }

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    .then(res => setData(res.data))
  }, [limit] )

  
  

  return (

    <div className='App'>
      <h1>Your todos</h1>
      <MyContaxt.Provider value={{ data, limit, seeMore, deleteTodo }}>
        <Interval1/>
      </MyContaxt.Provider>
    </div>
  )
}
