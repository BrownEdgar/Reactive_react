import React, {useEffect, useReducer} from 'react'
import reducer, {initialState} from './reducer'
import './App.scss'
import axios from 'axios'
import { SORT } from './types'



    
    
// const getSort = (state, sortType) => {
//     return sortType === 'asc'
//     ? state.toSorted((a, b) => a - b)
//     : state.toSorted((a, b) => b - a)
//   }


export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/todos', {
            params:{
                _limit: 18
            }
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
