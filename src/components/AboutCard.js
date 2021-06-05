import React from 'react';

function AboutCard({ tech }) {
  return (
    <div className='tech-card'>
      <div className='img'>
        <img src={tech.img} alt='' />
      </div>
      <div className='title'>{tech.title}</div>
      <div className='content'>{tech.content}</div>
    </div>
  );
}

export default AboutCard;
