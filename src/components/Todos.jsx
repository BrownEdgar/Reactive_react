import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos, saveTodos } from '../features/todos/todosSlice'
import axios from 'axios'
import './Todos.scss'

export default function Todos() {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch()

  useEffect(() => {
    axios({
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: 'todos', 
      params: {
        _limit: 20
      }
    })
    .then(res => dispatch(saveTodos(res.data)))
  })
  return (
    <div className='Todos'>
      <h1 className='Todos__title'>Our Todos</h1>
      <div className="Todos__body">
        {
          todos.map(todos => {
            return (
              <div key={todos.id}>
                <h2>{todos.title}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
