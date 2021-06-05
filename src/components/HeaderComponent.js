import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function HeaderComponent() {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <div className='header'>
      <Link to='/' className='heading'>
        Vinu's portfolio
      </Link>
      <div className='links'>
        <Link to='/projects' target='_blank' className={`${location.pathname === '/projects' ? 'active' : ''}`}>
          projects
        </Link>
        <Link to='/about' className={`${location.pathname === '/about' ? 'active' : ''}`}>
          about me
        </Link>
        <Link to='/contact' className={`${location.pathname === '/contact' ? 'active' : ''}`}>
          contact
        </Link>
      </div>
    </div>
  );
}

export default HeaderComponent;
