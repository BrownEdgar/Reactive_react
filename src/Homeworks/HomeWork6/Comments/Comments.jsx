import React, { useEffect, useState } from 'react'
import "./Comments.scss"
export default function Comments() {
  const [comments, setComments] = useState([])
  useEffect(() => {
    const getComments = () => {
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
        .then((data) => data.json())
        .then(data => setComments(data))
    }
    getComments()

  }, [])

  return (
    <div className='Comments'>
      <h1 className='Comments__title'>Comments</h1>
      <ul className="Comments__info">{

            <ul>
              {
                comments.map(comment => {
                  return (
                    <li key={comment.id}>
                      <div>
                        <h3>{comment.name}</h3>
                        <p>{comment.email}</p>
                      </div>
                      <p>{comment.body}</p>
                    </li>
                  )
                })
              }
            </ul>

      }</ul>
    </div>
  )
}