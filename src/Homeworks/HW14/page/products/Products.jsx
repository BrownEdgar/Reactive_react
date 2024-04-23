import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Products.scss'
import axios from "axios";
export default function Products() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then(res => setPosts(res.data))
  }, [])

  return (
    <div className='Products'>
      {
        posts.map((elem) => {
          return (
            <div key={elem.id}>
              <Link key={elem.id} to={`${elem.id}`}>
                <img src={elem.image} alt="" />
                <h2>{elem.title}</h2>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
