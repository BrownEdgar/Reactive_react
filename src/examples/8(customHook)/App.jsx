import React, { useReducer } from 'react';
import useCount from "./useCount";
import './App.scss';
import { useFetcher } from 'react-router-dom';

function App() {
    const [count, { plus, minus }] = useCount({
        initialValue: 0,
        mi: 0,
        max: 12,
    });

    const [data] = useFetcher({ baseUrl: 'https://jsonplaceholder.typicode.com/', target: 'todos' })

    const [state, dispatch] = useReducer(reducer, 0, () => {
        return Math.round(Math.random() * 1e5)
    });

  return (
      <div className='App'>
          <h1>count {count}</h1>
          <button onClick={plus}>PLUS</button>
          <button onClick={minus}>MINUS</button>
    </div>
  )
}

export default App