import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes'

const setActive = ({isActive}) => isActive ? 'active__link' : ''

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <NavLink to={ROUTES.HOME}><h1>Bakery</h1></NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME} className={setActive}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT} className={setActive}>About</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.PRODUCTS} className={setActive}>Our Products</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.NEWS} className={setActive}>News</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACTS} className={setActive}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
