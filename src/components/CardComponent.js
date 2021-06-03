import { animated, to as interpolate } from '@react-spring/web';

function CardComponent({ bind, i, rot, scale, trans, cards }) {
  console.log({ cards });
  return (
    <animated.div
      className='cards'
      {...bind(i)}
      style={{
        transform: interpolate([rot, scale], trans),
        backgroundImage: `url(${cards.img})`,
      }}
    >
      <div>{cards.title}</div>
      <div className='card-btn-container'>
        <button>view site</button>
        <button>view code</button>
      </div>
    </animated.div>
  );
}

export default CardComponent;
