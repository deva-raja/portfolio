import React from 'react';
import contactImg from '../images/contact.jpg';
import { GiSevenPointedStar } from 'react-icons/gi';
import { GiTriangleTarget } from 'react-icons/gi';
import { GiPlainCircle } from 'react-icons/gi';
import { VscDebugStop } from 'react-icons/vsc';
import { GiCircle } from 'react-icons/gi';
import { FiOctagon } from 'react-icons/fi';

import Tilt from 'react-tilt';

function FormImageComponent() {
  return (
    <Tilt className='contact-image'>
      <div className='contact-image-wrapper'>
        <img className='img' src={contactImg} alt='contact-me' />
        <GiPlainCircle className='form-image-icons form-icon1' />
        <FiOctagon className='form-image-icons form-icon2' />
        <VscDebugStop className='form-image-icons form-icon3' />
        <GiTriangleTarget className='form-image-icons form-icon4' />
        <GiSevenPointedStar className='form-image-icons form-icon5' />
      </div>
    </Tilt>
  );
}

export default FormImageComponent;
