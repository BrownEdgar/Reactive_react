import React, { useEffect, useState } from 'react'
import './Products.scss'
import { Link } from 'react-router-dom'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  return (
    <div className='Products'>
      {products.map(elem =>{
        return(
          <Link key={elem.id}>
            <div className='Products__content'>
              <div className='Products__content-cloth'>
                <img src={elem.image} alt="image" />
              </div>
              <div className='Products__content-title'>
                <h2>{elem.title}</h2>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
