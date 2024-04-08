import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Posts.scss'


export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])


  return (
    <div className='Posts'>
      {posts.map(elem => {
        return (
          <Link key={elem.id} to={`${elem.id}`}>
            <h2>{elem.title}</h2>
          </Link>
        )
      })}
    </div>
  )
}
