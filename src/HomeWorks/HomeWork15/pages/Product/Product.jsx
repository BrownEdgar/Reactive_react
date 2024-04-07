import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Product.scss"
import ROUTES from "../../../../routes"

export default function Product() {
  const [product, setproduct] = useState({})
  const {id} = useParams()
  useEffect(() => {  
    axios(`https://fakestoreapi.com/products/${id}`)
      .then(res => setproduct(res.data))

  }, [id])
  

  return (
    <div className='Product'>
      <div className="Product__content" key={product.id}>
        <img src={product.image} alt="" className='Product__image' />
        <div className="Product__textContent">
          <div className="Product__titleAndDesc">
            <h2>{product.title}</h2>
            <p className='Product__price'>{product.price}</p>
            <div className="Product__rate">
              {/* <p> {<i className="bi bi-star"></i>.repeat(Math.round(product?.rating?.rate))} </p> */}
              <p><i className="bi bi-star-fill"></i> {product?.rating?.rate}</p>
              <p>{product?.rating?.count} estimates</p> 
            </div>
            <p>{product.description}</p>
          </div>
          <div className="Product__category">
            <p>Category: {product.category}</p>
          </div>

          <Link to={ROUTES.PRODUCTS}>ALL PRODUCTS</Link>
        </div>
      </div>
    </div>
  )
}
