import axios from 'axios'
import React, { useState, useEffect } from 'react'

import './App.scss'

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios('https://dummyjson.com/quotes')
      .then(res => setData(res.quotes))
  }, [])

  return (
    <div className='App'>
      <h1>jdncjdcdkc</h1>
      {
        data.map(elem => {
          return (
            <div key={elem.id}>
              <h2>{elem.quotes.quote}</h2>
              <p>{elem.quotes.author}</p>
            </div>
          )
        })
      }
    </div>
  )
}
