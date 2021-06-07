import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { useDispatch } from 'react-redux';
import { setFocus } from '../redux/focusSlice';

function CtaComponent() {
  const anim1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 285,
    config: { tension: 220, friction: 120 },
  });
  const anim2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 671,
    config: { tension: 220, friction: 120 },
  });
  const anim3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1157,
    config: { tension: 220, friction: 120 },
  });
  const anim4 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1642,
    config: { tension: 220, friction: 120 },
  });
  const anim5 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2328,
    config: { tension: 120, friction: 120 },
  });
  const anim6 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3014,
    config: { tension: 120, friction: 120 },
  });
  const anim7 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3500,
    config: { tension: 120, friction: 120 },
  });
  const anim8 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 4000,
    config: { tension: 120, friction: 120 },
  });

  const AnimatedLink = animated(Link);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setFocus(true));
  };

  return (
    <div className='cta-container'>
      <h1>
        <animated.span style={anim1}>Hi,</animated.span>
        <animated.span style={anim2}>i </animated.span>
        <animated.span style={anim3}>am </animated.span>
        <animated.span style={anim4}>vinu </animated.span>
      </h1>
      <AnimatedLink to='/contact' className='cta' style={anim5} onClick={handleClick}>
        {/* let's work together */}
        <animated.span style={anim6}>let's </animated.span>
        <animated.span style={anim7}>work </animated.span>
        <animated.span style={anim8}>together </animated.span>
      </AnimatedLink>
    </div>
  );
}

export default CtaComponent;
