import { Link } from 'react-router-dom';

import "./Header.scss";

export default function Header() {
  return (
     <div className="header">
        <Link to="/" className="header__logo">Bahery</Link>
        <nav className="header__nav">
           <ul className="header__menu menu">
              <li className="menu__item"><Link to="/" href="!#" className="menu__link">HOME</Link></li>
              <li className="menu__item"><Link to="/about" href="!#" className="menu__link">ABOUT</Link></li>
              <li className="menu__item"><Link to="/ourproducts" href="!#" className="menu__link">OUR PRODUCTS</Link></li>
              <li className="menu__item"><Link to="/news" href="!#" className="menu__link">NEWS</Link></li>
              <li className="menu__item"><Link to="/contact" href="!#" className="menu__link">CONTACT US</Link></li>
           </ul>
        </nav>
      </div>
  );
}
