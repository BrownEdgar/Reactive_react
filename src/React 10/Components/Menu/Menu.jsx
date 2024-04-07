import React from 'react'
import './Menu.scss'
import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../../routes'

export default function Menu() {
  return (
    <header>
      <div className='logo'>
        <NavLink to={ROUTES.HOME}>Products</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.Products}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
