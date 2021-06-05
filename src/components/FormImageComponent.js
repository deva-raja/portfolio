import React from 'react';
import contactImg from '../images/contact.jpg';
import { GiSevenPointedStar } from 'react-icons/gi';
import { GiTriangleTarget } from 'react-icons/gi';
import { GiPlainCircle } from 'react-icons/gi';
import { VscDebugStop } from 'react-icons/vsc';
import { FiOctagon } from 'react-icons/fi';

import Tilt from 'react-parallax-tilt';

function FormImageComponent() {
  return (
    <>
      <Tilt className='contact-image-container'>
        <div className='contact-image-wrapper'>
          <div>
            <GiPlainCircle className='form-image-icons form-icon1' />
            <VscDebugStop className='form-image-icons form-icon3' />
            <GiTriangleTarget className='form-image-icons form-icon4' />
          </div>
          <img className='img' src={contactImg} alt='contact-me' />
          <div>
            <GiSevenPointedStar className='form-image-icons form-icon5' />
            <FiOctagon className='form-image-icons form-icon2' />
          </div>
        </div>
      </Tilt>
    </>
  );
}

export default FormImageComponent;
