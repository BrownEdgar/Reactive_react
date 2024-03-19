import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'
import Comments from './Comments/App'

const DB_URL = import.meta.env.VITE_DB_URL

export default function User() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = () => {
      axios(DB_URL + 'comments?_limit=9')
        .then((res) => setData(res.data))
    }

    getData()
  }, [])

  return (
    <div>
      {
        data.map(elem => {
          return <Comments elem={elem} key={elem.id} />
        })
      }
    </div>
  )
}
