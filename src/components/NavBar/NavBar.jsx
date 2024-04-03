import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <Link to="/">LOGO</Link>
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
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
