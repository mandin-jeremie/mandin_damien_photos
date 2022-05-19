import React from 'react'
import { Link } from "react-router-dom";

import './header.scss'
const Header = () => {
  return (
    <div className='containerHeader'>
      <nav
        style={{
          textAlign: "center",
          margin: "1rem",
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/portefolio">Portefolio</Link> |{" "}
        <Link to="/testimonies">Témoignages</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
      </nav>
    </div>
  );
}

export default Header;