import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Contact.scss'
import { Link } from 'react-router-dom'

export default function Products() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
    .then(res => setData(res.data))
  })
  
  return (
    <div className='Products'>
      {data.map((elem) => {
        return 
          <Link key={elem.id}>
            <h1>{elem.title}</h1>
            <img src={elem.image} alt="" />
          </Link>
      })}
    </div>
  )
}
