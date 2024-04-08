import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Products.scss'
import axios from "axios";
export default function Products() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then(data => setPosts(data))
  }, [])

  return (
    <div className='Products'>
      {
        posts.map((elem) => {
          return (
            <Link key={elem.id}>
              <h2>{elem.title}</h2>
              <img src={elem.image} alt="" />
            </Link>
          )
        })
      }
    </div>
  )
}
