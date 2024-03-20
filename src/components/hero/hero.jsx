import React, { useState, useEffect } from 'react';
import { heroImages } from '../../utils/heroSrcSet';
import s from './hero.module.scss';

export const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let srcSetHero = {};
  if (windowWidth < 768) {
    srcSetHero = {
      src: heroImages.heroMobil1X,
      srcSet: `${heroImages.heroMobil1X} 1x, ${heroImages.heroMobil2X} 2x`,
    };
  } else if (windowWidth >= 768 && windowWidth < 1280) {
    srcSetHero = {
      src: heroImages.heroTablet1X,
      srcSet: `${heroImages.heroTablet1X} 1x, ${heroImages.heroTablet2X} 2x`,
    };
  } else {
    srcSetHero = {
      src: heroImages.heroDesktop1X,
      srcSet: `${heroImages.heroDesktop1X} 1x, ${heroImages.heroDesktop2X} 2x`,
    };
  }

  return (
    <section className={s.sectionHero}>
      <div className={s.containerHero}>
        <div className={s.hero}>
          <div className={s.wrapTitle}>
            <p className={s.didYouSee}>diD yOu seE iT ?</p>
            <h1 className={s.title}>
              YACHT <span>APES</span>
            </h1>
            <p className={s.apes}>Apes aRe eveRywhere</p>
          </div>
          <img
            className={s.imgHero}
            src={srcSetHero.src}
            srcSet={srcSetHero.srcSet}
            alt="hero"
          />
          <div className={s.wrapDescription}>
            <a href="#" className={s.linkMeetApes}>
              MEET APES
            </a>
            <p>
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
