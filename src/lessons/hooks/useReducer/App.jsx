import React, { useReducer } from 'react'
import "./App";
import reducer, { initianState } from './reducer';
import { PUSH, SORT, PLUS } from './actionTypes';


export default function App() {
  const [state, dispatch] = useReducer(reducer, initianState);


  const handleClick = () => {
    dispatch({ type: PUSH, payload: 4 })
  }
  const handleClick2 = () => {
    dispatch({ type: PLUS })
  }

  return (
    <div className='App'>
      <h1>State: {JSON.stringify(state)}</h1>
      <button onClick={handleClick2}>PLUS</button>

    </div>
  )
}
