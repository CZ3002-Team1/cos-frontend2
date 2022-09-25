import React from 'react';
import './style.scss';
const CarouselItem = ({ children, index, currentIndex }) => {
  const offset = index - currentIndex;
  const active = Math.abs(currentIndex - index) <= 1 ? true : false;
  const behind = offset === 0 ? false : true;

  return (
    <div
      className="carousel-item"
      data-active={active}
      data-behind={behind}
      style={{ '--offset': offset }}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
