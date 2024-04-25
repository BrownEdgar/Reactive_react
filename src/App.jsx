import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveTodos } from './features/todos/todosSlice'

export default function App() {
  const value = useSelector((state) => state.todos);
  const dispatch = useDispatch()

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos')
    .then(res => dispatch(saveTodos(res.data)))
  })
  return (
    <div className='App'>
      
    </div>
  )
}
