import React from 'react'
import './NavBar.scss'
import { Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
    <div className='logo'>
        <a href="https://www.facebook.com/?locale=hy_AM">
             <i className="bi bi-list"></i>
        </a>
    </div>
    <nav>
        <ul>
            <li>
               <Link to="/Home"> Home</Link>
            </li>
            <li>
               <Link to="/About">About</Link>
            </li>
            <li>
               <Link to="/News">News</Link> 
            </li>
            <li>
               <Link to="/Contact">Contact Us</Link> 
            </li>
        </ul>
    </nav>
</header>
  )
}
