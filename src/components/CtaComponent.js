import React from 'react';
import { Link } from 'react-router-dom';

function CtaComponent() {
  return (
    <div className='cta-container'>
      <h1>Hi,i am vinu</h1>
      <Link to='/contact' className='cta'>
        let's work together
      </Link>
    </div>
  );
}

export default CtaComponent;
