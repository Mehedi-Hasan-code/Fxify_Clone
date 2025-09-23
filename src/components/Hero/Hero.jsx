import React from 'react';
import Top from './Top';
import HeroMarquee from './HeroMarquee';

const Hero = () => {
  return (
    <div className="bg-[url(/Hero/hero-bg.png)] bg-no-repeat bg-cover bg-center">
      <Top />
      <HeroMarquee />
    </div>
  );
};

export default Hero;
