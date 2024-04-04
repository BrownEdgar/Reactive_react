import React from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <header>
      <div className='Bahery'>
        <Link to='/'>Bahery</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/ourproducts">Our Products</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
            </li>
        </ul>
      </nav>
    </header>
    
  )
}
