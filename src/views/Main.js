import React from 'react';

import Navbar from '../components/NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Experience from './Experience';
import Footer from '../components/Footer';
import PagesTimeline from '../components/PagesTimeline';

import useMain from './useMain';

function Main() {
  const { activePage, setActivePage } = useMain();

  return (
    <div className="relative bg-background">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <PagesTimeline activePage={activePage}/>
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default Main