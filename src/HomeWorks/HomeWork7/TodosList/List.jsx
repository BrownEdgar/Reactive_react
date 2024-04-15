import React, { useEffect, useState,} from 'react'
import "./List.scss"
import classNames from "classnames"
import instance from '../axios'
import { FaTrashAlt } from "react-icons/fa";
export default function List() {
  let count = 0;

  const [todos, setTodos] = useState([])
  useEffect(() => {
    const getTodos = () => {
  
      instance("todos", {
        params: {
          _start: 10,
          _limit: 10
        }
      })
        .then(res => setTodos(res.data))
    }
    getTodos()
  }, [])
  const Delete = (id) => {
    setTodos(todos.filter(item => item.id !== id))
    count--;
  }

  return (
    <div className='List'>
      <table className="List__table">
        
        <thead className="List__head">
            <tr>
              <th className='number'>№</th>
              <th>Mission</th>
              <th>State</th>
              <th>Delete</th>
            </tr>
         </thead>
        <tbody className="List__body">
            { todos.map((todos) => {
              return (
                <tr key={todos.id}>
                  {todos.completed == false}
                  <td className='number'>{++count}</td>
                  <td>{todos.title}</td>
                  <td className={classNames({ green: todos.completed,
                  red: !todos.completed })}>{todos.completed ? "completed" : "in process"}</td>
                  <td>
                    <button onClick={() => Delete(todos.id)} className="List__trash"><FaTrashAlt/></button>
                  </td>
                </tr>
              
              )
            })
            }
        </tbody>
      </table>
    </div>
  )
}
