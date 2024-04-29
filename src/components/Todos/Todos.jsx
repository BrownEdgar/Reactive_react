import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos, getAsyncTodos } from '@f/todos/todosSlice';
import './Todos.scss'

function Todos() {
    const todos = useSelector(getAllTodos)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAsyncTodos())
    }, [])
    

  return (
    <div className='Todos'>
        {
            todos.data.map(elem => {
                return (
                    <div key={elem.id}>
                        <h2>{elem.title}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Todos;