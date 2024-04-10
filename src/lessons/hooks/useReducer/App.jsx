import React, { useReducer } from 'react'
import "./App";

function reducer(state, action) {
  switch (action.type) {
    case 'plus': return state + action.payload;
    case 'minus': return state - 1;

    default: return state;

  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, 0);


  const handleClick = () => {
    dispatch({ type: 'plus', payload: 4 })
  }
  const handleClick2 = () => {
    dispatch({ type: 'minus' })
  }

  return (
    <div className='App'>
      <h1>State: {state}</h1>
      <button onClick={handleClick2}>MINUS</button>
      <button onClick={handleClick}>PLUS</button>
    </div>
  )
}
