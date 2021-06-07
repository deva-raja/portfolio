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
          <a href={cards.site} className='card' target='_blank' rel='noreferrer'>
            view app
          </a>
          <a href={cards.git} className='card' target='_blank' rel='noreferrer'>
            view code
          </a>
      </div>
    </animated.div>
  );
}

export default CardComponent;
