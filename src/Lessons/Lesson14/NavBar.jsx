import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../routes'
import './NavBar.scss'

const setActive = ({ isActive }) => isActive ? 'active__link' : ''

export default function Navbar() {
    return (
      <header>
        <div className="logo">
          <Link to="#"><h1>LOGO</h1></Link>
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
              <NavLink to={ROUTES.CONTACT} className={setActive}>Contact page</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.POSTS} className={setActive}>Posts</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }