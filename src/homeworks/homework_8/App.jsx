import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import reducer, { initialState } from './reducer'
import './App.scss'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos', {
      params: {
        _limit: initialState.total 
      }
    }).then(res => dispatch({type: 'add-todos', payload: res.data}))
  }, [])

  const handleDelete = (id) => {
    dispatch({type: 'delete', payload: id})
  }

  const handleSort = () => {
    dispatch({type: 'sort'})
  }

  return (
    <div className='App'>
      <h1>{JSON.stringify(state.arr)}</h1>
      <button onClick={handleSort}>To sort</button>
      <div className="App__todos">
      {
        state.todos.map(todos => {
          return (
            <div key={todos.id}>
              <h2>{todos.title}</h2>
            </div>
          )
        })
      }
      </div>
      <div className='App__products'>
        {state.products.map(product => {
          return(
            <div key={product.id}>
              <img src={product.image} alt="" />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <button onClick={() => handleDelete(product.id)}>
                <i className="bi bi-x-circle-fill"></i>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
