import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { addCounter } from '../../features/counter/counterSlice';
import './App.scss'
import usersSlice, { addUsers } from '../../features/users/usersSlice';
import { getAsyncTodos } from '../../features/todos/todosSlice';
import Todos from 'components/Todos/Todos';

function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch()

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => dispatch(addUsers(res.data)))
    }, []);

    useEffect(() => {
        // axios('https://jsonplaceholder.typicode.com/todos')
        // .then(res => dispatch(saveTodos(res.data)))
        dispatch(getAsyncTodos())
    }, []);
    
  return (
    <div>
        <h1>Redux counter: {counter}</h1>
        <button onClick={() => dispatch(addCounter(5))}>PLUS</button>
        <Todos />
    </div>
  )
}

export default App;