import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { useSpring, animated } from '@react-spring/web';

function AboutPageBodyComponent({ setPage }) {
  const styles = useSpring({
    loop: true,
    to: [{ color: '#acff2f' }, { color: '#acff2fb4' }],
    from: { color: '#acff2f83' },
  });

  const history = useHistory();
  const changePage = () => {
    setPage(2);
    history.push('/about');
  };

  const anim1 = useSpring({
    from: { marginLeft: -520 },
    to: { marginLeft: 0 },
    delay: 85,
  });

  return (
    <div className='about-story-container'>
      <div className='about-story-wrapper'>
        <div className='about-who'>
          <animated.h2 style={anim1}>who am i</animated.h2>
          <p>
            I am Vinu Devaraj,a web developer from Champakulam Alappuzha,my github handle is
            <a
              className='github'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/deva-raja/'
            >
              deva-raja <FaArrowRight className='about-icons' />
            </a>
            and my linkedIn profile is
            <a
              className='linkedIn'
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/vinu-devaraj/'
            >
              vinu-devaraj <FaArrowRight className='about-icons' />
            </a>
          </p>
        </div>
        <div className='about-what'>
          <animated.h2 style={anim1}>what did i study</animated.h2>
          <p>
            I studied B-TECH in Computer Science from College Of Engineering And Management
            Punnapra.
          </p>
        </div>
        <div className='about-why'>
          <animated.h2 style={anim1}>why should you hire me</animated.h2>
          <p>
            Experience in all levels of web development including designing, creating, and deploying
            websites.I am 100% confident that I can provide actual value to the company
          </p>
        </div>
        <div className='about-project'>
          <animated.h2 style={anim1}>what technologies do i know</animated.h2>
          <p>
            Now,that's a whole another
            <animated.span style={styles} className='projects' onClick={() => changePage()}>
              story <FaArrowRight className='about-icons' />
            </animated.span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPageBodyComponent;
