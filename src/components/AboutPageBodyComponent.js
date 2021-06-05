import React from 'react';
import Typewriter from 'typewriter-effect';

function AboutPageBodyComponent() {
  return (
    <div className='about-container'>
      <div className='about-story-wrapper'>
        <div className='about-who'>
          <h2>who am i</h2>
          <p>
            I am Vinu Devaraj,a web developer from Champakulam Allapuzha,my github handle is
            @github.
          </p>
        </div>
        <div className='about-what'>
          <h2>what did i study</h2>
          <p>
            I studied B-TECH in Computer Science from College Of Engineering And Management Punnapra.
          </p>
        </div>
        <div className='about-why'>
          <h2>why should you hire me</h2>
          <p>
            I am Hardworking, Smart, kind of Creative and am quick to learn new technologies.I am
            100% confident that I can provide actual value to the company.
          </p>
        </div>
        <div className='about-project'>
          <h2>what technologies do i know</h2>
          <p>Now,that's a whole another story</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPageBodyComponent;
