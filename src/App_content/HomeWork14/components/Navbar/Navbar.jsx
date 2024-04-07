import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../../../routes'
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
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.PRODUCTS}>Our Products</Link>
          </li>
          <li>
            <Link to={ROUTES.NEWS}>News</Link>
          </li>
          <li>
            <Link to={ROUTES.CONTACT}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}