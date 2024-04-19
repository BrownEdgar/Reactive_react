import React from 'react'
import useFetch from './useFetch';
import useCount from './useCount';
import useArray from './useArray';

export default function App() {
  const arr = useArray({ quantity: 21, min: 15, max: 69 })
  // const [count, {plus, minus}] = useCount(initialValue = 0, min = 0, max = 12)
  const [data] = useFetch({ baseURL: 'https://jsonplaceholder.typicode.com/', target: 'todos'})
  console.log(data);
  console.log(arr);
  return (
    <div className="App">
      {/* <h1>Count {count}</h1>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button> */}
    </div>
  )
}
