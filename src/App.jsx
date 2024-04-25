import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos, saveTodos } from './features/todos/todosSlice'

export default function App() {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch()

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos')
    .then(res => dispatch(saveTodos(res.data)))
  })
  return (
    <div className='App'>
      <h1 className='Todos__title'>Our Todos</h1>
      <div className="Todos__body">
        {
          todos.map(todos => {
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
