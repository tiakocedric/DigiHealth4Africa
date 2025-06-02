import React from 'react';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Solutions />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;