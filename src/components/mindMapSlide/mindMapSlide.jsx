import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import s from './mindMapSlide.module.scss';
import { slides } from '../data/collectionMindMap';
import { Button } from '../button/button';

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
      <div className={s.slideshowContainer}>
        <ul className={s.slide}>
          <li className={s.slideList}>
            {slides[currentSlide].type === 'link' ? (
              <a href={slides[currentSlide].link} className={s.link}>
                {slides[currentSlide].text}
                <h3 className={s.title}>
                  {Array.isArray(slides[currentSlide].heading)
                    ? slides[currentSlide].heading.map((part, index) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < slides[currentSlide].heading.length - 1 && (
                            <br />
                          )}
                        </React.Fragment>
                      ))
                    : slides[currentSlide].heading}
                </h3>
              </a>
            ) : (
              <>
                <p className={s.text}>{slides[currentSlide].text}</p>
                <h3 className={s.title}>
                  {Array.isArray(slides[currentSlide].heading)
                    ? slides[currentSlide].heading.map((part, index) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < slides[currentSlide].heading.length - 1 && (
                            <br />
                          )}
                        </React.Fragment>
                      ))
                    : slides[currentSlide].heading}
                </h3>
              </>
            )}
          </li>
        </ul>
        <Button nextSlide={nextSlide} prevSlide={prevSlide} />
      </div>
    );
  } else {
    return (
      <ul className={s.slide}>
        {slides.map((slide, index) => (
          <li key={index} className={s.slideList}>
            {slide.type === 'link' ? (
              <a href={slide.link} className={s.link}>
                {slide.text}
                <h3 className={s.title}>
                  {Array.isArray(slide.heading)
                    ? slide.heading.map((part, index) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < slide.heading.length - 1 && <br />}
                        </React.Fragment>
                      ))
                    : slide.heading}
                </h3>
              </a>
            ) : (
              <>
                <p className={s.text}>{slide.text}</p>
                <h3 className={s.title}>
                  {Array.isArray(slide.heading)
                    ? slide.heading.map((part, index) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < slide.heading.length - 1 && <br />}
                        </React.Fragment>
                      ))
                    : slide.heading}
                </h3>
              </>
            )}
          </li>
        ))}
      </ul>
    );
  }
};
