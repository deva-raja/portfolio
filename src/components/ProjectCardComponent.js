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
          txt3='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, quaerat!'
        />
        <ShowCaseCard
          img={doctorImg}
          txt1='jwt auth'
          txt2='hospital app'
          txt3='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, quaerat!'
        />
        <ShowCaseCard
          img={stockImg}
          txt1='material-ui'
          txt2='stock  tracker'
          txt3='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, quaerat!'
        />
      </div>
    </div>
  );
}

export default ProjectCardComponent;
