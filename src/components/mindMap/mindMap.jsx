import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import s from './mindMap.module.scss'; 

export const MindMap = () => {
  const slides = [
    {
      text: 'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own',
      heading: 'YAPE DROP',
    },
    {
      text: 'Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game',
      heading: 'New Collection',
    },
    {
      text: 'Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it',
      heading: 'Token',
    },
    {
      text: '=',
      heading: 'Learn more in mind map',
    },
  ];

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
      <div className="slideshow-container">
        <div className="slide">
          <p>{slides[currentSlide].text}</p>
          <h3>{slides[currentSlide].heading}</h3>
        </div>
        <button className="prev" onClick={prevSlide}>
          Prev
        </button>
        <button className="next" onClick={nextSlide}>
          Next
        </button>
      </div>
    );
  } else {
    return (
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <p>{slide.text}</p>
            <h3>{slide.heading}</h3>
          </div>
        ))}
      </div>
    );
  }
};

