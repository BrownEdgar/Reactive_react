import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ROUTES from '../../routes'
import './Product.scss'

export default function Product() {
	const [product, setProduct] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios(`https://fakestoreapi.com/products/${id}`)
		.then(res => setProduct(res.data))
	}, [id])

  return (
    <div className='Product'>
      <div className="Product__content">
				<img src={product.image} alt="" />
				<div className='Product__body'>
					<div className="Product__text">
						<h2>{product.title}</h2>
						<p>{product.description}</p>
						<span>Price: ${product.price}</span>
					</div>
					<div className='Product__category'>
						<h3>{product.category}</h3>
					</div>
					<Link to={ROUTES.PRODUCTS}>All products</Link>
				</div>
			</div>
    </div>
  )
}
