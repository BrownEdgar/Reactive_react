import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'

export default function ErrorPage() {
  return (
    <div className='ErrorPage'>
      <Link to='/' className='link'> 🏠 Go home</Link>
    </div>
  )
}
