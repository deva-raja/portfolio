import React from 'react';

function CardComponent() {
  return (
    <div
      {...bind(i)}
      style={{
        transform: interpolate([rot, scale], trans),
        backgroundImage: `url(${cards[i]})`,
      }}
    />
  );
}

export default CardComponent;
