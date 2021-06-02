import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import LandingPageBodyComponent from '../components/LandingPageBodyComponent';

function LandingPage() {
  return (
    <div className='landing-page'>
      <HeaderComponent />
      <LandingPageBodyComponent />
    </div>
  );
}

export default LandingPage;
