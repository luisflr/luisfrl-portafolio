import React from 'react';

import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Experience from './Experience';
import PagesTimeline from '../components/PagesTimeline';

function Main({ activePage }) {
  return (
    <div className="relative bg-background">
      
      <PagesTimeline activePage={activePage}/>
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  )
}

export default Main