import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes'

export default function Navbar() {
  return (
    <header>
      <div className="bahery">
        <NavLink to={ROUTES.HOME}>Bahery</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.PRODUCTS}>Our products</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.NEWS}>News</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACT}>Contact us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}