import React from 'react';
import CarouselItem from './Component/CarouselItem';
import './style.scss';
import { useState } from 'react';

const Carousel = ({ children }) => {
  const [items, setItems] = useState([
    children[children.length - 2],
    children[children.length - 1],
    ...children,
    children[0],
    children[1],
  ]);
  const [fade, setFade] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(2);

  const [touchPosition, setTouchPosition] = useState(null);
  // ...
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      previous();
    }

    setTouchPosition(null);
  };

  const next = () => {
    setCurrentIndex(currentIndex + 1);
    resetIndex();
  };

  const previous = () => {
    setCurrentIndex(currentIndex - 1);
    resetIndex();
  };

  const resetIndex = () => {
    if (currentIndex === 1) {
      setCurrentIndex(items.length - 3);
    } else if (currentIndex === items.length - 2) {
      setCurrentIndex(2);
    }
  };
  return (
    <div className="Carousel">
      <div className="Carousel__button" onClick={() => previous()}>
        <div className="Carousel__button__previous" />
      </div>
      <div
        className="Carousel__items"
        onTransitionEnd={resetIndex}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {items.map((item, i) => (
          <CarouselItem index={i} currentIndex={currentIndex}>
            {item}
          </CarouselItem>
        ))}
      </div>
      <div className="Carousel__button" onClick={() => next()}>
        <div className="Carousel__button__next" />
      </div>
    </div>
  );
};

export default Carousel;
