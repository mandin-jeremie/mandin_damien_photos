import React from 'react'

import {
  Routes,
  Route,
} from 'react-router-dom';

import ScrollToTop from '../../components/ScrollToTop'

import Contact from '../Contact';
import Portefolio from '../Portefolio';
import Testimonies from '../Testimonies';
import Home from '../Home';
import Baby from '../Portefolio/Baby';
import Pregnante from '../Portefolio/Pregnante';
import Marriage from '../Portefolio/Marriage';
import Portraits from '../Portefolio/Portraits';


// import './pages.scss'
const Pages = ({
  Desktop,
  Tablet,
  Mobile
}) => {
  return (
    <div className='containerPages'>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home
            Desktop={Desktop}
            Tablet={Tablet}
            Mobile={Mobile}
          />}
        />
        <Route path="/portefolio" element={<Portefolio />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portefolio/baby" element={<Baby />} />
        <Route path="/portefolio/pregnante" element={<Pregnante />} />
        <Route path="/portefolio/marriage" element={<Marriage />} />
        <Route path="/portefolio/portraits" element={<Portraits />} />
      </Routes>
    </div>
  );
}

export default Pages;