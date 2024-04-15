import React, { useEffect, useReducer } from 'react'
import './App.scss'
import reducer,{initialState} from './reducer'
import axios from 'axios'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/todos')
    .then(res => dispatch({type:'add-todos',payload:res.data}))
  },[])

  return (
    <div className='App'>
      <code>
        {JSON.stringify(state,null,1)}
      </code>
      <button></button>
    </div>
  )
}
