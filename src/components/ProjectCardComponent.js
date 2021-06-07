import React from 'react';
import ShowCaseCard from './ShowCaseCard';
import gotImg from '../images/got-card.jpg';
import doctorImg from '../images/doctor-card.jpg';
import stockImg from '../images/stock-card.jpg';

function ProjectCardComponent() {
  return (
    <div className='project-card-container'>
      <div className='project-card'>
        <ShowCaseCard
          img={gotImg}
          txt1='custom api'
          txt2='got characters '
          txt3='this is a react project which uses a custom api create by me to return characters info'
          link='https://game-of-thrones-characters.pages.dev/'
        />
        <ShowCaseCard
          img={doctorImg}
          txt1='jwt auth'
          txt2='hospital app'
          txt3='my best project,this is a mern stack hospital project with jwt authentication '
          link='https://medicity-5b5.pages.dev/'
        />
        <ShowCaseCard
          img={stockImg}
          txt1='material-ui'
          txt2='stock  tracker'
          txt3='this is a react project which helps us see the current stock market prices'
          link='https://stock-market-app.pages.dev/'
        />
      </div>
    </div>
  );
}

export default ProjectCardComponent;
