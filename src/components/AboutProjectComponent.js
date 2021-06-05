import React from 'react';
import techData from '../data/tech';
import AboutCard from './AboutCard';

function AboutProjectComponent() {
  return (
    <div className='about-project-container'>
      {techData.map((tech, index) => (
        <AboutCard key={index} tech={tech} />
      ))}
    </div>
  );
}

export default AboutProjectComponent;
