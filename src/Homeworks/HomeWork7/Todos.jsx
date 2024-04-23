import React, { useEffect, useState } from 'react'
import classNames from "classnames"
import instance from './axios'
import "./Todos.scss"
import List from "./TodosList/List"
import SidebarLoader from "../Loaders/TodosLoader"
export default function Todos() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(loading);
  useEffect(() => {
    const getTodos = () => {
      setLoading(true)
      instance("todos", {
          params: {
            _start: 10,
            _limit: 10
          } 
      })
        .then(res => setTodos(res.data))
        .finally(() => setLoading(false))
    }
    getTodos()

  }, [])

  return (
    <div className='Todos'>
      <h1 className='Todos__title'>Our Tasks</h1>
      <div className='Todos__list'>
      {
        loading ? <SidebarLoader /> : <List data={todos} />
      }</div>
    </div>
  )
}