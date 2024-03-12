import React, { useState, useEffect} from 'react'
import './App.scss'

export default function Todos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/Todos?_limit=9')
        .then((res) => res.json())
        .then(data => setData(data))
    }
    getData()
  }, [])

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
                <p>{todos.body}</p>
                <button>
                  <i
                    className='bx bxs-message-square-x bx-md'
                    onClick={() => handleDelete(todos.id)}>
                  </i>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
