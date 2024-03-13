import React, { useState, useEffect } from 'react'
import './App.scss'

export default function App() {
  const [data, setData] = useState([])
  const getToDos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=9')
      .then((res) => res.json())
      .then(data => setData(data));
    // getUsers([])
    // getComents([])
    // getPosts([])
  }
  const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=9')
      .then((res) => res.json())
      .then(data => setData(data));
    // getUsers([])
    // getPosts([])
    // getToDos([])
  }
  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=9')
    .then((res) => res.json())
    .then(data => setData(data));
    // getPosts([])
    // getComents([])
    // getToDos([])
  }
  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
      .then((res) => res.json())
      .then(data => setData(data));
      // getUsers([])
      // getComents([])
      // getToDos([])
    }
    useEffect(() => {
      getToDos()
      getComments()
      getUsers()
      getPosts()
    }, [])
    
  return (
    <div className='App'>
      <div className='App__btn'>
        <button onClick={getPosts}>Get Posts</button>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={getComments}>Get Comments</button>
        <button onClick={getToDos}>Get ToDos</button>
      </div>
      <div className='App__data'>
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
    </div>
  )
}
