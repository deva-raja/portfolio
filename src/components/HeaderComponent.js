import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <div className='header'>
      <Link to='/' className='heading'>
        Vinu's portfolio
      </Link>
      <div className='links'>
        <Link to='/projects'>projects</Link>
        <Link to='/about'>about me</Link>
        <Link to='/contact'>contact</Link>
      </div>
    </div>
  );
}

export default HeaderComponent;
