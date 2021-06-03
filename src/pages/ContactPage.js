import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ContactPageBodyComponent from '../components/ContactPageBodyComponent';

function ContactPage() {
  return (
    <div className='contact-page'>
      <HeaderComponent />
      <ContactPageBodyComponent />
    </div>
  );
}

export default ContactPage;
