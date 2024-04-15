import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.scss';
import Quote from './Quote/Quote';



export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/quotes')
      .then(res => setData(res.data))
  }, [])

  return (
    <div>
      {
        data.map(quote => {
          <Quote Quote={quote} key={quote} />
        })
      }
    </div>
  )
}
