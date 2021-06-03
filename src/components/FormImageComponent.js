import React from 'react';
import contactImg from '../images/contact.jpg';
import { GiSevenPointedStar } from 'react-icons/gi';
import { GiTriangleTarget } from 'react-icons/gi';
import { GiPlainCircle } from 'react-icons/gi';
import { GiPlainSquare } from 'react-icons/gi';

function FormImageComponent() {
  return (
    <div className='contact-image'>
      <img src={contactImg} alt='contact-me' />
    </div>
  );
}

export default FormImageComponent;
