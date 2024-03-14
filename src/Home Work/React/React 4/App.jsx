import React, { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'
// import instance from './axios'

export default function App() {
  const [data, setData] = useState([])
  // const [option, setOption] = useState('todos')
  // const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setData(data.toSpliced(0))
  }

  useEffect(() => {
    // const getData = () => {
    axios('https://jsonplaceholder.typicode.com/todos?_limit=50')
      //   setLoading()
      //   instance(option, {
      //     params: {
      //       _limit: 9
      //     }
      //   })
      .then((res) => setData(res.data))
    //     .finally(() => setLoading(false))
    // }

  })
  return (
    <div className='App'>
      {
        data.map((elem,index)=> {
          return (
            <div key={elem.id}>
              <ul className='App__list'>
                <li className='App__liststyle'>{elem.title}</li>
                <li className='App__liststyle'>{elem.completed ? "yes" : "no"}</li>
                <button onClick={handleClick}>Delete</button>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}
