import React from 'react'
// import useCount from './useCount';
// import useFetch from './useFetch';
import useArray from './useArray';
import './App.scss'

function App() {
    // const [count, { plus, minus }] = useCount({ initialValue: 0, min: 3, max: 12 })

    const arr = useArray({ quantity: 21, min: 15, max: 69 })
    console.log(arr)
    
    // const [data] = useFetch({ baseURL: 'https://jsonplaceholder.typicode.com/', target: 'todos' })
    // console.log(data)

    // const [state, dispatch] = useReducer(reducer, 0, () => {
    //     return Math.round(Math.random() * 1e5)
    // })
    
    return (
    <div className='App'>
        {/* <h1>Count {count}</h1>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button> */}
    </div>
  )
}

export default App;