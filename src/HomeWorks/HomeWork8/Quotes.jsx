import React, { useEffect, useState } from 'react'
import "./Quotes.scss"
import Quote from "./Quote/Quote"
import axios from 'axios'

export default function Quotes() {
  const [quote, setquote] = useState([])
 
  useEffect(() => {
      axios.get("https://dummyjson.com/quotes")
        .then(res => setquote(res.data.quotes))
  
}, [])

  const handleClick = (index) => {
    if (!currentId.includes(index)) {
      setcurrentId([...currentId, index])
    } else {
      setcurrentId(currentId.filter((elem) => elem !== index))
    }
  }

  const [currentId, setcurrentId] = useState([])


  return (
    <div className='Quotes'>
    <h1>Quotes</h1>
      <Quote data={quote} handleClick={handleClick} currentId={currentId} setcurrentId={setcurrentId}/>
    </div>
    
  )

}
