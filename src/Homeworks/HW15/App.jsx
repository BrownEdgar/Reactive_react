import React, { useReducer } from 'react'
import reducer, { initialState } from './reducer'
import { PUSH, SORT } from './actionTypes'




export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handlePush = () => {
    dispatch({type: PUSH})
  }
  const handleSort = () => {
    dispatch({ type: SORT, payload: 'desc' })
  }
  return (
    <div className='App'>
      <h1>State: {JSON.stringify(state)}</h1>
      <button onClick={handlePush}>push</button>
      <button onClick={handleSort}>Sort</button>
    </div>
  )
}
