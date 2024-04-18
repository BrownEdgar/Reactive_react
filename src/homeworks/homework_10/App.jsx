import React from 'react'
import useArray from './useArray'
import './App.scss'


export default function App() {
  const {aray, push, clear, update, sort} = useArray([24, 32, 97, 85, 77])

  return (
    <div className='App'>
      <div className="App__content">
        <h1>{JSON.stringify(aray)}</h1>
        <div className="App__btn">
          <button onClick={() => push(Math.ceil(Math.random() * (100 - 10) + 10))}>Push random</button>
          <button onClick={clear}>Delete all</button>
          <button onClick={() => update(1, 9)}>To change</button>
          <button onClick={ sort}>To sort</button>
        </div>
      </div>
    </div>
  )
}
