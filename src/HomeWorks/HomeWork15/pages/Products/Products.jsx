import React, { useEffect, useState } from 'react'
import "./Products.scss"
import axios from "axios"
import { Link } from 'react-router-dom'

export default function Product() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))

  }, [])
  
  return (
    <div className='Products'>
      <div className="Products__container">
        {
          products.map(product => {
            return(
              <Link to={`${product.id}`}>
                <div className="Products__content" key={product.id}>
                  <img src={product.image} alt="" className='Products__image' />
                  <div className="Products__textContent">
                    <div className="Products__title">
                      <p>{product.title}</p>
                    </div>
                    <div className="Products__category">
                      <p>Category: {product.category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
