import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'


export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className="logo">
        <NavLink to='/'><h1>Estatien</h1></NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Us</NavLink>
          </li>
          <li>
            <NavLink to='/properties'>Properties</NavLink>
          </li>
          <li>
            <NavLink to='/services'>Services</NavLink>
          </li>
        </ul>
      </nav>
      <div className="Navbar__btn">
        <button>Contact Us</button>
      </div>
    </div>
  )
}
