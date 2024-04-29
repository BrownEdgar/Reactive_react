import React from 'react'
import { Link } from 'react-router-dom'

import './ErorrPage.scss'

export default function ErrorPage() {
  return (
    <div className='ErrorPage'>
      <h1>404 error</h1>
      <Link to='/' className='link'>Go Home</Link>
    </div>
  )
}