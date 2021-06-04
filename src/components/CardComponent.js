import { animated, to as interpolate } from '@react-spring/web';

function CardComponent({ bind, i, rot, scale, trans, cards }) {
  console.log({ cards });
  const styles = {
    transform: interpolate([rot, scale], trans),
  };

  return (
    <animated.div className='cards' {...bind(i)} style={styles}>
      <div
        className='card-image-container'
        style={{
          backgroundImage: `url(${cards.img})`,
        }}
      />
      <div className='card-body-container'>
        <h2>{cards.title}</h2>
        <p>{cards.content}</p>
      </div>
      <div className='card-btn-container'>
        <button onClick={() => console.log('it owrks ')}>view site</button>
        <button>view code</button>
      </div>
    </animated.div>
  );
}

export default CardComponent;
