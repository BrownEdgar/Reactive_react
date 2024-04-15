import React, { useEffect, useState } from 'react'
import "./Todos.scss"
export default function Todos() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const getTodos = () => {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((data) => data.json())
        .then(data => setTodos(data))
    }
    getTodos()

  }, [])

  return (
    <div className='Todos'>
      <h1 className='Todos__title'>Our Tasks</h1>
      <ul className="Todos__info">{
        todos.map(todos => {
          return (
            <li key={todos.id}>{todos.title + "?"} - {todos.completed === true ? "yes" : "no"}</li>
          )
        })
      }</ul>
    </div>
  )
}