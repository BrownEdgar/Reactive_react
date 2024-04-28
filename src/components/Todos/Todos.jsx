import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAsyncTodos } from '../../features/todos/todosSlice';
import './App.scss'

function Todos() {
    const todos = useSelector(getAllTodos)

    const dispatch = useDispatch()
    console.log("todos", todos)
    useEffect(() => {
      dispatch(getAsyncTodos())
    }, [])
    

  return (
    <div>Todos</div>
  )
}

export default Todos