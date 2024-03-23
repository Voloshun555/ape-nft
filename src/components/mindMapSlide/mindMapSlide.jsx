import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { slides } from '../data/collectionMindMap';
import { Button } from '../button/button';
import { SlideCardMindMap } from '../slideCardMindMap/slideCardMindMap';
import s from './mindMapSlide.module.scss';

export const MindMapSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };
  if (isMobile) {
    return (
      <>
        <ul className={s.slide}>
          <SlideCardMindMap
            slide={slides[currentSlide]}
            isLink={slides[currentSlide].type === 'link'}
          />
        </ul>
        <Button nextSlide={nextSlide} prevSlide={prevSlide} />
      </>
    );
  } else {
    return (
      <ul className={s.slide}>
        {slides.map((slide, index) => (
          <SlideCardMindMap
            key={index}
            slide={slide}
            isLink={slide.type === 'link'}
          />
        ))}
      </ul>
    );
  }
};