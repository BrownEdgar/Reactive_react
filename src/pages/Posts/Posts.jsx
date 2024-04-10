import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom';
import './Posts.scss'




export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [filteredPost, setfilteredPost] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [timeOutId, setTimeOutId] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setfilteredPost(data)
      })
  }, [])

  useEffect(() => {
    const searchPosts = (posts, value) => {
      console.log('searchPosts')
      if (value === '') return posts;
      return posts.filter(elem => elem.title.includes(value.toLowerCase()))
    }
    setfilteredPost(() => {
      return searchPosts(posts, searchValue)
    })
  }, [searchValue])
  const handleChange = (e) => {
    if (timeOutId !== null) {
      clearTimeout(timeOutId)
    }
    const timer = setTimeout(() => {
      setSearchValue(() => e.target.value)
    }, 1000)
    setTimeOutId(timer)
  }

  return (
    <div className='Posts'>
      <h1>{searchValue}</h1>
      <form>
        <input type="search" placeholder='search' name="search" onChange={handleChange} />
      </form>

      {filteredPost.map(elem => {
        return (
          <Link key={elem.id} to={`${elem.id}`}>
            <h2>{elem.title}</h2>
          </Link>
        )
      })}
    </div>
  )
}
