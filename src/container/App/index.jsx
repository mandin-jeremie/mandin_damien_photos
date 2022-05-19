import React from 'react'
import Header from '../../components/Header/Header';
import Pages from '../Pages/index'

import './app.scss'
const App = () => {
  return (
    <div className='containerApp'>
      <Header />
      <Pages />
    </div>
  );
}

export default App;