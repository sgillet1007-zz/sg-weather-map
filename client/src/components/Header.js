import React from 'react';
import logo from '../images/logo192.png';

const Header = () => {
  return (
    <header>
      <img src={logo} width='50px' height='50px' alt='colorado-logo' />
      <h2>Colorado Weather Map</h2>
    </header>
  );
};

export default Header;
