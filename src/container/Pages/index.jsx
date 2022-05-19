import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom';
import Contact from '../Contact';
import Portefolio from '../Portefolio';
import Testimonies from '../Testimonies';
import Home from '../Home';

// import './pages.scss'
const Pages = () => {
  return (
    <div className='containerPages'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portefolio" element={<Portefolio />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Pages;