import React from 'react';

function ShowCaseCard({ img, txt1, txt2, txt3 }) {
  return (
    <div className='card'>
      <img className='img' src={img} alt='doctor' />
      <div className='card-content'>
        <h2 className='card-heading'>{txt1}</h2>
        <p className='card-subheading'>{txt2}</p>
        <p className='card-body'>{txt3}</p>
      </div>
    </div>
  );
}

export default ShowCaseCard;
