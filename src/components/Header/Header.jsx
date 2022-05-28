import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logoHeader from '../../assets/images/Logo-header.png'

import { FaBars } from "react-icons/fa";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './header.scss'



const Header = ({
  Desktop,
  Tablet,
  Mobile
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Mobile>
        <header className='containerHeaderMobile'>
          <div className="blocLogoMobile">
            <Link to="/"><img className="logoHeaderMobile" src={logoHeader} /></Link>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}

          ><FaBars sx={{
            width: 500,
            maxWidth: '100%',
          }} className="burgerButtonMobile" />
          </Button>
          <Menu
            id="basic-menu"
            className="navMenuMobile"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',

            }}
          >
            <Link className="navButtonMobile" to="/"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
            <Link className="navButtonMobile" to="/portefolio"><MenuItem onClick={handleClose}>Portefolio</MenuItem></Link>
            <Link className="navButtonMobile" to="/testimonies"><MenuItem onClick={handleClose}>Témoignages</MenuItem></Link>
            <Link className="navButtonMobile" to="/contact"><MenuItem onClick={handleClose}>Contact</MenuItem></Link>
          </Menu>
        </header>
      </Mobile>
      <Tablet>
        <header className='containerHeader'>
          <div className="blocLogo">
            <Link to="/"><img className="logoHeader" src={logoHeader} /></Link>
          </div>
          <nav className="navButtons">
            <Link className="navButton" to="/">Home</Link>
            <Link className="navButton" to="/portefolio">Portefolio</Link>
            <Link className="navButton" to="/testimonies">Témoignages</Link>
            <Link className="navButton" to="/contact">Contact</Link>
          </nav>
        </header></Tablet>
      <Desktop>
        <header className='containerHeader'>
          <div className="blocLogo">
            <Link to="/"><img className="logoHeader" src={logoHeader} /></Link>
          </div>
          <nav className="navButtons">
            <Link className="navButton" to="/">Home</Link>
            <Link className="navButton" to="/portefolio">Portefolio</Link>
            <Link className="navButton" to="/testimonies">Témoignages</Link>
            <Link className="navButton" to="/contact">Contact</Link>
          </nav>
        </header>
      </Desktop>

    </div>

  );
}

export default Header;