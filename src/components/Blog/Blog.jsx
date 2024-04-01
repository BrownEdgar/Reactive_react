import React from 'react'
import './Blog.scss'

export default function Blog({ blog }) {
  return (
    <div className='Blog'>
      <img src={blog.poster} alt="" />
      <div className="Blog__content">
        <h2>{blog.title}</h2>
        <p>{blog.desc}</p>


      </div>
      <ul className='Blog__footer'>
        <li>
          <i className="bi bi-calendar2"></i>
          {blog.date}
        </li>
      </ul>

    </div>
  )
}
