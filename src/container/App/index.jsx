import React from 'react'
import Header from '../../components/Header/Header';
import Pages from '../Pages/index'
import { useMediaQuery } from "react-responsive";

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

import './app.scss'
const App = () => {
  return (
    <div className='containerApp'>
      <Header Desktop={Desktop}
        Tablet={Tablet}
        Mobile={Mobile} />
      <Pages Desktop={Desktop}
        Tablet={Tablet}
        Mobile={Mobile} />
    </div>
  );
}

export default App;