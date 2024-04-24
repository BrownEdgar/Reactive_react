import axios from 'axios'
import React, { createContext, useEffect, useState, } from 'react'
import Todos from './Todos/Todos'

export const MyContext = createContext('Error, please try again')

export default function App() {
  const [data, setData] = useState([])

  const handleDelete = (id) => {
    const result = data.filter(elem => elem.id !== id)
    setData(result)
  }

  useEffect(() => {
    const getData = () => {
      axios(
        {
          baseURL: 'https://jsonplaceholder.typicode.com/',
          url: 'todos',
          params:{
            _limit:9
          }
        }
      ).then((res) => setData(res.data))
    }
    getData()
  }, [])

  return (
    <div>
      <MyContext.Provider value={{data, handleDelete}}>
        <Todos/>
      </MyContext.Provider>
    </div>
  )
}
