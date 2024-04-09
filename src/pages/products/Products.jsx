import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Contact.scss'

export default function Products() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
    .then(res => setData(res))
  })
  
  return (
    <div className='Products'>
        <h1>Our products</h1>
    </div>
  )
}
