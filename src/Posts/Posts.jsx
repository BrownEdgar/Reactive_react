import React, { useState, useEffect } from 'react';
import { Formik, Form, Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { joinPaths } from '@remix-run/router';
import './Posts.scss'

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

  const handleSubmit = (values) => {
    console.log(values)
  }
  
  return (
      <div className="Posts">
      <Formik>
              <Form>
                  <input typeof="search" placeholder="search" />
              </Form>
          </Formik>
          {posts.map((elem) => {
              return (
                  <Link key={elem.id} to={`${elem.id}`}>
                      <h2>{elem.title}</h2>
                      <img src={elem.image} alt="" />
                  </Link>
              );
          })}
      </div>
  );
}

export default Posts