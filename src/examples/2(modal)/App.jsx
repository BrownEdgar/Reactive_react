import React, { useEffect, useState } from 'react'
import axios from "axios";
import './App.scss'

const DB_URL = import.meta.env.VITE_DB_URL;

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios(DB_URL + "comments").then((res) => setData(res.data));
    }, [])

  return (
      <div className='App'>
          <h1 className='App__title'>React Modal Example</h1>
          <div className='App__posts'>
              {data.map(elem => {
                  return (
                      <div key={elem.id}>
                          <h2>{elem.name}</h2>
                  </div>
                )
            })}
          </div>
    </div>
  )
}

export default App