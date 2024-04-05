import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='Header'>
      <div className="Header__logo">
        <Link to="/" className="Menu__link">Bakery</Link>
      </div>
      <nav >
        <ul className='Header__menu menu'>
          <li className="Menu__item">
            <Link to="/" className="Menu__link">HOME</Link>
          </li>
          <li className="Menu__item">
            <Link to="/about" className="Menu__link">ABOUT</Link>
          </li>
          <li className="Menu__item">
            <Link to="/products" className="Menu__link">OUR PRODUCTS</Link>
          </li>
          <li className="Menu__item">
            <Link to="/news" className="Menu__link">NEWS</Link>
          </li>
          <li className="Menu__item">
            <Link to="/contact" className="Menu__link">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
