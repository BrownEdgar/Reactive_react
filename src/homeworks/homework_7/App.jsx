import React, { useReducer } from 'react'
import './App.scss'
import { ADDUSER, DELETE, PUSH, RANDOMPUSH, REPLACE, SHUFFLE } from './type'
import { initialState } from './reducer'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleRandom = () => {
    dispatch({type: RANDOMPUSH})
  }

  const toggleShuffle = () => {
    dispatch({type: SHUFFLE})
  }

  const handleDelete = () => {
    dispatch({type: DELETE})
  }

  const toggleReName = () => {
    dispatch({type: REPLACE})
  }

  const handleAge = () => {
    dispatch({type: PUSH})
  }

  const toggleUser = (e) => {
    e.preventDefault()
    dispatch({type: ADDUSER, payload: e.target.username.value});
    e.target.reset()
  }

  return (
    <div className='App'>
      <h1>{JSON.stringify(state)}</h1>
      <div className="App__btn">
        <form onSubmit={toggleUser}>
          <input type="text" placeholder='username' name='username' />
          <button type='submit'>Add User</button>
        </form>
        <div>
          <button onClick={toggleRandom}>Random Number</button>
          <button onClick={toggleShuffle}>Shuffle</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleAge}>Add age</button>
          <button onClick={toggleReName}>Replace</button>
        </div>
      </div>        
    </div>
  )
}
