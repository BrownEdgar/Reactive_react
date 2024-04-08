import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'
import ROUTES from '../../routes'

const setActive = ({ isActive }) => isActive ? "active__link" : ''

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <NavLink to={ROUTES.HOME}>LOGO</NavLink>
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
            <NavLink to={ROUTES.CONTACT} className={setActive}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.POSTS} className={setActive}>Posts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
