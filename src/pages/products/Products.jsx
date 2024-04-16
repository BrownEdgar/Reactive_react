import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Products.scss'
import { Link } from 'react-router-dom'

export default function Products() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
    .then(res => setData(res.data))
  })
  
  return (
    <section className='Products'>
      <div className='Products__container'>
        {data.map((elem) => {
          return (
            <Link to={`${elem.id}`} key={elem.id}>
              <img src={elem.image} alt="" />
              <h1>{elem.title}</h1>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
