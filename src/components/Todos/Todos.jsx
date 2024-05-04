import { getAllTodos, getAsyncTodos } from '@f/todos/todosSlice'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Todos.scss'


export default function Todos() {
  const todos = useSelector(getAllTodos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAsyncTodos())
  }, [])

  return (
    <div className='Todos'>
      {
        todos.data.map(elem => {
          return (
            <div key={elem.id}>
              <h2>{elem.title}</h2>
            </div>
          )
        })
      }
    </div>
  )
}
