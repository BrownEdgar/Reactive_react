import axios from 'axios'
import React, { useState, useEffect } from 'react'
import classNames from "classnames";
import './App.scss'

export default function App() {
  const [data, setData] = useState([])
  const [like, setLike] = useState(false)

  useEffect(() => {
    axios('https://dummyjson.com/quotes')
      .then(res => setData(res.data.quotes))
  }, [])

  return (
    <div className='App'>
      {
        data.map(elem => {
          return (
            <div key={elem.id}>
              <h2>{elem.quote}</h2>
              <p>{elem.author}</p>
              {/* <i className={classNames('bx bxs-like bx-md', {
                'bx bxs-like-red bx-md': setLike(!like),
                'bx bxs-like bx-md': setLike(like)
              })}></i> */}
            </div>
          )
        })
      }
    </div>
  )
}
