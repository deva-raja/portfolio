import React from 'react';
import FormComponent from './FormComponent';
import FormImageComponent from './FormImageComponent';

function ContactPageBodyComponent() {
  return (
    <div className='content-container'>
      <div className='form-container'>
        <FormImageComponent />
        <FormComponent />
      </div>
    </div>
  );
}

export default ContactPageBodyComponent;
