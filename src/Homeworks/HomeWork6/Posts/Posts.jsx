import React, { useEffect, useState } from 'react'
import "./Posts.scss"
export default function Posts() {
  const [posts, setposts] = useState([])
  useEffect(() => {
    const getPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((data) => data.json())
        .then(data => setposts(data))
    }
    getPosts()
    
  },[])
  
  return (
    <div className='Posts'>
      <h1 className='Posts__title'>Our Posts</h1>
      <div className="Posts__info">{
        posts.map(post => {
          return (
            <div key={post.id} >
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          )
        })
      }</div>
    </div>
  )
}
