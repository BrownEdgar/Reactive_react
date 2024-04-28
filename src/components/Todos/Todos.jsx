import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAsyncTodos, getTodos } from '@f/todos/todosSlice';
import './Todos.scss'

export default function Todos() {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getAsyncTodos) 
  })
  return (
    <div className='Todos'>
      <h1 className='Todos__title'>Our Todos</h1>
      <div className="Todos__body">
        {
          todos.data.map(todos => {
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
