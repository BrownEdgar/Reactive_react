import React, { useState, useEffect } from 'react'
import axios from "axios";
import './App.scss'
import ToDos from "./ToDos/App";
import PostLoader from './loader/PostLoader';

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      const getToDos = () => {
        setLoading(true)
        axios(`https://jsonplaceholder.typicode.com/todos`)
          .then(({data}) => setData(data))
          .finally(() => setLoading(false))
        }
      getToDos()
    }, [])
  const handleDelete = (id) => {
    const result = data.filter(elem => elem.id !== id)
    setData(result)
  }
  return (
    <div className='App'>
      {
        loading ? <PostLoader /> : <ToDos data={data} handleDelete={handleDelete}/>
      }
    </div>
  )
}
