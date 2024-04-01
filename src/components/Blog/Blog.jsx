import React from 'react'
import './Blog.scss'
import axios from 'axios';

export default function Blog({ blog, handleDelete, setId, currentBlog, getPosts }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, desc } = e.target;
    const data = {
      title: title.value,
      desc: desc.value,
    }
    axios.patch(`http://localhost:3000/blogs/${currentBlog}`, data)
      .then(() => {
        getPosts()
        setId("", 'cancel')
      })
      .catch(err => console.log(err))

  }
  return (
    <div className='Blog'>
      <img src={blog.poster} alt="" />
      {
        (currentBlog === blog.id) ? (
          <form className='Blog__form' onSubmit={handleSubmit}>
            <input type="text" name="title" />
            <textarea name="desc" id="desc" cols="30" rows="4"></textarea>
            <div>
              <button className='cancel' onClick={() => setId("", 'cancel')}>cancel</button>
              <button className='save' type='submit'>save</button>
            </div>
          </form>
        ) : (
          <div className="Blog__content">
            <h2>{blog.title}</h2>
            <p>{blog.desc}</p>
            <button className='Blog__deleteBtn' onClick={() => handleDelete(blog.id)}>
              <i className='bi bi-x-lg'></i>
            </button>

          </div>
        )
      }
      <ul className='Blog__footer'>
        <li>
          <i className="bi bi-calendar2"></i>
          {blog.date}
        </li>
        <li>
          <i className="bi bi-pen" onClick={() => setId(blog.id)}></i>
        </li>
      </ul>

    </div>
  )
}
