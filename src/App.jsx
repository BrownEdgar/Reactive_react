import { useEffect, useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addCounter } from '@/counter/counterSlice'
import { addUsers } from '@/users/usersSlice'
import axios  from 'axios'
import { addTodos } from '@/todos/todosSlice'



function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => console.log(addUsers(res.data)))
      // .then(res => dispatch(addUsers(res.data)))
  }, [])
  
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos')
      .then(res => console.log(addTodos(res.data)))
    // .then(res => dispatch(addUsers(res.data)))
  }, [])

  return (
    <div className='App'>
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(addCounter(3))}>Plus</button>
    </div>
  )
}

export default App