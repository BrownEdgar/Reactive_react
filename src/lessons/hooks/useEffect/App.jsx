import React, { useState, useEffect } from 'react'
import './App.scss'

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then(data => setData(data))
    }
    getData()
  }, [])

  const handleDelete = (id) => {
    const result = data.filter(elem => elem.id !== id)
    setData(result)
  }

  return (
    <div className='App'>
      <h1>Our Posts</h1>
      <div className="App__posts">
        {
          data.map(post => {
            return (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button>
                  <i
                    className='bx bxs-message-square-x bx-md'
                    onClick={() => handleDelete(post.id)}></i>
                </button>
              </div>
            )
          })
        }
      </div>


    </div>
  )
}
