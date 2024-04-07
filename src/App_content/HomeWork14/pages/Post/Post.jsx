import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ROUTES from '../../../../routes'
import { Link, useParams, useNavigate } from 'react-router-dom'
import './Post.scss'

function Post() {
    const [post, setPost] = useState({});
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
    }, [id])

  return (
    <div>
        <h2>Welcome to the special post N ? {id}</h2>
        <div className="Post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
        {/* <div className='buttons'>
            <button className='btn btn-prev' onClick={() => navigate(`/${ROUTES.POSTS}/${+id - 1}`)}></button>
            <button className='btn btn-next' onClick={() => navigate(`/${ROUTES.POSTS}/${+id + 1}`)}></button>
        </div> */}
        <Link className='Link' to={`/${ROUTES.POSTS}`}>All posts</Link>
    </div>
  )
}

export default Post