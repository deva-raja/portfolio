import React from 'react';

function ShowCaseCard({ img, txt1, txt2, txt3, link }) {
  return (
    <a href={link} className='card' target='_blank' rel='noreferrer'>
      <img className='img' src={img} alt='doctor' />
      <div className='card-content'>
        <h2 className='card-heading'>{txt1}</h2>
        <p className='card-subheading'>{txt2}</p>
        <p className='card-body'>{txt3}</p>
      </div>
    </a>
  );
}

export default ShowCaseCard;
