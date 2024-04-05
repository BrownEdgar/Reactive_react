import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <Link to="#"><h1>Bakery</h1></Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Products">Our Products</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/Contacts">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
