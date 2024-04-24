import React, { useContext } from 'react'
import { MyContext } from '../App'
import './Todos.scss'

export default function Todos() {
  const value = useContext(MyContext)

  return (
    <div className='Todos'>
      <h1 className='Todos__title'>Our Todos</h1>
      <div className="Todos__body">
        {
          value.data.map(todos => {
            return (
              <div key={todos.id}>
                <h2>{todos.title}</h2>
                <button onClick={() => value.handleDelete(todos.id)}>
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
