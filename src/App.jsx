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
      {todos.map(elem => {
        
      })}
    </div>
  )
}
