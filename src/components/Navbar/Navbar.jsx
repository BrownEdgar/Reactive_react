import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
  return (
    <header>
      <div className="bakery">
        <Link to="/">Bakery</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Our products</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
