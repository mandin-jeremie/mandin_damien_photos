import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logoHeader from '../../assets/images/Logo-header.png'
import { useMediaQuery } from "react-responsive";
import { FaBars } from "react-icons/fa";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './header.scss'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 150, maxWidth: 767 });
  return isMobile ? children : null;
};

const Header = () => {
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
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}><Link className="navButtonMobile" to="/">Home</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link className="navButtonMobile" to="/portefolio">Portefolio</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link className="navButtonMobile" to="/testimonies">Témoignages</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link className="navButtonMobile" to="/contact">Contact</Link></MenuItem>
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