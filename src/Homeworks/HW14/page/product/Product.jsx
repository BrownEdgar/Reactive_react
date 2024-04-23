import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ROUT from '../../route'
import './Product.scss'

export default function Product() {
  const [products, setProducts] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProducts(res.data))
  }, [id])

  return (
    <div>
      <div className="Product">
        <div className="Product__img">
          <img src={products.image} alt="" />
        </div>
        <div className="Product__desc">
          <h1>{products.title}</h1>
          <h4>{products.category}</h4>
          <h5>{products.description}</h5>
          <p>Price - {products.price}</p>
          <p>Rate - {products?.rating?.rate}</p>
          <p>Count - {products?.rating?.count}</p>
        </div>
      </div>
      <Link className='Link' to={ROUT.PRODUCTS}>All Products</Link>
    </div>
  )
}
