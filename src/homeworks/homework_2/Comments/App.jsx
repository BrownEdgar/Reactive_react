import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'

const DB_URL = import.meta.env.VITE_DB_URL

export default function User() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = () => {
      axios(
        {
          baseURL: DB_URL,
          url: 'comments',
          params:{
            _limit:9
          }
        }
      ).then((res) => setData(res.data))
    }
    getData()
  }, [])

  return (
    <div className='User'>
      <h1>Comments</h1>
      <div className='User__comments'>
        {
          data.map(elem => {
            return(
              <div key={elem.id}>
                <h3>{elem.body}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
