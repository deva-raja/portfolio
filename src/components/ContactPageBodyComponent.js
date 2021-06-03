import React from 'react';
import FormComponent from './FormComponent';
import FormImageComponent from './FormImageComponent';

function ContactPageBodyComponent() {
  return (
    <div className='content-container'>
      <FormImageComponent />
      <FormComponent />
    </div>
  );
}

export default ContactPageBodyComponent;
