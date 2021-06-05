import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { useSpring, animated } from '@react-spring/web';

function AboutPageBodyComponent({ setPage }) {
  const styles = useSpring({
    loop: true,
    to: [
      {  color: '#acff2fb4' },
      { color: '#acff2f' },
    ],
    from: { color: '#acff2f83' },
  });

  const history = useHistory();
  const changePage = () => {
    setPage(2);
    history.push('/about');
  };

  return (
    <div className='about-story-container'>
      <div className='about-story-wrapper'>
        <div className='about-who'>
          <h2>who am i</h2>
          <p>
            I am Vinu Devaraj,a web developer from Champakulam Alapuzha,my github handle is
            <a
              className='github'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/deva-raja/'
            >
              deva-raja <FaArrowRight className='about-icons' />
            </a>
          </p>
        </div>
        <div className='about-what'>
          <h2>what did i study</h2>
          <p>
            I studied B-TECH in Computer Science from College Of Engineering And Management
            Punnapra.
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
