import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'

export default function NavBar() {
  return (
    <header>
      <div className='logo'>
        <NavLink to='/'><h1>Logo</h1></NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/products'>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
