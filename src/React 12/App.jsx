import React, { useEffect, useReducer } from 'react'
import './App.scss'
import reducer,{initialState} from './reducer'
import axios from 'axios'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/todos?_limit=18')
    .then(res => dispatch({type:'add-todos',payload:res.data}))
  },[])
  const handleSort = () => {
    dispatch({ type: 'sort', payload: 'arr' })
  }

  return (
    <div className='App'>
      <code>
        {JSON.stringify(state,null,1)}
      </code>
      <button onClick={handleSort}>Sort</button>
    </div>
  )
}
