import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCounter, getCounter } from './features/counter/counterSlice';
import axios from 'axios';
import { addUsers } from './features/users/usersSlice';
import todosSlice from './features/todos/todosSlice';

export default function App() {
  const counter = useSelector(getCounter());
  const dispatch = useDispatch()

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => dispatch(addUsers(res.data)))
  }, [])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos')
      .then(res => dispatch(saveTodos(res.data)))
  }, [])



  return (
    <div>
      <h1>Redux counter: {counter}</h1>
      <button onClick={() => dispatch(addCounter(3))}>PLUS</button>
    </div>
  )
}
