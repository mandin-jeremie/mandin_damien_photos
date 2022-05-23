import React from 'react'
import { Link } from "react-router-dom";


import './header.scss'
const Header = () => {
  return (
    <header className='containerHeader'>
      <div className="blocLogo">
        <Link to="/">logo</Link>
      </div>
      <nav className="navButtons">
        <Link className="navButton" to="/">Home</Link>
        <Link className="navButton" to="/portefolio">Portefolio</Link>
        <Link className="navButton" to="/testimonies">Témoignages</Link>
        <Link className="navButton" to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;