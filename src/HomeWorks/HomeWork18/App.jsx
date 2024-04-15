import React, { useEffect, useReducer } from 'react'
import axios from "axios"

import reducer, { initialState } from './reducer'
import { GETTODOS } from './actionType'


export default function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState )
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = parseInt(e.target.elements.count.value)
    if (!isNaN(value) && value >= 100) {
      dispatch({ type: "GETTODOS", payload: value })
      axios(`http://jsonplaceholder.typicode.com/todos?_limit=${state.total}`)
        .then(res => dispatch({ type: "GETPOSTS", payload: res.data }))

      e.target.elements.count.value = "";
    }
  
  }





  

  
  
  
  

  return (
    <div>
      <form onSubmit={handleSubmit} className='App__form'>
        <div className='App__inputData'>
          <label htmlFor="count">How many todos do you want?</label>
          <input type="text" id='count' name='count' />

        </div>
        <div className="App__btns">
          <button type='submit'>GET</button>
        </div>
      </form>
      {
        state.todos.map(elem => {
          return <p>{elem.id}</p>
        })
      }

    </div>
  )
}
