import React from 'react';
import Hero from '../components/Hero/Hero';
import AddOns from '../components/AddOns/AddOns';
import Contact from '../components/Contact/Contact';
import FaqSection from '../components/FAQ/FaqSection';
import Benefits from '../components/Benefits/Benefits';

const Home = () => {
  return (
    <>
      <Hero />
      <AddOns />
      <Benefits />
      <FaqSection />
      <Contact />
    </>
  );
};

export default Home;
