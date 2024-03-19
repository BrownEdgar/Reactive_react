import React, { useState, useEffect } from 'react'
import  axios  from 'axios'
import './App.scss'
import Quotes from './Quotes/App'

export default function User() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = () => {
      axios('https://dummyjson.com/quotes')
      .then((res) => setData(res))
    }
    console.log(res);
    getData()
  }, [])

  return (
    <div>
      {
        data.map(elem => {
          return <Quotes />
        })
      }
    </div>
  )
}
