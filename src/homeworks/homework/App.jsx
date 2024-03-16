import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './App.scss'

export default function Todos() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = () => {
      axios('https://jsonplaceholder.typicode.com/Todos?_limit=9')
        .then((res) => setData(res.data))
        .finally(() => setLoading(false))
    }
    getData()
  }, [data])

  const handleDelete = (id) => {
    const result = data.filter(elem => elem.id !== id)
    setData(result)
  }

  return (
    <div className='Todos'>
      <h1 className='Todos__title'>Our Todos</h1>
      <div className="Todos__body">
        {
          data.map(todos => {
            return (
              <div key={todos.id}>
                <h2>{todos.title}</h2>
                <button onClick={() => handleDelete(todos.id)}>
                  <i className='bx bxs-message-square-x bx-md'></i>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
