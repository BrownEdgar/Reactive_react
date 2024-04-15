import React, { useState, useEffect } from 'react';
import Todo from './Todo/Todo';
import axios from 'axios';

import './App.scss'
import classNames from 'classnames';

export default function App() {
  const [data, setData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(-1)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => setData(res.data))
  }, [])

  const toggleStatus = (id) => {
    const result = data.map(elem => {
      if (elem.id === id) {
        elem.completed = !elem.completed
      }
      return elem
    })
    setData(result)
  }

  return (
    <div className='App'>
      {
        data.map(todo => {
          return <Todo todo={todo} key={todo.id} toggleStatus={() => toggleStatus(todo.id)} />
        })
      }


    </div>
  )
}
