import { Link, NavLink } from 'react-router-dom';

import "./Header.scss";

export default function Header() {
   return (
     <>
      <div className="header">
         <Link to="/" className="header__logo">Bahery</Link>
         <nav className="header__nav"> 
            <ul className="header__menu menu">
               <li className="menu__item"><NavLink to="/" href="!#" className="menu__link">HOME</NavLink></li>
               <li className="menu__item"><a href="!#" className="menu__link">ABOUT</a></li>
               <li className="menu__item"><a href="!#" className="menu__link">OUR PRODUCTS</a></li>
               <li className="menu__item"><a href="!#" className="menu__link">NEWS</a></li>
               <li className="menu__item"><a href="!#" className="menu__link">CONTACT US</a></li>
               <li className="menu__item"><NavLink to="/products" className="menu__link">PRODUCTS</NavLink></li>
            </ul>
         </nav>
      </div>
     </>
  );
}
