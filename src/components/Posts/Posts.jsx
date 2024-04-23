import React from 'react'
import './Posts.scss'
import PostLoader from '../Loaders/PostsLoader'

export default function Posts({ data, loading }) {

  if (!loading) {
    return <div className="Posts">
      <PostLoader />
      <PostLoader />
      <PostLoader />
    </div>
  }

  return (
    <div className='Posts'>
      {
        data.map(elem => {
          return (
            <div key={elem.id}>
              <h2>{elem.title || elem.name || elem.email}</h2>
              <p>{elem.body || elem.username}</p>
            </div>
          )
        })
      }
    </div>
  )
}
