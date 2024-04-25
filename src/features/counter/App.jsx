import React from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter } from './counterSlice'

export default function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <div className='App__content'>
        <h1>Count: {counter}</h1>
      </div>
      <button onClick={() => dispatch(addCounter())}>Plus</button>
    </div>
  )
}
