import React, { useReducer } from 'react'
import './App.scss'
import reducer from './reducer'

function reducer(state, action) {
    switch (action.type) {
        case 'plus': return state + action.payload;
        case 'minus': return state - action.payload;
        
        default: return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, 0);

    const handleClick = () => {
        dispatch({ type: 'plus', payload: 4 })
    }

    const handleClick2 = () => {
        dispatch({ type: "minus", payload: 7 });
    };

  return (
      <div className='App'>
          <h1>State: {state}</h1>
          <button onClick={handleClick}>plus</button>
          <button onClick={handleClick2}>minnus</button>
      </div>
  );
}

export default App