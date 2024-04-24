import React, {useEffect, useReducer} from 'react'
import reducer, {initialState} from './reducer'
import './App.scss'
import axios from 'axios'
import { SORT } from './types'



  


export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/todos', {
        }).then(res => dispatch({type: 'add-todos', payload: res.data}))
    }, [])




  return (
    <div className='App'>
        <code>
            {JSON.stringify(state, null, 3)}
            <button onClick={() => getSort(dispatch)}>Sort</button>
        </code>
    </div>
  )
}
