import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header className='Header'>
      <div className="Header__logo">
        <Link to="/" className="Menu__Link">Bakery</Link>
      </div>
      <nav >
        <ul className='Header__menu menu'>
          <li className="Menu__item">
            <Link to="/" className="Menu__Link">HOME</Link>
          </li>
          <li className="Menu__item">
            <Link to="/about" className="Menu__Link">ABOUT</Link>
          </li>
          <li className="Menu__item">
            <Link to="/products" className="Menu__Link">OUR PRODUCTS</Link>
          </li>
          <li className="Menu__item">
            <Link to="/news" className="Menu__Link">NEWS</Link>
          </li>
          <li className="Menu__item">
            <Link to="contact" className="Menu__Link">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
